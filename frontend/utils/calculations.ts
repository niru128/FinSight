import { Stock, Portfolio } from "@/types/stock";

export function calculatInvestment(stock : Stock) : number {
    return stock.purchasePrice * stock.quantity
}

export function calculatePresentValue(cmp : number, quantity : number) : number {
    return cmp * quantity
}

export function calculateGainLoss(presentValue : number , investment : number) : number{
    return presentValue - investment
}

export function calculatePortfolioPercent(investment : number , totalInvestment : number) : number {
    return (investment / totalInvestment) * 100
}

export function buildPortfolio(stock : Stock , cmp : number , totalInvestment : number, peRatio : number, latestEarnings : number) : Portfolio {

    const investment = calculatInvestment(stock)
    const presentValue = calculatePresentValue(cmp , stock.quantity)
    const gainLoss = calculateGainLoss(presentValue , investment)
    const portfolioPercent = calculatePortfolioPercent(investment, totalInvestment)

    return {
        ...stock,
        cmp,
        peRatio,
        latestEarnings,
        investment,
        presentValue,
        gainLoss,
        portfolioPercent
    }
}