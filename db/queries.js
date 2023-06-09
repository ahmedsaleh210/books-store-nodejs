export const queryList = {
  GET_STORE_LIST_QUERY:
    "SELECT STORE_ID, STORE_NAME, STORE_CODE FROM BMS.STORE",

  SAVE_STORE_QUERY:
    "INSERT INTO BMS.STORE (STORE_NAME, STORE_CODE, ADDRESS , CREATED_BY , CREATED_ON) VALUES($1, $2, $3, $4, $5)",

  GET_BOOK_LIST_QUERY:
    "SELECT book_id, book_title, book_author, book_publisher FROM bms.book",

  GET_BOOKS_DETAILS_QUERY: `
  SELECT BOOK_ID, BOOK_TITLE, BOOK_DESCRIPTION, BOOK_AUTHOR, BOOK_PUBLISHER, BOOK_PAGES, BOOK.STORE_CODE , BOOK.CREATED_ON, STORE.STORE_NAME , STORE.ADDRESS 
  FROM BMS.BOOK
  INNER JOIN BMS.STORE ON BOOK.STORE_CODE  = BMS.STORE.STORE_CODE 
  WHERE BOOK_ID = $1`,
  SAVE_BOOK_QUERY: `
  INSERT INTO BMS.BOOK
  (BOOK_TITLE, BOOK_DESCRIPTION, BOOK_AUTHOR, BOOK_PUBLISHER, BOOK_PAGES, STORE_CODE, CREATED_ON, CREATED_BY)
  VALUES($1, $2, $3, $4, $5, $6, $7, $8)`,
  UPDATE_BOOK_QUERY: `
  UPDATE BMS.BOOK
  SET BOOK_TITLE=$1, BOOK_DESCRIPTION=$2, BOOK_AUTHOR=$3, BOOK_PUBLISHER=$4, BOOK_PAGES=$5
  WHERE BOOK_ID=$6`,
  DELETE_BOOK_QUERY: "DELETE FROM BMS.BOOK WHERE BOOK_ID=$1",
};

/*
UPDATE BMS.BOOK
SET BOOK_TITLE=$1, BOOK_DESCRIPTION=$2, BOOK_AUTHOR=$3, BOOK_PUBLISHER=$4, BOOK_PAGES=$5, STORE_CODE=$6, CREATED_ON=$7, CREATED_BY=$8
WHERE BOOK_ID= $9;

*/
