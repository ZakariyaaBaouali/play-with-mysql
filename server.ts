import express, { Request, Response } from "express";
import cors from "cors";
import { ConnectToDB } from "./database";

const app = express();
app.use(cors);

//db
ConnectToDB();

app.get("/chech_health", (req: Request, res: Response) => {
  return res.status(200).send(`Server working...!`);
});

app.listen(8080, () => console.log(`Server start at port 8080`));
