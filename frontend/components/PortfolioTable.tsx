import { Portfolio } from "@/types/stock";
import { motion } from "framer-motion";

interface PortfolioTableProps {
  data: Portfolio[];
}

export default function PortfolioTable({ data }: PortfolioTableProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mt-6">
      <table className="min-w-full text-sm text-gray-700">
        <thead className="bg-linear-to-r from-blue-600 to-blue-500 text-white">
          <tr>
            <th className="p-3 border border-gray-200">Stock</th>
            <th className="p-3 border border-gray-200">Qty</th>
            <th className="p-3 border border-gray-200">Buy Price</th>
            <th className="p-3 border border-gray-200">Portfolio %</th>
            <th className="p-3 border border-gray-200">CMP</th>
            <th className="p-3 border border-gray-200">Investment</th>
            <th className="p-3 border border-gray-200">Present Value</th>
            <th className="p-3 border border-gray-200">Gain/Loss</th>
            <th className="p-3 border border-gray-200">P/E Ratio</th>
            <th className="p-3 border border-gray-200">Latest Earnings</th>
          </tr>
        </thead>
        <tbody>
          {data.map((stock) => (
            <motion.tr
              key={stock.symbol}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center hover:bg-blue-50 transition cursor-pointer"
            >
              <td className="p-3 border border-gray-200 font-bold">
                {stock.name}
              </td>

              <td className="p-3 border border-gray-200">{stock.quantity}</td>

              <td className="p-3 border border-gray-200">
                ₹{stock.purchasePrice}
              </td>

              <td className="p-3 border border-gray-200">
                {stock.portfolioPercent.toFixed(2)}%
              </td>

              <td className="p-3 border border-gray-200">₹{stock.cmp}</td>

              <td className="p-3 border border-gray-200">
                ₹{stock.investment.toFixed(2)}
              </td>

              <td className="p-3 border border-gray-200">
                ₹{stock.presentValue.toFixed(2)}
              </td>

              <td
                className={`p-3 border border-gray-200 font-semibold transition duration-300 ${stock.gainLoss >= 0 ? "text-green-600 hover:text-green-600" : "text-red-500 hover:text-red-600"} `}
              >
                ₹{stock.gainLoss.toFixed(2)}
              </td>

              <td className="p-3 border border-gray-200">
                {stock.peRatio?.toFixed(2)}
              </td>
              <td className="p-3 border border-gray-200">
                {stock.latestEarnings?.toFixed(2)}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
