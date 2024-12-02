import generateUUID from "../helpers/generateUID";
import { UserRequestDTO } from "../models/User";
import db from "./db";

const getUser = async (id: string) => {
  const [rows] = await db.query(`SELECT * FROM user WHERE ID = '${id}'`);
  return rows;
};

const addUser = async (userData: UserRequestDTO) => {
  const uuid = generateUUID();

  const [results, fields] = await db.query(
    `INSERT INTO user (ID, Email, EmailVerified, GivenName, FamilyName, Nickname, Picture, UserID, LoginsCount, LastLogin, LastIP) VALUES ('${uuid}','${userData.email}',${userData.email_verified},'${userData.given_name || null}','${userData.family_name || null}','${userData.nickname || null}','${userData.picture || null}','${userData.user_id}','${userData.logins_count || null}','${userData.last_login || null}','${userData.last_ip || null}');`
  );
  return results;
};

const updateUser = async (userData: UserRequestDTO) => {
  const [rows] = await db.query(`UPDATE user 
        SET Email = ${userData.email},
        EmailVerified = ${userData.email_verified},
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
