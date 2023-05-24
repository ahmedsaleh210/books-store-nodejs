import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import storeRouter from "./route/storeRoute.js";
import bookRouter from "./route/booksRoute.js";
const app = express();
const port = 3000;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Express Hello World!");
});

//Routes
app.use("/api/v1", storeRouter);
app.use("/api/v1", bookRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
