import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';




function EmployeesList() {

    const [employees, setEmployees] = useState([]);

    const Img = styled('img')({
        margin: 'auto',
        display: 'inline',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
      });

  
    useEffect(() => {
    

      axios.get(`https://ironrest.herokuapp.com/ironoffice-andre-cintia`).then((response) => {
        setEmployees(...[response.data]);
      }).catch ((err)=> {console.error(err)});
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

  const user = setEmployees[i].usuario.toLowerCase();

  if (user.includes(newValue)) {
    filteredData.push(setEmployees[i]);
  }
 }
 return filteredData;
}

/*------------------------------------------------------------*/
 function sorted() {
    const sortedEmployees = [...employees];
    sortedEmployees.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });}

  console.log(employees);
/*------------------------------------------------------------*/
   
  return (
    <table>
      <thead>
      <input
       className="form-input"
       onChange={handleInput} 
       id="input-table"
       placeholder="Ache um Usuario"
      />
        <tr>
          <th>Colaborador</th>
          <th> <button type="button" onClick={() => sorted('Nome')}> Nome </button></th>
          <th>Contato</th>
          <th>Função</th>
          <th>Área</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((currentEmployees) => (

        <tr key={currentEmployees._id}>
<Img src={currentEmployees.image} alt={currentEmployees.name}/>

            <td>{currentEmployees.name}
</td>
            <td>{currentEmployees.contact}
</td>
           <td>{currentEmployees.function}
</td>
            <td>{currentEmployees.area}
</td>
          </tr>
        ))}
      </tbody>
    </table>
  );}

export default EmployeesList;


 