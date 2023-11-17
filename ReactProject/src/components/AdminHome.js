import React from "react";
import "../css/adminhome.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useNavigate } from "react-router-dom";
const AdminHome = () => {
  const navigate = useNavigate();
  const msg1 = () => {
    sessionStorage.removeItem("uid");
    navigate("/publichome");
  };
  return (
    <>
      <div>
        <Dropdown id="drop">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            category
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/categoryadd">Add</Dropdown.Item>
            <Dropdown.Item href="/categoryremove">remove</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <Dropdown id="drop">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            product
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/productadd">Add</Dropdown.Item>
            <Dropdown.Item href="/productremove">remove</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <a id="logad" onClick={msg1}>
          logout
        </a>
      </div>

      <div className="admindiv">
        <h1 className="admin">ADMIN HOME</h1>
      </div>
    </>
  );
};

export default AdminHome;
