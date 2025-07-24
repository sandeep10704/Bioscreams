import React from 'react'
import CurveChartCard from "./Components/CurveChartCard"
import { FaCalendarTimes, FaDollarSign, FaUserFriends, FaUtensils } from 'react-icons/fa';
import LineChartCard from './Components/LineChartCard';
import RevenueSummaryCard from './Components/RevenueSummaryCard';

const DashboardLayout = () => {
  const chartData = [
    { name: 'Jan', value: 30 },
    { name: 'Feb', value: 45 },
    { name: 'Mar', value: 40 },
    { name: 'Apr', value: 66 },
    { name: 'May', value: 80 },
    { name: 'Jun', value: 75 },
    { name: 'Jul', value: 90 },
    { name: 'Aug', value: 85 },
  ];
  const customerData = [
    { name: 'W1', value: 50 }, { name: 'W2', value: 80 },
    { name: 'W3', value: 30 }, { name: 'W4', value: 90 },
    { name: 'W5', value: 40 }, { name: 'W6', value: 60 },
    { name: 'W7', value: 25 }, { name: 'W8', value: 70 },
    { name: 'W9', value: 10 }, { name: 'W10', value: 15 },
    { name: 'W11', value: 5 }, { name: 'W12', value: 20 },
    { name: 'W13', value: 45 }, { name: 'W14', value: 85 },
    { name: 'W15', value: 35 }, { name: 'W16', value: 75 },
    { name: 'W17', value: 95 }, { name: 'W18', value: 65 },
    { name: 'W19', value: 45 }, { name: 'W20', value: 88 },
  ];
  const chartData2 = [
    { value: 75, fill: '#818cf8' } // Example: 75% fill with Tailwind's indigo-400 color
  ];

  return (
    <div className='w-fit'>

      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-4  w-full ">

          {/* Left side: 4 statistic cards in 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:col-span-2">
            <CurveChartCard
              Icon={FaDollarSign}
              title="TOTAL REVENUE"
              value="$35,428.09"
              data={chartData}
            />
            <LineChartCard
              Icon={FaUtensils}
              title="TOTAL ORDERS"
              value="4526"
              data={customerData}
            />
            <LineChartCard
              Icon={FaUserFriends}
              title="TOTAL CUSTOMERS"
              value="5736"
              data={customerData}
            />
            <CurveChartCard
              Icon={FaCalendarTimes}
              title="CANCELLED ORDERS"
              value="1310"
              data={chartData}
            />
          </div>

          {/* Right side: Revenue Summary */}
          <div className="col-span-2 w-auto">
            <RevenueSummaryCard
              data={chartData2}
              currentRevenue="$56,184.22"
              previousRevenue="$600,765.00"
              percentageChange="31.08%"
              description="Restaurant has successfully completed a substantial number of orders, totaling 4,500 orders."
            />
          </div>
        </div>
      </div>



    </div>
  )
}

export default DashboardLayout
