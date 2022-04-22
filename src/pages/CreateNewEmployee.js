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
    daysOfTheWeek: [],
    image: "",
    Office: "",
  });

  const navigate = useNavigate();
  const allDays = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
  ];

  function handleChange(event) {
    setNewEmployee({
      ...newEmployee,
      [event.target.name]: event.target.value,
    });
  }
  const handleCheck = (event) => {
    let updatedList = [...newEmployee.daysOfTheWeek];
    if (event.target.checked) {
      updatedList.push(event.target.value);
    } else {
      updatedList.splice(updatedList.indexOf(event.target.value), 1);
    }

    setNewEmployee({ ...newEmployee, daysOfTheWeek: updatedList });
  };

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(
        `https://ironrest.herokuapp.com/ironoffice-andre-cintia`,
        newEmployee
      )
      .then((response) => {
        console.log(response.data);
        navigate(`/funcionarios`);
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
          label="Carregar Foto"
          id="employeeImage"
          name="image"
          onChange={handleChange}
          value={newEmployee.image}
        />

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
          value={newEmployee.birthdate}
          type="date"
        />

        <FormControl
          label="Contato"
          id="employeeContact"
          name="contact"
          onChange={handleChange}
          value={newEmployee.contact}
        />

        <FormControl
          label="Função"
          id="employeeFunction"
          name="function"
          onChange={handleChange}
          value={newEmployee.function}
        />

        <FormControl
          label="Área"
          id="employeeArea"
          name="area"
          onChange={handleChange}
          value={newEmployee.area}
        />

        <FormControl
          label="Regime de Trabalho"
          id="employeeWorkRegime"
          name="workRegime"
          onChange={handleChange}
          value={newEmployee.workRegime}
        />
        <div>Dias de Trabalho:</div>
        {allDays.map((currentDay, index) => {
          return (
            <FormControl
              key={index}
              label={currentDay}
              id="employeeDaysOfTheWeek"
              name="daysOfTheWeek"
              onChange={handleCheck}
              value={currentDay}
              type="checkbox"
            />
          );
        })}
        <button type="submit">Salvar alterações</button>
      </form>
    </div>
  );
}

export default CreateNewEmployee;
