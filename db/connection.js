import pool from "./pool.js";

async function query(queryText, queryParams) {
  try {
    const res = await pool.query(queryText, queryParams);
    return res;
  } catch (err) {
    console.log("Error occurred: " + err.stack);
    throw err;
  }
}

export default query;