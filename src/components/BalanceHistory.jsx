import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { balanceHistoryData } from "../data/data";

const BalanceHistory = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-between items-center px-3">
        <h2 className="text-lg font-semibold text-primary">Balance History</h2>
      </div>
        <div className="bg-white rounded-2xl mt-6 p-4 w-full">
        <ResponsiveContainer
          width="100%"
          height={240}
          className="overflow-hidden"
        >
          <AreaChart data={balanceHistoryData}>
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#007bff" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#007bff" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "#718EBF" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#718EBF" }}
              domain={[0, 800]}
              tickCount={5}
              axisLine={false}
              tickLine={false}
            />
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Area
              type="monotone"
              dataKey="balance"
              stroke="#007bff"
              strokeWidth={3}
              fill="url(#colorBalance)"
              dot={{ r: 4, stroke: "#fff", strokeWidth: 2 }}
              activeDot={{ r: 5 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BalanceHistory;
