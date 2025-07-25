import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { AiOutlineArrowUp } from 'react-icons/ai';

/**
 * Component to display a revenue summary with a radial bar chart.
 * @param {{
 * data: { value: number }[],
 * currentRevenue: string,
 * previousRevenue: string,
 * percentageChange: string,
 * description: string,
 * }} props
 */
const RevenueSummaryCard = ({ data, currentRevenue, previousRevenue, percentageChange, description }) => {
  // Calculate the total value for display inside the chart
  const totalValue = data && data.length > 0 ? data.reduce((sum, item) => sum + item.value, 0) : 0;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 pb-8 w-full max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-lg font-semibold text-gray-700">REVENUE SUMMARY</h2>
        <div className="relative inline-block text-left">
            <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
              Monthly
              <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
        </div>
      </div>

      {/* Main Content - Reverted to side-by-side layout */}
      <div className="flex flex-col md:flex-row items-center justify-start">

        {/* Radial Bar Chart */}
        <div className="relative w-70 h-70 flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              innerRadius="70%"
              outerRadius="90%"
              data={data}
              startAngle={90}
              endAngle={-270}
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity={1} />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity={1} />
                </linearGradient>
              </defs>
              <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
              <RadialBar
                background
                clockWise={true}
                dataKey="value"
                cornerRadius={10}
                fill="url(#chartGradient)" // Apply the gradient
              />
            </RadialBarChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-sm font-semibold text-gray-500">Archived</div>
            <div className="text-3xl font-bold text-gray-800">{totalValue}</div>
          </div>
        </div>

        {/* Revenue Details - Left-aligned text */}
        <div className="ml-8">
          <div className="flex items-baseline gap-3">
            <div className="text-2xl font-bold text-indigo-600">{currentRevenue}</div>
            <div className="text-sx text-green-500 bg-green-100 px-2 py-2 rounded-full font-semibold flex items-center">
              <AiOutlineArrowUp className="mr-1" />
              {percentageChange}
            </div>
          </div>
          <div className="text-gray-500 text-xs mt-1">From {previousRevenue}</div>
          <div className="text-gray-400 text-xl my-1">***</div>
          <div className="text-gray-600 text-xs max-w-xs">{description}</div>
          <button className="bg-gray-800 text-white py-2 px-2 rounded-md mt-8 hover:bg-gray-700 focus:outline-none">
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevenueSummaryCard;