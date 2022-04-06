import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import FormControl from "../components/FormControl";

function CreateNewEmployee() {
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    birthdate: "",
    contact: "",
    function: "",
    area: "",
    workRegime: "",
    daysOfTheWeek: "[]",
    image: "",
  });

  const navigate = useNavigate();

  function handleChange(event) {
    setNewEmployee({ ...newEmployee, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(
        `https://ironrest.herokuapp.com/ironoffice-andre-cintia`,
        newEmployee
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      <h1>Novo Funcionário</h1>
      <form onSubmit={handleSubmit}>
        <FormControl
          label="Nome"
          id="employeeCreateName"
          name="name"
          onChange={handleChange}
          value={newEmployee.name}
        />

        <FormControl
          label="Data de Nascimento"
          id="employeeBirthDate"
          name="birthDate"
          onChange={handleChange}
          value={newEmployee.birthDate}
        />

        <FormControl
          label="Nome"
          id="employeeCreateName"
          name="name"
          onChange={handleChange}
          value={newEmployee.name}
        />

        <FormControl
          label="Nome"
          id="employeeCreateName"
          name="name"
          onChange={handleChange}
          value={newEmployee.name}
        />

        <FormControl
          label="Nome"
          id="employeeCreateName"
          name="name"
          onChange={handleChange}
          value={newEmployee.name}
        />
      </form>
    </div>
  );
}

export default CreateNewEmployee;
