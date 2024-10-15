const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const { auth, requiresAuth } = require("express-openid-connect");
const mysql = require("mysql2/promise");
const db = require("./services/db");

// const config = {
//   authRequired: false,
//   auth0Logout: true,
//   baseURL: "https://localhost:3000",
//   clientID: process.env.AUTH_CLIENT_ID,
//   issuerBaseURL: process.env.AUTH_CLIENT_ISSUER,
//   secret: process.env.AUTH_CLIENT_SECRET,
// };

app.use(cors());
app.use(express.json());

// DEFAULT
app.get("/api", (req, res) => {
  console.log(
    `/api ${new Date(Date.now()).toLocaleString("en-GB", { timeZone: "UTC" })}`
  );

  res.json({ message: "Welcome to PF Api!" });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

// LOGIN
app.post("/api/auth/login", (req, res) => {
  console.log(req.body);

  console.log(process.env.AUTH_DOMAIN);

  console.log(
    `/api/auth/login ${new Date(Date.now()).toLocaleString("en-GB", {
      timeZone: "UTC",
    })}`
  );

  res.json({ message: "Hello World!" });
});

// get db data from user
app.get("/api/user/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const [results] = await db.query(`SELECT * FROM user WHERE ID = ${id}`);

    console.log(results);
    res.json(results);
  } catch (err) {
    console.log(err);
    res.json(err);
  }

  res.json({ id: id });
});

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
