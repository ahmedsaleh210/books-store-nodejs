import { queryList } from "../db/queries.js";
import dbQuery from "../db/connection.js";
import generateSerial from "../utils/generator.js";

async function getAllStores(req, res) {
  try {
    const storeListquery = queryList.GET_STORE_LIST_QUERY;
    const result = await dbQuery(storeListquery);
    return res.status(200).send(result.rows);
  } catch (err) {
    console.log("Error in get all stores: " + err);
    return res.status(500).send({ error: "Failed to get stores" });
  }
}

async function saveStore(req, res) {
  const { storeName, address } = req.body;
  const createdAt = new Date();
  const createdBy = "admin";

  if (!storeName || !address) {
    return res.status(400).send("Store name and address must not be empty");
  }

  const storeCode = generateSerial();

  const saveStoreQuery = queryList.SAVE_STORE_QUERY;
  const values = [storeName, storeCode, address, createdBy, createdAt];
  try {
    await dbQuery(saveStoreQuery, values);
    res.status(201).send("Note saved successfully");
  } catch (error) {
    res.status(500).send("An error occurred while saving the note");
  }
}

export { getAllStores, saveStore };
