import "./App.css";
import { Login } from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { DetailsCar } from "./pages/DetailsCar";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/details" element={<DetailsCar />} />
    </Routes>
  )
}

export default App;
