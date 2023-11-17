import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const ProductAdd = () => {
  const [data1, setState] = useState([]);
  const [data, setdata] = useState({
    id: "",
    name: "",
    stock: "",
    price: "",
    categoryid: "",
  });

  const formhandlechange = (e) => {
    setdata((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  useEffect(() => {
    axios.get("http://localhost:8081/readcategories").then(function (response) {
      setState(response.data);
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8081/productadd", data)
      .then(function (response) {
        console.log(data);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} id="f2">
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
        <label>stock:</label>
        <input
          type="number"
          name="stock"
          value={data.stock}
          onChange={formhandlechange}
        ></input>
        <br></br>
        <label>price:</label>
        <input
          type="number"
          name="price"
          value={data.price}
          onChange={formhandlechange}
        ></input>
        <br></br>
        <label>category id</label>
        <br></br>
        <select
          name="categoryid"
          onChange={formhandlechange}
          value={data.categoryid}
        >
          <option>Select</option>
          {data1.map((user) => (
            <option value={user.categoryid}>{user.categoryname}</option>
          ))}
        </select>
        <br></br>
        <button>submit</button>
      </form>
    </>
  );
};

export default ProductAdd;
