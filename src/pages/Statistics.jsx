import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Scatter,
} from "recharts";
import Heading from "../components/Heading";

const Statistics = () => {
  // 1. Get the data fetched by your React Router loader
  const products = useLoaderData();

  // Dynamic page title
  useEffect(() => {
    document.title = "Statistics | Gadget Heaven";
  }, []);

  return (
    <div className="bg-gray-100 pb-16">
      {/* Purple Hero Header */}
      <div className="bg-[#9538E2] text-white py-10 px-4 text-center">
        <Heading
          title={"Statistics"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
      </div>

      {/* Main Chart Container */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Statistics</h2>

        {/* Card Wrapping Chart */}
        <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-sm">
          <div className="w-full h-96 sm:h-[450px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={products}
                margin={{ top: 20, right: 20, bottom: 65, left: 10 }}
              >
                {/* X-Axis: Rotated product titles */}
                <XAxis
                  dataKey="product_title"
                  tick={{ fontSize: 11, fill: "#4B5563" }}
                  interval={0}
                  angle={-30}
                  textAnchor="end"
                  height={80}
                />

                {/* Left Y-Axis for Price ($) */}
                <YAxis
                  yAxisId="leftPrice"
                  tick={{ fontSize: 12, fill: "#4B5563" }}
                  axisLine={false}
                  tickFormatter={(val) => `$${val}`}
                />

                {/* Right Y-Axis for Rating (0 - 5) */}
                <YAxis
                  yAxisId="rightRating"
                  orientation="right"
                  domain={[0, 5]}
                  tick={{ fontSize: 12, fill: "#EF4444" }}
                  axisLine={false}
                  tickFormatter={(val) => `${val}★`}
                />

                {/* Custom Tooltip */}
                <Tooltip
                  formatter={(value, name) => {
                    if (name === "Price" || name === "Total") return [`$${value}`, name];
                    if (name === "Rating") return [`${value} / 5 ⭐`, name];
                    return [value, name];
                  }}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />

                {/* Legend */}
                <Legend
                  verticalAlign="bottom"
                  wrapperStyle={{ paddingTop: "15px" }}
                />

                {/* Light purple background area mapping price */}
                <Area
                  yAxisId="leftPrice"
                  type="monotone"
                  dataKey="price"
                  name="Total"
                  fill="#F3E8FF"
                  stroke="#E9D5FF"
                />

                {/* Main Purple Price Bars */}
                <Bar
                  yAxisId="leftPrice"
                  dataKey="price"
                  name="Price"
                  fill="#9538E2"
                  barSize={24}
                  radius={[4, 4, 0, 0]}
                />

                {/* Red Dots for Ratings */}
                <Scatter
                  yAxisId="rightRating"
                  dataKey="rating"
                  name="Rating"
                  fill="#FF0000"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;






