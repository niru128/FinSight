import { readExcelFile } from "../services/excelServices.js";
import { getStockData } from "../services/stockServices.js";

export const fetchStockPrice = async (req ,res)=>{

    try{

        const { symbol } = req.params;

        const price = await getStockData(symbol);

        res.json(price);

    }catch(error){
        console.error("Error fetching stock price:", error);
        res.status(500).json({ error: "Failed to fetch stock price" });
    }
}

export const getPortfolio = async (req, res)=>{
    try{

        const portfolio = readExcelFile();
        
        res.json( portfolio );

    }catch(error){
        console.error("Error fetching portfolio:", error);
        res.status(500).json({ error: "Failed to read portfolio" });
    }
}