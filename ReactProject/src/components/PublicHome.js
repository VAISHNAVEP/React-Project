import React from "react";
import { Link } from "react-router-dom";
import "../css/publichome.css";
const PublicHome = () => {
  return (
    <div>
      <Link id="publiclnk" to="/login">
        login
      </Link>
      <Link id="publiclnk" to="/customerregister">
        customer register
      </Link>
      <Link id="publiclnk" to="/publicviewcategory">
        viewcategory
      </Link>

      <h1 id="public">PUBLIC HOME</h1>
    </div>
  );
};

export default PublicHome;
