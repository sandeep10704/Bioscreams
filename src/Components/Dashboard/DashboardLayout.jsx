import React from 'react'
import CurveChartCard from "./Components/CurveChartCard"
import { FaCalendarTimes, FaDollarSign, FaUserFriends, FaUtensils } from 'react-icons/fa';
import LineChartCard from './Components/LineChartCard';
import RevenueSummaryCard from './Components/RevenueSummaryCard';
import OrderChartCard from './Components/OrderChartCard';
import DeliveryChartCard from './Components/DeliveryChartCard';
import TrendingMenuCard from './Components/TrendingMenuCard';

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
  const weeklyOrderData = [
    { name: 'Sun', orders: 37 },
    { name: 'Mon', orders: 43 },
    { name: 'Tue', orders: 40 },
    { name: 'Wed', orders: 51 },
    { name: 'Thu', orders: 45 },
    { name: 'Fri', orders: 23 },
    { name: 'Sat', orders: 54 },
  ];
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const foodCategories = ['Food', 'Beverage', 'Snack', 'Hot Drinks', 'Veg Food'];
  const deliveryData = [
    // --- Sunday ---
    { day: 'Sun', category: 'Food', value: 25 },
    { day: 'Sun', category: 'Beverage', value: 80 },
    { day: 'Sun', category: 'Snack', value: 20 },
    { day: 'Sun', category: 'Hot Drinks', value: 85 },
    { day: 'Sun', category: 'Veg Food', value: 80 },

    // --- Monday ---
    { day: 'Mon', category: 'Food', value: 30 },
    { day: 'Mon', category: 'Beverage', value: 25 },
    { day: 'Mon', category: 'Snack', value: 60 },
    { day: 'Mon', category: 'Hot Drinks', value: 50 },
    { day: 'Mon', category: 'Veg Food', value: 30 },

    // --- Tuesday ---
    { day: 'Tue', category: 'Food', value: 10 },
    { day: 'Tue', category: 'Beverage', value: 50 },
    { day: 'Tue', category: 'Snack', value: 80 },
    { day: 'Tue', category: 'Hot Drinks', value: 55 },
    { day: 'Tue', category: 'Veg Food', value: 20 },

    // --- Wednesday ---
    { day: 'Wed', category: 'Food', value: 35 },
    { day: 'Wed', category: 'Beverage', value: 30 },
    { day: 'Wed', category: 'Snack', value: 55 },
    { day: 'Wed', category: 'Hot Drinks', value: 60 },
    { day: 'Wed', category: 'Veg Food', value: 25 },

    // --- Thursday ---
    { day: 'Thu', category: 'Food', value: 50 },
    { day: 'Thu', category: 'Beverage', value: 100 },
    { day: 'Thu', category: 'Snack', value: 30 },
    { day: 'Thu', category: 'Hot Drinks', value: 80 },
    { day: 'Thu', category: 'Veg Food', value: 100 },

    // --- Friday ---
    { day: 'Fri', category: 'Food', value: 20 },
    { day: 'Fri', category: 'Beverage', value: 50 },
    { day: 'Fri', category: 'Snack', value: 65 },
    { day: 'Fri', category: 'Hot Drinks', value: 50 },
    { day: 'Fri', category: 'Veg Food', value: 60 },

    // --- Saturday ---
    { day: 'Sat', category: 'Food', value: 55 },
    { day: 'Sat', category: 'Beverage', value: 60 },
    { day: 'Sat', category: 'Snack', value: 100 },
    { day: 'Sat', category: 'Hot Drinks', value: 65 },
    { day: 'Sat', category: 'Veg Food', value: 85 },
  ];
  const menuItems = [
    {
      id: 1,
      rank: 1,
      name: 'Italian Burata Pizza',
      price: '$12.00',
      orders: '22x',
      imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 2,
      rank: 2,
      name: 'Veg Indian Thali',
      price: '$14.00',
      orders: '13x',
      imageUrl: 'https://images.unsplash.com/photo-1626776878134-b105b466d344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    },
    {
      id: 3,
      rank: 3,
      name: 'Chocolate Lava Cake',
      price: '$10.00',
      orders: '10x',
      imageUrl: 'https://images.unsplash.com/photo-1586985289933-6099b00249c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    },
  ];

  return (
   <div className="w-full lg:max-w-[1200px] mx-auto px-2">
  <div className="bg-gray-50 flex flex-col gap-2 items-center justify-center py-2">

    {/* Top Section: Stats and Revenue Summary */}
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 w-full">
      
      {/* 2x2 Stat Cards */}
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

      {/* Revenue Summary Card */}
      <div className="col-span-2 w-full">
        <RevenueSummaryCard
          data={chartData2}
          currentRevenue="$56,184.22"
          previousRevenue="$600,765.00"
          percentageChange="31.08%"
          description="Restaurant has successfully completed a substantial number of orders, totaling 4,500 orders."
        />
      </div>
    </div>

    {/* Bottom Section: Charts and Menu */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full">
      <OrderChartCard
        title="Order Chart"
        dropdownText="Weekly"
        messagePrefix="Yeah! You have received "
        highlightedValue="+33"
        messageSuffix=" new orders today"
        data={weeklyOrderData}
      />
      <DeliveryChartCard
        title="Daily Delivery Chart"
        dropdownText="Weekly"
        messagePrefix="Yeah! You have delivered "
        highlightedValue="910"
        messageSuffix=" orders today"
        data={deliveryData}
        xAxisLabels={weekDays}
        yAxisLabels={foodCategories}
      />
      <TrendingMenuCard
        title="Daily Trending Menu"
        linkText="View Menu"
        items={menuItems}
      />
    </div>

  </div>
</div>




  )
}

export default DashboardLayout
