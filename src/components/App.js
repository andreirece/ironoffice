import { Routes, Route } from "react-router-dom";
import CreateNewEmployee from "../pages/CreateNewEmployee";

function App() {
  return (
    <div>
      {" "}
      <Routes>
        <Route path="/createnewemployee" element={<CreateNewEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
