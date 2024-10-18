import express from "express";
import db from "../../services/db";
import userControllers from "../../controllers/userControllers";
import { User, UserRequestDTO } from "../../models/User";

const router = express.Router();

//@route    GET/api/user/:id
//@desc     Get User by ID
//@access   Public
router.get("/:id", async (req, res) => userControllers.getUser(req, res));

//@route    POST/api/user/register
//@desc     Create new user
//@access   Public
router.post("/register", async (req, res) =>
  userControllers.registerUser(req, res)
);

export default router;
