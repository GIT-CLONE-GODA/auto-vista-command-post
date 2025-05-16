
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const orders = [
  {
    id: 'ORD-7863',
    customer: 'James Wilson',
    car: 'Audi Q5 2023',
    amount: '$57,800',
    date: '2023-05-12',
    status: 'Completed',
  },
  {
    id: 'ORD-7862',
    customer: 'Emily Chen',
    car: 'BMW X3 2023',
    amount: '$52,400',
    date: '2023-05-11',
    status: 'Processing',
  },
  {
    id: 'ORD-7861',
    customer: 'Robert Miller',
    car: 'Mercedes GLC 2023',
    amount: '$63,200',
    date: '2023-05-10',
    status: 'Completed',
  },
  {
    id: 'ORD-7860',
    customer: 'Sarah Johnson',
    car: 'Tesla Model Y',
    amount: '$58,990',
    date: '2023-05-09',
    status: 'Completed',
  },
];

const RecentOrders = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate('/orders');
  };

  return (
    <div className="dashboard-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Recent Orders</h2>
        <Button 
          variant="ghost" 
          onClick={handleViewAll} 
          className="text-sm text-primary flex items-center"
        >
          View All <ChevronRight size={16} />
        </Button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-border">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Order ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Customer</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Vehicle</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Amount</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-muted/30">
                <td className="px-4 py-3 text-sm font-medium">{order.id}</td>
                <td className="px-4 py-3 text-sm">{order.customer}</td>
                <td className="px-4 py-3 text-sm">{order.car}</td>
                <td className="px-4 py-3 text-sm font-medium">{order.amount}</td>
                <td className="px-4 py-3 text-sm">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    order.status === 'Completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                  }`}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
