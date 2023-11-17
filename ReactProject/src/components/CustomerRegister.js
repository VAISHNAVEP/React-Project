import React from "react";
import { useState } from "react";
import axios from "axios";
import "../css/customerregister.css";
const CustomerRegister = () => {
  const [data, setdata] = useState({
    customerid: "",
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const formhandlechange = (e) => {
    setdata((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8081/registration", data)
      .then(function (response) {});
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="register">
        <label>customer id:</label>
        <input
          type="text"
          name="customerid"
          value={data.customerid}
          onChange={formhandlechange}
        />
        <br></br>
        <label>name:</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={formhandlechange}
        />
        <br></br>
        <label>phone:</label>
        <input
          type="number"
          name="phone"
          value={data.phone}
          onChange={formhandlechange}
        />
        <br></br>
        <label>email:</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={formhandlechange}
        />
        <br></br>
        <label>address:</label>
        <input
          type="text"
          name="address"
          value={data.address}
          onChange={formhandlechange}
        />
        <br></br>
        <button type="submit" id="regbutton">
          submit
        </button>
      </form>
    </div>
  );
};

export default CustomerRegister;
