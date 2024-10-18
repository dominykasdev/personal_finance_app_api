import express from "express";
import db from "../../services/db";
import userControllers from "../../controllers/userControllers";

const router = express.Router();

//@route    GET/api/user/:id
//@desc     Get User by ID
//@access   Public
router.get("/:id", async (req, res) => userControllers.getUser(req, res));

//@route    POST/api/user/register
//@desc     Create new user
//@access   Public
router.post("/register", async (req, res) => {
  const body = req.body;

  try {
    const [results, fields] = await db.query(
      `INSERT INTO user (Email, EmailVerified, GivenName, FamilyName, Nickname, Picture, UserID, LoginsCount, LastLogin, LastIP) 
      VALUES (${body.email}, ${body.email_verified},
       ${body.given_name}, ${body.family_name}, ${body.nickname},
        ${body.picture}, ${body.user_id}, ${body.logins_count},
         ${body.last_login}, ${body.last_ip});`
    );

    console.log(results, fields);
    if (results == undefined) {
      throw `Could not find user with ID`;
    } else {
      res.json(results);
    }
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
});

export default router;
