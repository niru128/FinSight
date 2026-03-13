import { useEffect, useState } from "react";
import { Stock, Portfolio } from "@/types/stock";
import { buildPortfolio } from "@/utils/calculations";
import axios from "axios";

const BASEURL =  "https://finsight-0c05.onrender.com";

export default function usePortfolio() {
  const [data, setData] = useState<Portfolio[]>([]);

    const fetchCMP = async (symbol : string) =>{
      try{
        const response = await axios.get(`${BASEURL}/api/stocks/${symbol}`);
        return response.data;
      }catch(error){
        console.error(`Error fetching CMP for ${symbol}:`, error);  
        return { cmp: 0, peRatio: 0, earnings: 0 };
      }
    }
    
    const fetchPortfolio = async () => {
      try{  
        const response = await axios.get(`${BASEURL}/api/stocks`);
        return response.data;
      }catch(error){
        console.error("Error fetching portfolio:", error);
      }
    }

    const loadPortfolio = async () => {
      const portfolio = await  fetchPortfolio();

      if(!portfolio || portfolio.length === 0){
        setData([]);
        return;
      }

      const totalInvestment = portfolio.reduce((sum : number , stock : Stock) => 
        sum + stock.purchasePrice * stock.quantity, 0);
      

      const portfolioData = await Promise.all(
        portfolio.map(async (stock : Stock) => {
          const data = await fetchCMP(stock.symbol);

          const cmp = data?.cmp || 0;
          const peRatio = data?.peRatio || 0;
          const latestEarnings = data?.latestEarnings || 0;

          return buildPortfolio(
            stock,
            cmp,
            totalInvestment,
            peRatio,
            latestEarnings
          )
        })
      )
      setData(portfolioData);
    }


    useEffect(()=>{
      loadPortfolio();

      const interval = setInterval(()=>{
        loadPortfolio();
      },15000)

      return () => clearInterval(interval);
    },[])



  return {data};
}
