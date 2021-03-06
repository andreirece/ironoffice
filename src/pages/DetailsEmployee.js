import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function DetailsEmployee() {
  const [employee, showEmployee] = useState({
    name: "",
    birthdate: "",
    contact: "",
    function: "",
    area: "",
    workRegime: "",
    daysOfTheWeek: [],
    image: "",
    office: "",
  });

  const buttonStyle = {
    width: "180px",
    height: "60px",
    background: "transparent",
    border: "1px solid #91C9FF",
    outline: "none",
    borderRadius: 8,
  };

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ironrest.herokuapp.com/ironoffice-andre-cintia/${id}`)
      .then((response) => {
        console.log(response);
        showEmployee({ ...response.data });
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div>
      <img
        style={{ height: "300px" }}
        src={employee.image}
        alt={employee.name}
      />
      <h1>Nome: {employee.name}</h1>
      <p>
        <b>Data de nascimento: </b>
        {employee.birthdate}
      </p>
      <p>
        <b>Função:</b> {employee.function}
      </p>
      <p>
        <b>Área:</b> {employee.area}
      </p>
      <p>
        <b>Regime de trabalho:</b> {employee.workRegime}
      </p>
      <p>
        <b>Dias de trabalho (presencial):</b>{" "}
        {employee.daysOfTheWeek.map((currentDay, index) => {
          return <p key={index}> {currentDay} </p>;
        })}
      </p>
      <p>
        <b>Unidade:</b> {employee.office}
      </p>
      <Link title="Editar" to={`/updateemployee/${id}`}>
        <button type="button" style={buttonStyle}>
          {" "}
          Editar
        </button>
      </Link>
      <b> </b>
      <Link title="Deletar" to={`/employeedelete/${id}`}>
        <button type="button" style={buttonStyle}>
          {" "}
          Deletar
        </button>
      </Link>
    </div>
  );
}

export default DetailsEmployee;
