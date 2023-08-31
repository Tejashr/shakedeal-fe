import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import AssignTask from "./components/Assigntask";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AssignTask />} />
      </Routes>
    </div>
  );
}

export default App;
