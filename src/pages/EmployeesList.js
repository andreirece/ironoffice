import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';



function EmployeesList() {

    const [employees, setEmployees] = useState([]);

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      });

  
    useEffect(() => {
    

      axios.get(`https://ironrest.herokuapp.com/ironoffice-andre-cintia`).then((response) => {
        setEmployees(...[response.data]);
      }).catch ((err)=> {console.error(err)});
    }, []);
    console.log(employees)
  
    if (!employees) return null;
    
  
    return (
        <div>

     <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
        

        {employees.map((currentEmployees) => {

          return (

            <Grid container spacing={2}>    
 
          <tr key={currentEmployees._id}>
            <th style={{width: "100px"}}>
           
            <Img src={currentEmployees.image} alt={currentEmployees.name}/>
            </th>
            <th>{currentEmployees.name}</th>
            <th>{currentEmployees.area}</th>
          </tr>
          

            </Grid>
        )})}
        </Paper>
      </div>
    );
}

export default EmployeesList;


 