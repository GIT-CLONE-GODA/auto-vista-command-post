
import React from 'react';
import { Bell, Search } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <header className="h-16 px-6 flex items-center justify-between bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-semibold text-navy-900">Dashboard</h2>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <Search size={18} className="text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 rounded-md bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        
        <button className="relative">
          <Bell size={20} className="text-navy-700" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">3</span>
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
