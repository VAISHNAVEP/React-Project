import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [v1, setV1] = useState({ username: "", password: "" });

  const msg = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setV1({ ...v1, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/login", v1)
      .then(function (res) {
        console.log(res);
        if (res.data.success) {
          navigate("/customerhome");
        } else {
          alert("Invalid email or password");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form id="loginfrm" onSubmit={handleSubmit}>
        <label>username</label>
        <input type="text" value={v1.username} name="username" onChange={msg} />
        <br></br>
        <label>password</label>
        <input
          type="password"
          name="password"
          value={v1.password}
          onChange={msg}
        />
        <br></br>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
