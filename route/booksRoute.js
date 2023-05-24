import express from "express";
import * as bookController from "../controller/bookController.js";
const bookRouter = express.Router();

bookRouter.get("/book", bookController.getAllBooks);
bookRouter.get("/book/details/:bookId", bookController.getBookDetails);
bookRouter.post("/book/save", bookController.saveBook);
bookRouter.put("/book/update/:bookId", bookController.updateBook);
bookRouter.delete("/book/delete/:bookId", bookController.deleteBook);

export default bookRouter;
