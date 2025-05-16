
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  color: string;
}

const StatCard = ({ title, value, change, isPositive, icon, color }: StatCardProps) => {
  return (
    <div className="dashboard-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="stat-label">{title}</h3>
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
          {icon}
        </div>
      </div>
      <div>
        <p className="stat-value">{value}</p>
        <div className="flex items-center mt-2">
          <span className={`text-xs font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? '↑' : '↓'} {change}
          </span>
          <span className="text-xs text-navy-400 ml-2">vs last month</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
