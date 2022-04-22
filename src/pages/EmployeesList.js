import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const mystyle = {
  background: "#FFFFFF",
  boxShadow: "0px 0px 25px rgba(48, 73, 191, 0.30)",
  borderRadius: 16,
  margin: 60,
};

const mystyle2 = {
  lineHeight: 4,
  boxShadow: "0 0 3px 2px #cec7c759",
  borderRadius: 20,
  margin: 20,
  padding: "1.5em",
};

const Img = styled("img")({
  padding: 10,
  margin: "auto",
  display: "inline",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
});

const buttonStyle = {
  width: "180px",
  height: "60px",
  background: "transparent",
  border: "1px solid #91C9FF",
  outline: "none",
  borderRadius: 8,
};

function EmployeesList() {
  const [sortType, setSortType] = useState("ASC");
  const [sortField, setSortField] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ironrest.herokuapp.com/ironoffice-andre-cintia`)
      .then((response) => {
        setEmployees(...[response.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!employees) return null;

  function handleInput(e) {
    const inputValue = e.target.value;
    setSearchText(inputValue);
  }

  function filterEmployees(emp) {
    if (!searchText.length) return true;
    const search = searchText.toLowerCase();
    const empName = emp.name.toLowerCase();
    return empName.includes(search);
  }

  function sortEmployees(empA, empB) {
    if (sortField) {
      const valueA = empA[sortField];
      const valueB = empB[sortField];
      switch (sortType) {
        case "ASC":
          return valueA.localeCompare(valueB);
        case "DESC":
          return valueB.localeCompare(valueA);
        default:
      }
    }
    return 0;
  }

  function getNextSortType() {
    switch (sortType) {
      case "ASC":
        return "DESC";
      case "DESC":
        return null;
      default:
        return "ASC";
    }
  }

  function handleClickSortField(field) {
    if (sortField === field) {
      setSortType(getNextSortType());
    } else {
      setSortField(field);
    }
  }

  return (
    <div>
      <input
        className="form-input"
        onChange={handleInput}
        id="input-table"
        placeholder="  Nome do funcionário"
        style={{
          width: 323,
          height: 56,
          left: 0,
          top: 10,
          marginTop: 1000,
          margin: 8,
          backgroundColor: "#FFFFFF",
          borderColor: "#ADD8E6",
          borderRadius: "16px",
        }}
      />
      <table width="100%" style={{ position: "center", maxWidth: 1000 }}>
        <tbody>
          <tr style={{ ...mystyle2, cursor: "pointer" }}>
            <th>Foto</th>
            <th onClick={() => handleClickSortField("name")}>Colaborador</th>
            <th onClick={() => handleClickSortField("contact")}>Contato</th>
            <th onClick={() => handleClickSortField("function")}>Função</th>
            <th onClick={() => handleClickSortField("area")}>Área</th>
          </tr>
          {employees
            .filter(filterEmployees)
            .sort(sortEmployees)
            .map((currentEmployees) => (
              <tr style={mystyle} key={currentEmployees._id}>
                <td>
                  <Img
                    src={currentEmployees.image}
                    alt={currentEmployees.name}
                  />
                </td>
                <td>
                  <h5>{currentEmployees.name}</h5>
                </td>
                <td>{currentEmployees.contact}</td>
                <td>{currentEmployees.function}</td>
                <td>{currentEmployees.area}</td>
                <td>
                  <Link
                    title="details"
                    to={`/detailsemployee/${currentEmployees._id}`}
                  >
                    <button type="button" style={buttonStyle}>
                      Saber mais
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeesList;
