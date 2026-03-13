"use client";

import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];

export default function SectorCharts({ data }: any) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="font-bold mb-4 text-xl">Sector Allocation</h2>

      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="sector"
          outerRadius={100}
          label
        >
          {data.map((entry: any, index: number) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}
