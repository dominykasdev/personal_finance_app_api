import db from "./db";

const getUser = async (id: number) => {
  const [rows] = await db.query(`SELECT * FROM user WHERE ID = ${id}`);
  return rows;
};

const addUser = () => {};

export default { getUser, addUser };
