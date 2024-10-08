const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");

app.use(cors());

app.get("/api", (req, res) => {
  console.log(
    `/api ${new Date(Date.now()).toLocaleString("en-GB", { timeZone: "UTC" })}`
  );

  res.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});
