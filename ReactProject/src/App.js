import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import AdminHome from "./components/AdminHome";
import CategoryAdd from "./components/CategoryAdd";
import CategoryRemove from "./components/CategoryRemove";
import ProductAdd from "./components/ProductAdd";
import ProductRemove from "./components/ProductRemove";
import CustomerHome from "./components/CustomerHome";
import "./css/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewCategory from "./components/ViewCategory";
import ViewProduct from "./components/ViewProduct";
import OrderForm from "./components/OrderForm";
import PublicHome from "./components/PublicHome";
import Login from "./components/Login";
import CustomerRegister from "./components/CustomerRegister";
import PublicViewCategory from "./components/PublicViewCategory";
import PublicViewProduct from "./components/PublicViewProduct";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<AdminHome />}></Route>
          <Route path="/categoryadd" element={<CategoryAdd />}></Route>
          <Route path="/categoryremove" element={<CategoryRemove />}></Route>
          <Route path="/productadd" element={<ProductAdd />}></Route>
          <Route path="/productremove" element={<ProductRemove />}></Route>
          <Route path="/customerhome" element={<CustomerHome />}></Route>
          <Route path="/viewcategory" element={<ViewCategory />}></Route>
          <Route path="/viewproduct" element={<ViewProduct />}></Route>
          <Route path="/orderform" element={<OrderForm />}></Route>
          <Route path="/publichome" element={<PublicHome />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/customerregister"
            element={<CustomerRegister />}
          ></Route>
          <Route
            path="/publicviewcategory"
            element={<PublicViewCategory />}
          ></Route>
          <Route
            path="/publicviewproduct"
            element={<PublicViewProduct />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
