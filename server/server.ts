import express, { Request, Response, NextFunction } from "express";
import DbService from "./database";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

// Show all books in database
app.get("/getBooks", (req, res) => {
  const db = DbService.getDbServiceInstance();
  const results = db.getAllData();
  results.then((data) => res.send(data)).catch((err) => console.log(err));
});

// Create new book in database by addButton

app.post("/addBook", (req, res) => {
    res.json({response: 'Success'}).status(200).end();
});

const PORT = 3030;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
