import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home/Home/Home";
import Inventorys from "./Components/Pages/Inventorys/Inventorys";
import Login from "./Components/Shared/Login/Login";
import SignUp from "./Components/Shared/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventorys></Inventorys>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}
export default App;
