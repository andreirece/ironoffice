import { Routes, Route } from "react-router-dom";
import CreateNewEmployee from "../pages/CreateNewEmployee";
import EmployeesList from "../pages/EmployeesList";

function App() {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/createnewemployee" element={<CreateNewEmployee />} />
        <Route path="/funcionarios" element={<EmployeesList />} />
      </Routes>
    </div>
  );
}

export default App;
