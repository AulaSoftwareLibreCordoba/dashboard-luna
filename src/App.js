import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Denuncias from "./components/denuncias";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/denuncias-dash" element={<Denuncias />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
