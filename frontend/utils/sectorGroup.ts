import { Portfolio, Stock } from "@/types/stock";


export const sectorGroup  = (portfolio : Portfolio[])=>{

    const sectorMap : Record<string, Portfolio[]> = {};

    portfolio.forEach((stock) => {

        if(!sectorMap[stock.sector]){
            sectorMap[stock.sector] = [];
        }   

        sectorMap[stock.sector].push(stock);
    })
    return sectorMap;
}


export const calculateSectorSummary = (stock : Portfolio[]) => {


    const totalInvestment = stock.reduce((sum , s)=>sum+s.investment, 0);
    const totalValue = stock.reduce((sum,s)=> sum+s.presentValue,0);

    const gain = totalValue - totalInvestment;

    return{
        totalInvestment,
        totalValue,
        gain
    }
}