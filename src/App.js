import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Pages/Home/Home/Home";
import Login from "./Components/Shared/Login/Login";
import SignUp from "./Components/Shared/SignUp/SignUp";
import ProductDetails from "./Components/Pages/ProductDetails/ProductDetails";
import Requires from "./Components/Shared/Requires/Requires";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/products/:productId"
          element={
            <Requires>
              <ProductDetails></ProductDetails>
            </Requires>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}
export default App;
