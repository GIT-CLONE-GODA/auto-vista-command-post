
import React from 'react';
import { Link } from 'react-router-dom';
import DashboardHeader from '../components/DashboardHeader';

const NotFoundDashboard = () => {
  return (
    <div className="flex-1 overflow-y-auto">
      <DashboardHeader />
      <div className="p-6 flex flex-col items-center justify-center min-h-[80vh]">
        <h2 className="text-4xl font-bold text-navy-900 mb-4">404</h2>
        <p className="text-xl text-navy-500 mb-8">The page you're looking for doesn't exist.</p>
        <Link to="/" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFoundDashboard;
