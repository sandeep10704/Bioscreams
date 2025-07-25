import React from 'react';
import { BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';
import { FaUserFriends } from 'react-icons/fa'; // Example icon

// A simple, reusable tooltip for our charts
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white rounded-md shadow-lg border border-gray-200">
        <p className="text-xs font-bold text-gray-700">{payload[0].value}</p>
      </div>
    );
  }
  return null;
};

/**
 * A component to display a summary card with a small bar chart.
 * @param {{
 * Icon: React.ElementType,
 * title: string,
 * value: string,
 * data: {name: string, value: number}[]
 * }} props
 */
const LineChartCard = ({ Icon, title, value, data }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-sm">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {title}
          </p>
          {/* Note: The value color is changed to match the new design */}
          <p className="text-2xl font-bold text-slate-800 mt-1">
            {value}
          </p>
        </div>
        <div className="bg-gray-100 p-2 rounded-full">
          <Icon className="h-6 w-6 text-gray-600" />
        </div>
      </div>

      {/* Chart Section */}
      <div className="mt-4 h-22">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'rgba(243, 244, 246, 0.5)' }} // Light grey background on hover
            />
            <Bar
              dataKey="value"
              fill="#818cf8" // Tailwind's indigo-400
              radius={[4, 4, 0, 0]} // Rounded tops for the bars
              barSize={6} // Makes the bars thinner
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartCard;