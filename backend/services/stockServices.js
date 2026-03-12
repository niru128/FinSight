import YahooFinance from "yahoo-finance2"

const yahooFinance = new YahooFinance()

export const getStockData = async (symbol) => {

    try {

        const quote = await yahooFinance.quote(symbol);

        if (!quote || !quote.regularMarketPrice) {
            return 0;
        }

        return {
            cmp: quote.regularMarketPrice || 0,
            peRatio: quote.trailingPE || 0,
            latestEarnings: quote.epsTrailingTwelveMonths || 0
        };
    } catch (error) {
        console.error(`Error fetching data for ${symbol}:`, error);
    }
}