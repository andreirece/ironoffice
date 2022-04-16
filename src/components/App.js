import { Route, Routes} from "react-router-dom";
import CreateNewEmployee from "../pages/CreateNewEmployee";
import EmployeesList from "../pages/EmployeesList";
import EmployeeDelete from "../pages/EmployeeDelete";
import Home from "../pages/Home";
import UpdateEmployee from "../pages/UpdateEmployee";
import DetailsEmployee from "../pages/DetailsEmployee";



function App() {
  return (
<div>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/" element={<Home />} />
        <Route path="/createnewemployee" element={<CreateNewEmployee />} />
        <Route path="/funcionarios" element={<EmployeesList />} />
        <Route path="/employeedelete/:id" element={<EmployeeDelete />} />
        <Route path="/updateemployee/:id" element={<UpdateEmployee />} />
        <Route path="/detailsemployee/:id" element={<DetailsEmployee />} />
      </Routes>
      </div>
  );
}

export default App;
