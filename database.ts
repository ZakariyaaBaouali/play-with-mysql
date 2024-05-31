import mysql from "mysql2";
import { mysql_config } from "./config";

export const ConnectToDB = async () => {
  const pool = mysql
    .createConnection({
      host: mysql_config.host,
      user: mysql_config.user,
      password: mysql_config.password,
      database: mysql_config.db,
    })
    .promise();

  const [result] = await pool.query("SELECT * FROM Notes");
  console.log(result);
};
