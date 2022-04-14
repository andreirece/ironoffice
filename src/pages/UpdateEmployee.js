import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import FormControl from "../components/FormControl";

function UpdateEmployee() {
  const [employee, setEmployee] = useState({
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
  const { id } = useParams();
  const allDays = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
  ];

  useEffect(() => {
    let cloneEmployee = {};
    axios
      .get(`https://ironrest.herokuapp.com/ironoffice-andre-cintia/${id}`)
      .then((response) => {
        cloneEmployee = response.data;
        delete cloneEmployee._id;
        setEmployee(cloneEmployee);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  function handleChange(event) {
    setEmployee({ ...employee, [event.target.name]: event.target.value });
  }

  const handleCheck = (event) => {
    let updatedList = [...employee.daysOfTheWeek];
    if (event.target.checked) {
      updatedList.push(event.target.value);
    } else {
      updatedList.splice(updatedList.indexOf(event.target.value), 1);
    }

    setEmployee({ ...employee, daysOfTheWeek: updatedList });
  };

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put(
        `https://ironrest.herokuapp.com/ironoffice-andre-cintia/${id}`,
        employee
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
          value={employee.image}
        />

        <FormControl
          label="Nome"
          id="employeeCreateName"
          name="name"
          onChange={handleChange}
          value={employee.name}
        />

        <FormControl
          label="Data de Nascimento"
          id="employeeBirthDate"
          name="birthDate"
          onChange={handleChange}
          value={employee.birthdate}
          type="date"
        />

        <FormControl
          label="Contato"
          id="employeeContact"
          name="contact"
          onChange={handleChange}
          value={employee.contact}
        />

        <FormControl
          label="Função"
          id="employeeFunction"
          name="function"
          onChange={handleChange}
          value={employee.function}
        />

        <FormControl
          label="Área"
          id="employeeArea"
          name="area"
          onChange={handleChange}
          value={employee.area}
        />

        <FormControl
          label="Regime de Trabalho"
          id="employeeWorkRegime"
          name="workRegime"
          onChange={handleChange}
          value={employee.workRegime}
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
              checked={employee.daysOfTheWeek.map((checkedDay) => {
                if (checkedDay === currentDay) {
                  return true;
                } else {
                  return false;
                }
              })}
            />
          );
        })}
        <button type="submit">Salvar alterações</button>
      </form>
    </div>
  );
}

export default UpdateEmployee;
