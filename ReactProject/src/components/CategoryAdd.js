import React from "react";
import { useState } from "react";
import axios from "axios";
const CategoryAdd = () => {
  const [data, setdata] = useState({
    id: "",
    name: "",
    description: "",
  });

  const formhandlechange = (e) => {
    setdata((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8081/categoryadd", data)
      .then(function (response) {});
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="f1">
        <label>id:</label>
        <input
          type="number"
          name="id"
          value={data.id}
          onChange={formhandlechange}
        ></input>
        <br></br>
        <label>name:</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={formhandlechange}
        ></input>
        <br></br>
        <label>description:</label>
        <input
          type="text"
          name="description"
          value={data.description}
          onChange={formhandlechange}
        ></input>
        <br></br>
        <button>ok</button>
      </form>
    </>
  );
};

export default CategoryAdd;
