import YahooFinance from "yahoo-finance2"

const yahooFinance = new YahooFinance()

export const getStockData = async( symbol) =>{

    try{

        const quote = await yahooFinance.quote(symbol);

        return quote.regularMarketPrice;
    }catch(error){
        console.error(`Error fetching data for ${symbol}:`, error);
    }
}