
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Sedan', value: 54 },
  { name: 'SUV', value: 78 },
  { name: 'Truck', value: 42 },
  { name: 'Sports', value: 25 },
  { name: 'Luxury', value: 31 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#6366f1', '#ec4899', '#f97316'];

const InventoryChart = () => {
  return (
    <div className="dashboard-card h-[300px]">
      <h2 className="text-lg font-semibold text-navy-800 mb-4">Inventory by Category</h2>
      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [value, 'Vehicles']} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InventoryChart;
