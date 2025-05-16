
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Car, 
  ShoppingCart, 
  Users, 
  Settings, 
  ChevronRight, 
  ChevronLeft,
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const DashboardSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
    { name: 'Inventory', icon: <Car size={20} />, path: '/inventory' },
    { name: 'Orders', icon: <ShoppingCart size={20} />, path: '/orders' },
    { name: 'Customers', icon: <Users size={20} />, path: '/customers' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/settings' },
  ];

  return (
    <div 
      className={`bg-sidebar h-screen flex flex-col transition-all duration-300 ease-in-out border-r border-sidebar-border ${collapsed ? 'w-16' : 'w-64'}`}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!collapsed && (
          <h1 className="text-xl font-bold text-white">AutoAdmin</h1>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className="p-1 rounded-md hover:bg-sidebar-accent transition-colors"
        >
          {collapsed ? 
            <ChevronRight size={20} className="text-sidebar-foreground" /> :
            <ChevronLeft size={20} className="text-sidebar-foreground" />
          }
        </button>
      </div>
      
      <nav className="flex-1 py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || 
              (item.path !== '/' && location.pathname.startsWith(item.path));
            
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 rounded-md px-3 py-2 transition-colors ${
                    isActive 
                      ? 'bg-sidebar-primary text-white'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent'
                  }`}
                >
                  <span>{item.icon}</span>
                  {!collapsed && <span>{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center justify-between">
          {!collapsed ? (
            <>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sidebar-accent flex items-center justify-center">
                  <span className="text-white font-semibold">A</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-sidebar-foreground font-medium">Admin User</p>
                  <p className="text-xs text-sidebar-foreground/70">admin@autostore.com</p>
                </div>
              </div>
              <ThemeToggle />
            </>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-sidebar-accent flex items-center justify-center">
                <span className="text-white font-semibold">A</span>
              </div>
              <ThemeToggle />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
