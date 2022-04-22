import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";



function EmployeesList() {
  const [employees, setEmployees] = useState([]);

  const mystyle = {
    background: "#FFFFFF",
    boxShadow: "0px 0px 25px rgba(48, 73, 191, 0.30)",
    borderRadius: 16,
    margin: 60,
  }

  const mystyle2 = {
    lineHeight: 4,
    boxShadow: "0 0 3px 2px #cec7c759",
    borderRadius: 20,
    margin: 20,
    padding: '1.5em',
  }

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
  }

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
        placeholder="  Nome do funcionário"
        style={{
        width: 323,
        height: 56,
        left: 0,
        top: 10,
        marginTop:1000,
        margin:8,
        backgroundColor: "#FFFFFF",
        borderColor:"#ADD8E6",
        borderRadius: "16px",
        }}
 />
      <Stack direction="row" spacing={5} >
        <Button variant="outlined" type="button" onClick={() => sorted()}>
          {" "}
          Nome{" "}
        </Button>
      </Stack>
      <table style={{position:"center",
      maxWidth: 1000}}>
      <tr style={mystyle2}>
        <th>Foto</th>
        <th>Nome</th>
        <th>Contato</th>
        <th>Função</th>
        <th>Área</th>
      </tr>
      {employees.map((currentEmployees) => (
        <tr style={mystyle} key={currentEmployees._id}>
          <td>
            <Img src={currentEmployees.image} alt={currentEmployees.name} />  
          </td>
          <td><h5>{currentEmployees.name}</h5></td>
          <td>{currentEmployees.contact}</td>
          <td>{currentEmployees.function}</td>
          <td>{currentEmployees.area}</td>
          <td>
          
            <Link
              title="details"
              to={`/detailsemployee/${currentEmployees._id}`}
            >
             <button type="button" style={buttonStyle}> Saber mais </button>  
            </Link>
            
          </td>
        </tr>
      ))}
      </table>
    </div>
  );
}

export default EmployeesList;
