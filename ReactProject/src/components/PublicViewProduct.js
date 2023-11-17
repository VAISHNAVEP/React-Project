import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const PublicViewProduct = () => {
  const [value, setvalue] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const a = location.state.b;

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/api/readproductpublic.php?cid=" + a)
      .then(function (response) {
        setvalue(response.data);
      });
  }, []);
  return (
    <div>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>stock</th>
          <th>price</th>
        </tr>

        {value.map((product) => (
          <tr>
            <td>{product.productid}</td>
            <td>{product.productname}</td>
            <td>{product.productstock}</td>
            <td>{product.productprice}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default PublicViewProduct;
