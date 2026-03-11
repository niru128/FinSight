import { getStockData } from "../services/stockServices.js";

export const fetchStockPrice = async (req ,res)=>{

    try{

        const { symbol } = req.params;

        const price = await getStockData(symbol);

        res.json({ cmp : price });

    }catch(error){
        console.error("Error fetching stock price:", error);
        res.status(500).json({ error: "Failed to fetch stock price" });
    }
}