import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.use("/api", (req: Request, res: Response) => {
  console.log("API endpoint hit");
  res.status(200).json({ ok: true });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
