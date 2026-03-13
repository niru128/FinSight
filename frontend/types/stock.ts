export interface Stock {
    name :  string,
    symbol : string,
    exchangeCode : string,
    sector : string,
    purchasePrice : number,
    quantity : number,
}

export interface StockData { 
    cmp : number,
    peRatio : number,
    latestEarnings : number
}

export interface Portfolio extends Stock { 
    cmp : number,
    investment : number,
    portfolioPercent : number,
    gainLoss : number,
    peRatio? : number,
    latestEarnings? : number,
    presentValue : number,

}

export interface Sector {
    sector : string
    totalInvestment : number,
    totalGainLoss : number,
    totalPresentValue : number,
}