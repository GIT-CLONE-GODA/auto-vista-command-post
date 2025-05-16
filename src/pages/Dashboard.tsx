
import React from 'react';
import { Car, ShoppingCart, Users, DollarSign } from 'lucide-react';

import DashboardHeader from '../components/DashboardHeader';
import StatCard from '../components/StatCard';
import SalesChart from '../components/charts/SalesChart';
import InventoryChart from '../components/charts/InventoryChart';
import RecentOrders from '../components/RecentOrders';
import PopularVehicles from '../components/PopularVehicles';

const Dashboard = () => {
  return (
    <div className="flex-1 overflow-y-auto pb-10">
      <DashboardHeader />
      
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatCard 
            title="Total Revenue" 
            value="$895,426" 
            change="12.3%" 
            isPositive={true} 
            icon={<DollarSign size={20} className="text-white" />}
            color="bg-blue-500"
          />
          <StatCard 
            title="Total Orders" 
            value="1,248" 
            change="8.3%" 
            isPositive={true} 
            icon={<ShoppingCart size={20} className="text-white" />}
            color="bg-purple-500"
          />
          <StatCard 
            title="Inventory" 
            value="230" 
            change="4.1%" 
            isPositive={false} 
            icon={<Car size={20} className="text-white" />}
            color="bg-indigo-500"
          />
          <StatCard 
            title="Customers" 
            value="3,642" 
            change="9.2%" 
            isPositive={true} 
            icon={<Users size={20} className="text-white" />}
            color="bg-pink-500"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <SalesChart />
          </div>
          <div>
            <InventoryChart />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentOrders />
          </div>
          <div>
            <PopularVehicles />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
