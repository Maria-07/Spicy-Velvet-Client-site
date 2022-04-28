import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Pages/Home/Home";
import Home from "./Components/Pages/Home/Home";
import Inventorys from "./Components/Pages/Inventorys/Inventorys";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventorys></Inventorys>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}
export default App;
