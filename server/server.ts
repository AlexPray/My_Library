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
  const db = DbService.getDbServiceInstance();
  db.addNewBook(req.body)
  res.json({ response: "Success" }).status(200).end();
});

// Remove book from database
app.delete("/removeBook", (req, res) => {
  const db = DbService.getDbServiceInstance();
  db.deleteBook(req.body)
  res.json({ response: "Success deleting" }).status(200).end();
});

const PORT = 3030;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
