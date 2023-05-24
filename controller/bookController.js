import { queryList } from "../db/queries.js";
import dbQuery from "../db/connection.js";

async function getAllBooks(req, res) {
  try {
    const bookListquery = queryList.GET_BOOK_LIST_QUERY;
    const result = await dbQuery(bookListquery);
    return res.status(200).send(result.rows);
  } catch (err) {
    console.log("Error in get all books: " + err);
    return res.status(500).send({ error: "Failed to get books" });
  }
}

async function getBookDetails(req, res) {
  try {
    const { bookId } = req.params;
    const bookDetailsQuery = queryList.GET_BOOKS_DETAILS_QUERY;
    const result = await dbQuery(bookDetailsQuery, [bookId]);
    return res.status(200).send(result.rows[0]);
  } catch (err) {
    console.log("Error in get all books: " + err);
    return res.status(500).send({ error: "Failed to get books" });
  }
}

async function saveBook(req, res) {
  const { title, description, author, publisher, pages, storeCode } = req.body;
  const createdAt = new Date();
  const createdBy = "admin";

  if (!title || !author || !publisher || !storeCode) {
    return res.status(400).send("Store name and address must not be empty");
  }

  const saveBookQuery = queryList.SAVE_BOOK_QUERY;
  const values = [
    title,
    description,
    author,
    publisher,
    pages,
    storeCode,
    createdAt,
    createdBy,
  ];

  try {
    await dbQuery(saveBookQuery, values);
    res.status(201).send("Book saved successfully");
  } catch (error) {
    res.status(500).send("An error occurred while saving the book");
  }
}

async function updateBook(req, res) {
  const { title, description, author, publisher, pages } = req.body;
  const { bookId } = req.params;

  if (!title || !author || !publisher) {
    return res.status(400).send("fields must be not empty");
  }

  const saveBookQuery = queryList.UPDATE_BOOK_QUERY;
  const values = [title, description, author, publisher, pages, bookId];

  try {
    await dbQuery(saveBookQuery, values);
    res.status(200).send("Book updated successfully");
  } catch (error) {
    res.status(500).send("An error occurred while saving the book");
  }
}

async function deleteBook(req, res) {
  const { bookId } = req.params;
  const deleteBookQuery = queryList.DELETE_BOOK_QUERY;
  try {
    await dbQuery(deleteBookQuery, [bookId]);
    res.status(202).send("Book deleted successfully");
  } catch (error) {
    res.status(500).send("An error occurred while saving the book");
  }
}

export { getAllBooks, getBookDetails, saveBook, updateBook, deleteBook };
