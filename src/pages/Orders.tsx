
import React from 'react';
import DashboardHeader from '../components/DashboardHeader';

const Orders = () => {
  return (
    <div className="flex-1 overflow-y-auto">
      <DashboardHeader />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-6">Orders Management</h2>
        <div className="dashboard-card">
          <p className="text-center py-10 text-navy-500">Orders management coming soon</p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
