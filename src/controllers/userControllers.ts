import { IUser } from "../interfaces";
import { User } from "../models/User";
import userServices from "../services/userServices";

const getUser = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const results = await userServices.getUser(id);

    if (results == undefined) {
      throw `Could not find user with ID ${id}`;
    } else {
      res.json(results);
    }
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

const registerUser = (req, res) => {};

export default { getUser, registerUser };
