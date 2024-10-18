import { IUser } from "../interfaces";
import { User, UserRequestDTO } from "../models/User";
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

const registerUser = async (req, res) => {
  try {
    const userRequestData: UserRequestDTO = new UserRequestDTO(req.body);
    const results = await userServices.addUser(userRequestData);

    if (results == undefined) {
      throw `Could not add new user`;
    } else {
      res.json(results);
    }
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

const updateUser = async (req, res) => {
  try {
    const userRequestData: UserRequestDTO = new UserRequestDTO(req.body);
    const results = await userServices.updateUser(userRequestData);

    if (results == undefined) {
      throw `Could not find user with ID ${userRequestData.ID}`;
    } else {
      res.json(results);
    }
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

const deleteUser = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const results = await userServices.deleteUser(id);

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

export default { getUser, registerUser, updateUser, deleteUser };
