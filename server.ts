import express, { Request, Response } from "express";
import cors from "cors";
import { Notes } from "./database";
import { INote } from "./dto";

const app = express();
app.use(
  cors({
    origin: "http://localhost:8080",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);
app.use(express.json());

//db
const db = new Notes();

app.get("/chech_health", (req: Request, res: Response) => {
  res.status(200).send(`Server working...!`);
});

app.get("/notes", async (req: Request, res: Response) => {
  const data = await db.getNotes();
  console.log(data);
  return res.status(200).send(data);
});

app.post("/notes", async (req: Request, res: Response) => {
  const payload = <INote>req.body;
  const data = await db.createNote(payload.title, payload.content);
  console.log(data);
  return res.status(200).send(data);
});

app.listen(8080, () => console.log(`Server start at port 8080`));
