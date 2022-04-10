import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EmployeeDelete() {
  const { id } = useParams();
  const navigate  = useNavigate();

  useEffect(() => {
    const areYouSure = window.confirm(
      "Se você deletar este cadastro, as informações não poderão ser recuperadas. Você tem certeza?"
    );

    if (areYouSure) {
      return axios
        .delete(`https://ironrest.herokuapp.com/ironoffice-andre-cintia/${id}`)
        .then((response) => {
          navigate(`/`);
        })
        .catch((err) => console.error(err));
    }
    navigate(-1);
  }, [id, navigate]);


  return <div>Excluindo cadastro...</div>;
}

export default EmployeeDelete;
