import { Route, Routes } from "react-router-dom";
import CreateNewEmployee from "../pages/CreateNewEmployee";
import EmployeesList from "../pages/EmployeesList";
import EmployeeDelete from "../pages/EmployeeDelete";
import Home from "../pages/Home";
import UpdateEmployee from "../pages/UpdateEmployee";
import DetailsEmployee from "../pages/DetailsEmployee";
import SideBar from "../pages/sideBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import styled from "@emotion/styled";
import building from "../imagens/2.png";

const Item = styled(Paper)();

function App() {
  const limitDisplay = window.screen.width < 1500;
  let displayImg = "";
  if (limitDisplay) {
    displayImg = { display: "none" };
  }

  console.log(window.screen.width);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <SideBar />
          </Grid>
          <Grid item xs={6}>
            <Item>
              <div
                style={{
                  position: "absolute",
                  width: 910,
                  top: 80,
                  left: 320,
                }}
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/createnewemployee"
                    element={<CreateNewEmployee />}
                  />
                  <Route path="/funcionarios" element={<EmployeesList />} />
                  <Route
                    path="/employeedelete/:id"
                    element={<EmployeeDelete />}
                  />
                  <Route
                    path="/updateemployee/:id"
                    element={<UpdateEmployee />}
                  />
                  <Route
                    path="/detailsemployee/:id"
                    element={<DetailsEmployee />}
                  />
                </Routes>
              </div>
            </Item>
          </Grid>
          <Grid item xs={3} {...displayImg}>
            <Item>
              <div
                style={{
                  margin: 0,
                  padding: 0,
                  minHeight: "83vh",
                  position: "fixed",
                  top: 55,
                  boxSizing: "initial",
                  width: "580px",
                  border: "1px solid #91C9FF",
                  outline: "none",
                  borderRadius: 18,
                }}
              >
                <img
                  src={building}
                  alt="welcome"
                  style={{
                    width: "90%",
                    top: 40,
                  }}
                />
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
