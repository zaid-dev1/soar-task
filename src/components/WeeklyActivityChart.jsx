import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { weeklyActivityData } from "../data/data";

const WeeklyActivityChart = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center px-2 md:px-3">
        <h2 className="text-lg font-semibold text-primary">Weekly Activity</h2>
      </div>

      <div className="bg-white rounded-2xl mt-6 p-4 sm:p-3">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={weeklyActivityData}
            barSize={15}
            margin={{ top: 10, right: 20, left: -20, bottom: 5 }}
          >
            <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#718EBF" }} />
            <YAxis
              tick={{ fontSize: 12, fill: "#718EBF" }}
              domain={[0, 600]}
              tickCount={7}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              wrapperStyle={{
                fontSize: "12px",
                fontWeight: "500",
                paddingBottom: "10px",
              }}
            />
            <Bar
              dataKey="deposit"
              fill="#007bff"
              radius={[10, 10, 0, 0]}
              name="Deposit"
            />
            <Bar
              dataKey="withdraw"
              fill="#000000"
              radius={[10, 10, 0, 0]}
              name="Withdraw"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyActivityChart;
