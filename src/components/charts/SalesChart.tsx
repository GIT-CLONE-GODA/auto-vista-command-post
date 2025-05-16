
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', sales: 35000 },
  { name: 'Feb', sales: 28000 },
  { name: 'Mar', sales: 42000 },
  { name: 'Apr', sales: 38000 },
  { name: 'May', sales: 50000 },
  { name: 'Jun', sales: 65000 },
  { name: 'Jul', sales: 55000 },
];

const SalesChart = () => {
  return (
    <div className="dashboard-card h-[300px]">
      <h2 className="text-lg font-semibold text-navy-800 mb-4">Sales Overview</h2>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis dataKey="name" tick={{ fill: '#64748b' }} />
          <YAxis 
            tick={{ fill: '#64748b' }}
            tickFormatter={(value) => `$${value/1000}k`} 
          />
          <Tooltip 
            formatter={(value) => [`$${value.toLocaleString()}`, 'Sales']}
            labelStyle={{ color: '#0f172a' }}
            contentStyle={{ backgroundColor: 'white', borderRadius: '0.375rem', border: '1px solid #e2e8f0' }}
          />
          <Area 
            type="monotone" 
            dataKey="sales" 
            stroke="#3b82f6" 
            fill="url(#colorSales)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
