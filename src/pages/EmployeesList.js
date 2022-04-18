import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

function EmployeesList() {
  const [employees, setEmployees] = useState([]);

  const Img = styled("img")({
    margin: "auto",
    display: "inline",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  });

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
    setEmployees(searchTable(inputValue));
  }

  function searchTable(value) {
    const filteredData = [];
    if (value.length === 0) {
      return employees;
    }
    for (let i = 0; i < employees.length; ++i) {
      const newValue = value.toLowerCase();
      const user = employees[i].name.toLowerCase();
      if (user.includes(newValue)) {
        filteredData.push(employees[i]);
      }
    }
    return filteredData;
  }

  /*------------------------------------------------------------*/

  function sorted() {
    const clone = [...employees];
    clone.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setEmployees(clone);
  }

  /*------------------------------------------------------------*/

  return (
    <div>
      {" "}
      <input
        className="form-input"
        onChange={handleInput}
        id="input-table"
        placeholder="Nome do funcionário"
      />
      <table>
        <tr>
          <th>Colaborador</th>
          <th>
            <button type="button" onClick={() => sorted()}>
              Nome
            </button>
          </th>
          <th>Contato</th>
          <th>Função</th>
          <th>Área</th>
        </tr>

        {employees.map((currentEmployees) => (
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
