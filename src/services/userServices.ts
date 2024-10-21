import { UserRequestDTO } from "../models/User";
import db from "./db";

const getUser = async (id: string) => {
  const [rows] = await db.query(`SELECT * FROM user WHERE ID = '${id}'`);
  return rows;
};

const addUser = async (userData: UserRequestDTO) => {
  const [results, fields] = await db.query(
    `INSERT INTO user (Email, EmailVerified, GivenName, FamilyName, Nickname, Picture, UserID, LoginsCount, LastLogin, LastIP) 
        VALUES (${userData.email}, 
        ${userData.email_verified},
        ${userData.given_name}, 
        ${userData.family_name}, 
        ${userData.nickname},
        ${userData.picture}, 
        ${userData.user_id}, 
        ${userData.logins_count},
        ${userData.last_login}, 
        ${userData.last_ip});`
  );
  return results;
};

const updateUser = async (userData: UserRequestDTO) => {
  const [rows] = await db.query(`UPDATE user 
        SET email = ${userData.email},
        emailVerified = ${userData.email_verified},
        GivenName = ${userData.email_verified},
        FamilyName = ${userData.email_verified},
        Nickname = ${userData.email_verified},
        Picture = ${userData.email_verified},
        UserID = ${userData.email_verified},
        LoginsCount = ${userData.email_verified},
        LastLogin = ${userData.email_verified},
        LastIP = ${userData.email_verified}        
        WHERE ID = ${userData.ID};`);
  return rows;
};

const deleteUser = async (id: number) => {
  const [rows] = await db.query(`DELETE FROM user WHERE ID = ${id};`);
  return rows;
};

export default { getUser, addUser, updateUser, deleteUser };
