import React from 'react'
import RevenueChartCard from "./Components/RevenueChartCard"
import { FaDollarSign } from 'react-icons/fa'; 

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

  return (
    <div className='m'>
      DashboardLayout
      <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
      <RevenueChartCard
        Icon={FaDollarSign}
        title="TOTAL REVENUE"
        value="$35,428.09"
        data={chartData}
      />
    </div>
    </div>
  )
}

export default DashboardLayout
