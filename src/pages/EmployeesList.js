import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Img = styled("img")({
  margin: "auto",
  display: "inline",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
});

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

  /*------------------------------------------------------------*/

  return (
    <div style={{ width: "100%", paddingLeft: 250 }}>
      <input
        className="form-input"
        onChange={handleInput}
        id="input-table"
        placeholder="Nome do funcionário"
        style={{ width: 380 }}
      />
      <table width="100%" style={{ marginTop: 25 }}>
        <tr style = {{cursor: "pointer"}}>
          <th></th>
          <th onClick={() => handleClickSortField("name")}>Colaborador</th>
          <th onClick={() => handleClickSortField("contact")}>Contato</th>
          <th onClick={() => handleClickSortField("function")}>Função</th>
          <th onClick={() => handleClickSortField("area")}>Área</th>
        </tr>
        {employees
          .filter(filterEmployees)
          .sort(sortEmployees)
          .map((currentEmployees) => (
            <tr key={currentEmployees._id}>
              <td>
                <Img src={currentEmployees.image} alt={currentEmployees.name} />
              </td>
              <td>{currentEmployees.name}</td>
              <td>{currentEmployees.contact}</td>
              <td>{currentEmployees.function}</td>
              <td>{currentEmployees.area}</td>
              <td>
                <Link
                  title="details"
                  to={`/detailsemployee/${currentEmployees._id}`}
                >
                  SABER MAIS
                </Link>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default EmployeesList;
