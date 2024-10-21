import db from "./db";

const getChartTypes = async () => {
  const [rows] = await db.query(`SELECT * FROM chart_type`);
  return rows;
};

export default { getChartTypes };
