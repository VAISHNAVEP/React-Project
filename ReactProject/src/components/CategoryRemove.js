import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CategoryRemove = () => {
  const [data1, setState] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/api/readcategory.php")
      .then(function (response) {
        setState(response.data);
      });
  }, []);
  const deleteData = (categoryid) => {
    axios
      .get("http://127.0.0.1:8080/api/deletecategory.php?c=" + categoryid)
      .then(function (response) {
        window.location.reload();
        navigate("/categoryremove");
      });
  };

  return (
    <div>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>description</th>
        </tr>

        {data1.map((category) => (
          <tr key={category.categoryid}>
            <td>{category.categoryid}</td>
            <td>{category.categoryname}</td>
            <td>{category.categorydescription}</td>
            <td>
              <button onClick={() => deleteData(category.categoryid)}>
                delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default CategoryRemove;
