import { Route, Routes} from "react-router-dom";
import CreateNewEmployee from "../pages/CreateNewEmployee";
import EmployeesList from "../pages/EmployeesList";
import EmployeeDelete from "../pages/EmployeeDelete";
import Home from "../pages/Home";
import UpdateEmployee from "../pages/UpdateEmployee";
import DetailsEmployee from "../pages/DetailsEmployee";
import SideBar1 from "../pages/sideBar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Paper } from "@mui/material";
import styled from "@emotion/styled";
import building from "../imagens/2.png"

const Item = styled(Paper)();


function App() {
  return (
<div>
<Box sx={{ flexGrow: 1 }} >
        <Grid container spacing={3} >
        <Grid item xs={3} >
          <SideBar1 />
          </Grid>
          <Grid item xs={6} > <Item>
          <div style={{
            position: "absolute",
            width: "800px",
            top: 80}}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createnewemployee" element={<CreateNewEmployee />} />
        <Route path="/funcionarios" element={<EmployeesList />} />
        <Route path="/employeedelete/:id" element={<EmployeeDelete />} />
        <Route path="/updateemployee/:id" element={<UpdateEmployee />} />
        <Route path="/detailsemployee/:id" element={<DetailsEmployee />} />
      </Routes>
      </div>
      </Item>
        </Grid>
      <Grid item xs={3}>
      <Item>
      <div style={{
            margin: 0,
            padding: 0,
            minHeight: '83vh',
            position: "fixed",
            top: 55,
            boxSizing: "initial",
            width: "580px",
            border: "1px solid #91C9FF",
            outline: "none",
            borderRadius: 18,}}>
        <img src={building} alt="welcome" style={{

            width: "90%",
            top: 40}}/>

        </div>
        </Item>
        </Grid>
      </Grid>
    </Box>
      </div>
  );
}

export default App;

