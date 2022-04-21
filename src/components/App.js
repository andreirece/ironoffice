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


function App() {
  return (
<div>
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid>
          <SideBar1 />
          </Grid>
          <Grid container spacing={4}
            direction="row"
            justifyContent="center"
            alignItems="center">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createnewemployee" element={<CreateNewEmployee />} />
        <Route path="/funcionarios" element={<EmployeesList />} />
        <Route path="/employeedelete/:id" element={<EmployeeDelete />} />
        <Route path="/updateemployee/:id" element={<UpdateEmployee />} />
        <Route path="/detailsemployee/:id" element={<DetailsEmployee />} />
      </Routes>
      </Grid>
      </Grid>
    </Box>
      </div>
  );
}

export default App;

