import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors);

app.get("/chech_health", (req: Request, res: Response) => {
  return res.status(200).send(`Server working...!`);
});

app.listen(8080, () => console.log(`Server start at port 8080`));
