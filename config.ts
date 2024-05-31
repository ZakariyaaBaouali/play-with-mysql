import dotenv from "dotenv";
dotenv.config();

export const mysql_config = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  db: process.env.MYSQL_DATABASE,
};
