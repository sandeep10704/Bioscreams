import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LabelList, Tooltip } from 'recharts';

/**
 * A custom tooltip component for styling.
 */
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white rounded-md shadow-lg border border-gray-200">
        <p className="text-sm font-semibold text-gray-700">{`${label}`}</p>
        <p className="text-sm text-blue-500">{`Orders: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};


/**
 * A component to display a weekly order summary chart.
 * @param {{
 * title: string,
 * dropdownText: string,
 * messagePrefix: string,
 * highlightedValue: string,
 * messageSuffix: string,
 * data: { name: string, orders: number }[]
 * }} props
 */
const OrderChartCard = ({ title, dropdownText, messagePrefix, highlightedValue, messageSuffix, data }) => {

  // Custom formatter for Y-axis ticks
  const yAxisFormatter = (tick) => `${tick}+`;

  // Custom formatter for the labels on top of the bars
  const dataLabelFormatter = (value) => `${value}+`;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-1xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-sm font-semibold text-gray-800 uppercase">{title}</h2>
        <div className="relative">
          <button type="button" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900">
            {dropdownText}
            <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <hr className="my-4 border-t border-gray-200" />

      {/* Sub-header Message */}
      <div className="text-center text-gray-500 mb-2 text-sm">
        {messagePrefix}
        <span className="font-bold text-green-500">{highlightedValue}</span>
        {messageSuffix}
      </div>

      {/* Chart */}
      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 30, right: 10, left: -30, bottom: 0 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="2 2" stroke="#e5e7eb" />
            <XAxis
              dataKey="name"
              axisLine={true}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 10 }}
              dy={10}
            />
            <YAxis
              axisLine={true}
              tickLine={false}
              tick={{ fill: '#6b7280', fontSize: 10 }}
              tickFormatter={yAxisFormatter}
            />
            {/* Tooltip component added here */}
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'rgba(239, 246, 255, 0.5)' }} // Light blue highlight
            />
            <Bar
              dataKey="orders"
              fill="#6b7280"
              barSize={20}
              radius={[4, 4, 0, 0]}
              animationDuration={500}
            >
              <LabelList
                dataKey="orders"
                position="top"
                formatter={dataLabelFormatter}
                style={{ fill: '#374151', fontSize: '10px', fontWeight: 'bold' }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OrderChartCard;