import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const OrderForm = () => {
  const location = useLocation();
  var s = sessionStorage.getItem("uid2");
  const [digit, setdigit] = useState({
    orderid: "",
    productid: "",
    customerid: "",
    quantity: "",
    orderdate: "",
    status: "pending",
  });

  const formhandlechange = (e) => {
    setdigit((digit) => ({ ...digit, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8080/api/createproductorder.php", digit)
      .then(function (response) {});
  };
  useEffect(() => {
    setdigit({
      orderid: "",
      productid: location.state.p,
      customerid: s,
      quantity: "",
      status: "pending",
      orderdate: "",
    });
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit} id="orderform">
        <label>order id:</label>
        <input type="number" name="orderid" onChange={formhandlechange} />
        <br></br>
        <label>product id:</label>
        <input
          type="number"
          name="productid"
          onChange={formhandlechange}
          value={digit.productid}
        />
        <br></br>
        <label>customer id:</label>
        <input
          type="number"
          name="customerid"
          onChange={formhandlechange}
          value={digit.customerid}
        />
        <br></br>
        <label>quantity:</label>
        <input type="number" name="quantity" onChange={formhandlechange} />
        <br></br>
        <label>orderdate:</label>
        <input type="date" name="orderdate" onChange={formhandlechange} />
        <br></br>
        <label>status:</label>

        <button id="ordersubmitbutton" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
