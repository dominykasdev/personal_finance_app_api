const express = require("express");
const db = require("../../services/db");

const router = express.Router();

//@route    GET/api/user/:id
//@desc     Get User by ID
//@access   Public
router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const [results] = await db.query(`SELECT * FROM user WHERE ID = ${id}`);

    console.log(results);
    if (results == undefined) {
      throw `Could not find user with ID ${id}`;
    } else {
      res.json(results);
    }
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
});

module.exports = router;
