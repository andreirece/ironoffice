import React, { useState, useEffect } from "react";
import axios from "axios";
import image from "../imagens/welcome.png"


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
    <div>
    <div><img src={image} alt="welcome" /></div>
    <div>
      <h5 style={{            
          width: 800,
          position: "center",
          padding: "12px",
          color: "#4864fc",
          font:"lato",
          display: "flex",
          margin:5,
          boxShadow: "0px 0px 25px rgba(48, 73, 191, 0.30)",
          borderRadius: 16,
        }}><b>ANIVERSARIANTES DO MÊS:</b></h5>
      {birthdates.map((current) => {
        return (
          <div key={current._id} style={{            
          backgroundColor: "#4864fc",
          width: 800,
          position: "center",
          padding: "10px",
          color: "white",
          font:"lato",
          display: "flex",
          margin:4,
          boxShadow: "0px 0px 25px rgba(48, 73, 191, 0.30)",
          borderRadius: 16,
        }}>
            <img
              src={current.image}
              alt={current.name}
              style={{
                margin: "10px",
                display: "inline",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
              }}
            />
            <div style={{ marginTop: "15px" }}>
              <div><h3>{current.name}🎉</h3></div>
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
    </div>
  );
}

export default Home;
