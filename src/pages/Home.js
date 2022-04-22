import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [birthdates, setBirthdates] = useState([]);
  let today = "0" + (new Date().getMonth() + 1);
  let birthdatesClone = [];

  useEffect(() => {
    axios
      .get(`https://ironrest.herokuapp.com/ironoffice-andre-cintia`)
      .then((response) => {
        response.data.map((currentEmployee) => {
          let actualDate =
            currentEmployee.birthdate[5] + currentEmployee.birthdate[6];
          if (actualDate.includes(today)) {
            birthdatesClone.push(currentEmployee);
          }
          return birthdatesClone;
        });
        setBirthdates(...[birthdatesClone]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#FF993A",
        padding: "20px 50px",
        borderRadius: "2%",
        color: "white",
      }}
    >
      ANIVERSARIANTES DO MÊS:
      {birthdates.map((current) => {
        return (
          <div key={current._id} style={{ display: "flex" }}>
            <img
              src={current.image}
              alt={current.name}
              style={{
                margin: "10px",
                display: "inline",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
              }}
            />
            <div style={{ marginTop: "15px" }}>
              <div>{current.name}</div>
              <div>{current.area}</div>
              <div>{`${current.birthdate.substring(
                8,
                10
              )}/${current.birthdate.substring(5, 7)}`}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
