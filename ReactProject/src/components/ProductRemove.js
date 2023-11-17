import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ProductRemove = () => {
  const [data1, setState] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/api/readproduct.php")
      .then(function (response) {
        setState(response.data);
      });
  }, []);
  const deleteData = (productid) => {
    axios
      .get("http://127.0.0.1:8080/api/deleteproduct.php?v=" + productid)
      .then(function (response) {
        window.location.reload();
        navigate("/productremove");
      });
  };

  return (
    <div>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>stock</th>
          <th>price</th>
        </tr>

        {data1.map((product) => (
          <tr>
            <td>{product.productid}</td>
            <td>{product.productname}</td>
            <td>{product.productstock}</td>
            <td>{product.productprice}</td>
            <td>
              <button onClick={() => deleteData(product.productid)}>
                delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ProductRemove;
