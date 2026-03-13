"use client";

import PortfolioTable from "@/components/PortfolioTable";
import { Portfolio } from "@/types/stock";
// import Image from "next/image";
import usePortfolio from "@/hooks/usePortfolio";
import { calculateSectorSummary, sectorGroup } from "@/utils/sectorGroup";
import { motion } from "framer-motion";
import SectorCharts from "@/components/SectorCharts";

export default function Home() {
  const { data } = usePortfolio();

  const sector = sectorGroup(data);

  const sectorChartData = Object.entries(sector).map(([sector, stocks]) => {
    const summary = calculateSectorSummary(stocks);

    return {
      sector,
      value: summary.totalInvestment,
    };
  });
  return (
    <main className="min-h-screen p-2 bg-linear-to-br from-slate-100 via-blue-50 to-slate-200">
      <div className="mt-8 flex-col p-5 items-center justify-center gap-5 max-w-7xl mx-auto ">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-800 mb-10"
        >
          FinSight Portfolio Dashboard
        </motion.h1>
        <PortfolioTable data={data} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
          <SectorCharts data={sectorChartData} />
        </div>

        {Object.entries(sector).map(([sector, stock]) => {
          const summary = calculateSectorSummary(stock);

          return (
            <div
              key={sector}
              className="bg-white rounded-xl shadow-md p-6 mt-10"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {sector}
              </h2>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Investment</p>
                  <p className="text-lg font-bold">
                    ₹{summary.totalInvestment}
                  </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Value</p>
                  <p className="text-lg font-bold">₹{summary.totalValue}</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Gain/Loss</p>
                  <p
                    className={`text-lg font-bold ${
                      summary.gain >= 0 ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    ₹{summary.gain}
                  </p>
                </div>
              </div>

              <PortfolioTable data={stock} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
