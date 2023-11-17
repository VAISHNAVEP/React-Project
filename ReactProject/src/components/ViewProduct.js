import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const ViewProduct = () => {
  const [value, setvalue] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const d = location.state.c;
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/api/readproductcustomer.php?cid=" + d)
      .then(function (response) {
        setvalue(response.data);
      });
  }, []);
  const FormData = (productid) => {
    navigate("/orderform", { state: { p: productid } });
  };
  const review = (productid) => {
    navigate("/review", { state: { p: productid } });
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

        {value.map((product) => (
          <tr>
            <td>{product.productid}</td>
            <td>{product.productname}</td>
            <td>{product.productstock}</td>
            <td>{product.productprice}</td>
            <td>
              <button
                id="orderbutton"
                onClick={() => FormData(product.productid)}
              >
                order
              </button>
            </td>
            <td>
              <button
                id="reviewbutton"
                onClick={() => review(product.productid)}
              >
                review
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ViewProduct;
