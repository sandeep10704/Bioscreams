import React, { useState, useRef } from 'react';

// Animation and hover styles are defined here.
const animationStyles = `
  @keyframes fadeInScaleUp {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .heatmap-cell {
    opacity: 0; /* Start as invisible */
    transform: scale(0.5); /* Start scaled down */
    animation: fadeInScaleUp 0.5s ease-out forwards; /* Apply the animation */
    
    /* Add transition for a smooth hover effect */
    transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
  }

  .heatmap-cell:hover {
    position: relative; /* Ensure the hovered cell renders on top of its neighbors */
    z-index: 10;
    transform: scale(1.15); /* Slightly enlarge the cell on hover */
    /* Add a white outline and a subtle GRAY shadow for depth */
    box-shadow: 0 0 0 3px white, 0 5px 15px rgba(150, 150, 150, 0.5);
  }
`;

// Helper function to get color based on value
const getColor = (value, min, max) => {
  if (max - min === 0) {
    return 'rgb(99, 102, 241)';
  }
  if (value === null || value === undefined) return '#f0f0f0';
  
  const percentage = (value - min) / (max - min);
  const start = [224, 231, 255]; // Tailwind's indigo-100
  const end = [99, 102, 241];   // Tailwind's indigo-500
  const color = start.map((startChannel, i) =>
    Math.round(startChannel + percentage * (end[i] - startChannel))
  );
  return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
};

/**
 * A custom tooltip component with a white background.
 */
const CustomTooltip = ({ content, position, visible }) => {
  if (!visible || !content) {
    return null;
  }

  return (
    <div
      className="bg-white text-gray-800 text-xs font-semibold rounded-md shadow-lg p-2 z-20 border border-gray-200"
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(10px, -30px)', // Position near the cursor
        pointerEvents: 'none', // Allow hover events to pass through to the grid
      }}
    >
      {content}
    </div>
  );
};


/**
 * A dedicated component to render the heatmap grid using CSS Grid.
 */
const HeatmapGrid = ({ data, xAxisLabels, yAxisLabels, minValue, maxValue }) => {
  const dataMap = new Map();
  data.forEach(item => {
    dataMap.set(`${item.day}-${item.category}`, item.value);
  });

  const reversedYAxisLabels = [...yAxisLabels].reverse();
  const gridRef = useRef(null);

  // State to manage the tooltip's visibility, content, and position
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: '',
    x: 0,
    y: 0
  });

  const handleMouseMove = (e) => {
    if (!gridRef.current) return;
    const rect = gridRef.current.getBoundingClientRect();
    setTooltip(prev => ({
      ...prev,
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }));
  };

  const handleMouseEnterCell = (day, category, value) => {
    setTooltip(prev => ({
        ...prev,
        visible: true,
        content: `${category} - ${day}: ${value !== undefined ? value : 'N/A'}`
    }));
  };

  const handleMouseLeaveGrid = () => {
    setTooltip(prev => ({ ...prev, visible: false }));
  };

  return (
    <div
      ref={gridRef}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeaveGrid}
    >
      <CustomTooltip
        visible={tooltip.visible}
        content={tooltip.content}
        position={{ x: tooltip.x, y: tooltip.y }}
      />
      <div
        className="grid"
        style={{
          gridTemplateColumns: `auto repeat(${xAxisLabels.length}, 1fr)`,
          gap: '6px',
        }}
      >
        {/* 1. Top-left empty cell */}
        <div />

        {/* 2. X-Axis Labels */}
        {xAxisLabels.map(day => (
          <div key={day} className="text-center text-[0.6rem] font-bold text-gray-500">
            {day}
          </div>
        ))}

        {/* 3. Y-Axis Labels and Data Cells */}
        {reversedYAxisLabels.map((category, rowIndex) => (
          <React.Fragment key={category}>
            <div className="text-right text-[0.6rem] font-bold text-gray-500 pr-2 flex items-center justify-end">
              {category}
            </div>

            {xAxisLabels.map((day, colIndex) => {
              const value = dataMap.get(`${day}-${category}`);
              const color = getColor(value, minValue, maxValue);
              const animationDelay = `${(rowIndex * xAxisLabels.length + colIndex) * 30}ms`;

              return (
                <div
                  key={`${day}-${category}`}
                  className="heatmap-cell w-full h-8 rounded"
                  style={{
                    backgroundColor: color,
                    animationDelay,
                  }}
                  onMouseEnter={() => handleMouseEnterCell(day, category, value)}
                >
                  {/* The native 'title' attribute has been removed */}
                  <div className="w-full h-full"></div>
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};


/**
 * A component to display a daily delivery heatmap chart.
 */
const DeliveryChartCard = ({ title, dropdownText, messagePrefix, highlightedValue, messageSuffix, data, xAxisLabels, yAxisLabels }) => {

  if (!data || data.length === 0 || !xAxisLabels || !yAxisLabels) {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-sm mx-auto flex items-center justify-center" style={{height: '400px'}}>
            <p className="text-gray-500">No data available to display chart.</p>
        </div>
    );
  }

  const values = data.map(item => item.value).filter(v => v !== null && v !== undefined);
  const minValue = values.length > 0 ? Math.min(...values) : 0;
  const maxValue = values.length > 0 ? Math.max(...values) : 100;

  return (
    <>
      <style>{animationStyles}</style>
      <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-sm mx-auto">
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
        <div className="text-center text-gray-500 mb-10 text-sm">
          {messagePrefix}
          <span className="font-bold text-indigo-600">{highlightedValue}</span>
          {messageSuffix}
        </div>

        {/* Chart Area */}
        <div className="w-full mt-4">
          <HeatmapGrid
            data={data}
            xAxisLabels={xAxisLabels}
            yAxisLabels={yAxisLabels}
            minValue={minValue}
            maxValue={maxValue}
          />
        </div>
      </div>
    </>
  );
};

export default DeliveryChartCard;
