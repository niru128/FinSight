import express from "express";
import { fetchStockPrice } from "../controllers/stockController.js";

const app = express.Router();

app.get('/:symbol' , fetchStockPrice);

export default app;