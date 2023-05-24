import express from "express";
import * as storeController from "../controller/storeController.js";
const storeRouter = express.Router();

storeRouter.get("/stores", storeController.getAllStores);
storeRouter.post("/stores/save", storeController.saveStore);

export default storeRouter;
