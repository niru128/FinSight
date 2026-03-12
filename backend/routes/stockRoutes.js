import express from "express";
import { fetchStockPrice, getPortfolio } from "../controllers/stockController.js";

const router = express.Router();

router.get('/' , getPortfolio);
router.get('/:symbol' , fetchStockPrice);

export default router;