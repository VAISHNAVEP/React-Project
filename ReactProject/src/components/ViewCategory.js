import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/viewcategory.css";
const ViewCategory = () => {
  const [data1, setState] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8081/readcategoriesdetails")
      .then(function (response) {
        setState(response.data);
      });
  }, []);
  const msg1 = (cid) => {
    navigate("/viewproduct", { state: { c: cid } });
  };
  return (
    <div>
      <table id="customertable">
        <tr>
          <th>id</th>
          <th>name</th>
          <th>description</th>
        </tr>

        {data1.map((category) => (
          <tr>
            <td>{category.categoryid}</td>
            <td>{category.categoryname}</td>
            <td>{category.categorydescription}</td>

            <button
              type="button"
              class="neon-button"
              onClick={() => msg1(category.categoryid)}
            >
              View Product
            </button>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ViewCategory;
