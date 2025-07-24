import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

// Custom Tooltip Component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white rounded-md shadow-lg border border-gray-200">
        <p className="text-sm font-bold text-gray-700">{payload[0].value}</p>
      </div>
    );
  }
  return null;
};

/**
 * A component to display a summary card with a small area chart.
 * @param {{
 * Icon: React.ElementType,
 * title: string,
 * value: string,
 * data: {name: string, value: number}[]
 * }} props
 */
const RevenueChartCard = ({ Icon, title, value, data }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            {title}
          </p>
          <p className="text-3xl font-bold text-indigo-600 mt-1">
            {value}
          </p>
        </div>
        <div className="bg-gray-100 p-2 rounded-full">
          <Icon className="h-6 w-6 text-gray-600" />
        </div>
      </div>

      {/* Chart Section */}
      <div className="mt-4 h-24">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              {/* Gradient for the area fill */}
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#d1d5db" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#d1d5db" stopOpacity={0} />
              </linearGradient>
            </defs>
            
            {/* The dashed line that appears on hover */}
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: '#a0aec0', strokeWidth: 1, strokeDasharray: '5 5' }}
            />
            
            <Area
              type="monotone"
              dataKey="value"
              stroke="#a0aec0" // Line color
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#chartGradient)" // Apply the gradient
              activeDot={{
                r: 6, // Radius of the active dot
                stroke: 'white',
                strokeWidth: 2,
                fill: '#4a5568', // Color of the active dot
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChartCard;