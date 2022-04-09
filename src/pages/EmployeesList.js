import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";



function EmployeesList() {

    const [employees, setEmployees] = useState([]);

  
    useEffect(() => {
    

      axios.get(`https://ironrest.herokuapp.com/ironoffice-andre-cintia`).then((response) => {
        setEmployees(...[response.data]);
      }).catch ((err)=> {console.error(err)});
    }, []);
    console.log(employees)
  
    if (!employees) return null;
    
  
    return (
        <div>

        {employees.map((currentEmployees) => {


          return (
 
          <tr key={currentEmployees._id}>
            <th>
            <img className="employeeImage" src={currentEmployees.image} alt={currentEmployees.name}/>
            </th>
            <th>{currentEmployees.name}</th>
            <th>{currentEmployees.area}</th>
          </tr>

        )})}

      </div>
    );
}

export default EmployeesList;


 