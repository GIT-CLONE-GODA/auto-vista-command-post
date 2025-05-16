
import React, { useState } from 'react';
import { Bell, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const DashboardHeader = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  
  const getPageTitle = () => {
    switch(location.pathname) {
      case '/': return 'Dashboard';
      case '/inventory': return 'Inventory';
      case '/orders': return 'Orders';
      case '/customers': return 'Customers';
      case '/settings': return 'Settings';
      default: return 'Dashboard';
    }
  };

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim() !== '') {
      toast({
        title: "Search Initiated",
        description: `Searching for "${searchQuery}" in ${getPageTitle()}`,
      });
    }
  };
  
  const handleNotifications = () => {
    toast({
      title: "Notifications",
      description: "You have 3 unread notifications",
    });
  };

  return (
    <header className="h-16 px-6 flex items-center justify-between bg-background/50 backdrop-blur-sm border-b border-border sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-semibold">{getPageTitle()}</h2>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <Search size={18} className="text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 rounded-md bg-secondary border border-border text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
        
        <button 
          className="relative"
          onClick={handleNotifications}
        >
          <Bell size={20} className="text-foreground" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">3</span>
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
