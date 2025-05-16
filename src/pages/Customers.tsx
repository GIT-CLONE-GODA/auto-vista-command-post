
import React from 'react';
import DashboardHeader from '../components/DashboardHeader';

const Customers = () => {
  return (
    <div className="flex-1 overflow-y-auto">
      <DashboardHeader />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-6">Customer Management</h2>
        <div className="dashboard-card">
          <p className="text-center py-10 text-navy-500">Customer management coming soon</p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
