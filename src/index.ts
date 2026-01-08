import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("TypeScript Docker CI/CD v2 Railway 🔥");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
