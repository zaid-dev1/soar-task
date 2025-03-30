import React from "react";
import ReactECharts from "echarts-for-react";
import { expenseStatisticsData } from "../data/data"; 
const ExpenseStatisticsChart = () => {
  const option = {
    tooltip: {
      trigger: "item",
      formatter: "{b}: {d}%",
    },
    series: [
      {
        name: "Expenses",
        type: "pie",
        radius: ["0%", "75%"], 
        // center: ["40%", "40%"], 
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: "inside",
          formatter: "{d}%\n{b}",
          fontSize: 11,
          fontWeight: "normal",
          color: "#fff",
        },
        labelLine: {
          show: false,
        },
        emphasis: {
          scaleSize: 10,
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
        data: expenseStatisticsData.map((item, index) => ({
          value: item.value,
          name: item.name,
          selected: index < 3,
          selectedOffset: 20,
          itemStyle: {
            color: item.color,
            borderWidth: 5,
            borderColor: "#fff",
          },
        })),
        selectedMode: "single",
      },
    ],
  };

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold text-primary">Expense Statistics</h2>

      <div className="bg-white mt-6 p-4 sm:p-3 rounded-2xl shadow-lg">
        <ReactECharts
          option={option}
          style={{
            height: "280px",
            width: "100%",
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
          }}
        />
      </div>
    </div>
  );
};

export default ExpenseStatisticsChart;
