import React from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { AiOutlineArrowUp } from 'react-icons/ai';

/**
 * Component to display a revenue summary with a radial bar chart.
 * @param {{
 * data: { value: number, fill: string }[],
 * currentRevenue: string,
 * previousRevenue: string,
 * percentageChange: string,
 * description: string,
 * }} props
 */
const RevenueSummaryCard = ({ data, currentRevenue, previousRevenue, percentageChange, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">REVENUE SUMMARY</h2>
        <div className="relative inline-block text-left">
          <div>
            <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="menu-button" aria-expanded="false" aria-haspopup="true">
              Monthly
              <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          {/* Optional: Dropdown menu */}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-between">
        {/* Radial Bar Chart */}
        <div className="relative w-40 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart innerRadius="70%" outerRadius="90%" data={data} startAngle={90} endAngle={-270}>
              <RadialBar background clockWise={true} dataKey="value" cornerRadius={5} />
              <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            </RadialBarChart>
          </ResponsiveContainer>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-sm font-semibold text-gray-500">Archived</div>
            <div className="text-2xl font-bold text-gray-800">{data && data.length > 0 ? data.reduce((sum, item) => sum + item.value, 0) : 0}%</div>
          </div>
        </div>

        {/* Revenue Details */}
        <div className="ml-6">
          <div className="text-2xl font-bold text-indigo-600">{currentRevenue}</div>
          <div className="text-sm text-green-500 font-semibold flex items-center">
            <AiOutlineArrowUp className="mr-1" />
            {percentageChange}
          </div>
          <div className="text-gray-500 text-sm mt-1">From {previousRevenue}</div>
          <div className="text-gray-500 text-sm mt-2">{description}</div>
          <button className="bg-gray-800 text-white py-2 px-4 rounded-md mt-4 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400">
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default RevenueSummaryCard;