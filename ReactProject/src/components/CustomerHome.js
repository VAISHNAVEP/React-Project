import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/customerhome.css";
const CustomerHome = () => {
  const navigate = useNavigate();
  const msg2 = () => {
    sessionStorage.removeItem("uid2");
    navigate("/publichome");
  };

  return (
    <>
      <div>
        <Link id="link" to="/viewcategory">
          viewcategory
        </Link>
        <a onClick={msg2}>logout</a>
      </div>
      <div>
        <h1 id="customer">CUSTOMER HOME</h1>
      </div>
    </>
  );
};

export default CustomerHome;
