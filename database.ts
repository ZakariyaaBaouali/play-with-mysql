import mysql from "mysql2";
import { mysql_config } from "./config";
import { InsertResult } from "./dto";

export class Notes {
  private readonly pool;

  constructor() {
    this.pool = mysql
      .createConnection({
        host: mysql_config.host,
        user: mysql_config.user,
        password: mysql_config.password,
        database: mysql_config.db,
      })
      .promise();
  }

  public getNotes = async () => {
    const [res] = await this.pool.query("SELECT * FROM Notes");
    return res;
  };

  public getNote = async (id: Number) => {
    const [res] = await this.pool.query("SELECT * FROM Notes WHERE id = ?", [
      id,
    ]);
    return res;
  };

  public createNote = async (title: string, content: string) => {
    const [res] = await this.pool.query(
      `INSERT INTO Notes (title, content) VALUES ( ? , ?)`,
      [title, content]
    );
    const createdId = (res as unknown as InsertResult).insertId;
    const data = await this.getNote(Number(createdId));
    return data;
  };
}
