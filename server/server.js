import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ecommerce",
});

//insert data into category//
app.post("/categoryadd", (req, res) => {
  const sql =
    "INSERT INTO category (`categoryid`,`categoryname`,`categorydescription`)VALUES (?)";
  const data = [req.body.id, req.body.name, req.body.description];
  db.query(sql, [data], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

//insert data into product table//
app.post("/productadd", (req, res) => {
  const sql =
    "INSERT INTO productdata (`productid`,`productname`,`productstock`,`productprice`)VALUES (?)";
  const data = [req.body.id, req.body.name, req.body.stock, req.body.price];
  db.query(sql, [data], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

//get category details from category table//
app.get("/readcategories", (req, res) => {
  const sql = "SELECT categoryid, categoryname FROM category";
  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

//insert data into registration//
app.post("/registration", (req, res) => {
  const sql =
    "INSERT INTO registration (`regcustomerid`,`regname`,`regphone`,`regemail`,`regaddress`)VALUES (?)";
  const data = [
    req.body.customerid,
    req.body.name,
    req.body.phone,
    req.body.email,
    req.body.address,
  ];
  db.query(sql, [data], (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

//take values from registration and post into login//
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const sql = "SELECT * FROM registration WHERE regemail = ? AND regphone = ?";
  db.query(sql, [username, password], (err, result) => {
    if (err) return res.status(500).json({ error: "Internal Server Error" });

    if (result.length > 0) {
      return res.json({ success: true, message: "Login successful" });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  });
});
app.get("/readcategoriesdetails", (req, res) => {
  const sql = "SELECT categoryid, categoryname,categorydescription FROM category";
  db.query(sql, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});
app.listen(8081, () => {
  console.log("listening carefully");
});
