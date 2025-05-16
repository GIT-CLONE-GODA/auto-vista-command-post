
import React, { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Eye, FileDown } from 'lucide-react';

// Mock data for orders
const orderData = [
  { 
    id: '#ORD-8924',
    customer: 'John Doe',
    vehicle: 'Tesla Model S',
    date: '2025-04-18',
    total: 79999,
    status: 'Delivered'
  },
  { 
    id: '#ORD-8923',
    customer: 'Jane Smith',
    vehicle: 'BMW i8',
    date: '2025-04-17',
    total: 147500,
    status: 'Processing'
  },
  { 
    id: '#ORD-8922',
    customer: 'Robert Johnson',
    vehicle: 'Mercedes EQS',
    date: '2025-04-16',
    total: 102310,
    status: 'Delivered'
  },
  { 
    id: '#ORD-8921',
    customer: 'Emily Davis',
    vehicle: 'Audi e-tron GT',
    date: '2025-04-15',
    total: 104900,
    status: 'Pending'
  },
  { 
    id: '#ORD-8920',
    customer: 'Michael Brown',
    vehicle: 'Porsche Taycan',
    date: '2025-04-14',
    total: 86700,
    status: 'Cancelled'
  },
  { 
    id: '#ORD-8919',
    customer: 'Sarah Wilson',
    vehicle: 'Toyota Camry',
    date: '2025-04-13',
    total: 25945,
    status: 'Delivered'
  },
  { 
    id: '#ORD-8918',
    customer: 'David Martinez',
    vehicle: 'Ford Mustang',
    date: '2025-04-12',
    total: 27470,
    status: 'Processing'
  },
];

const Orders = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredOrders = orderData.filter(order => 
    (order.customer.toLowerCase().includes(searchQuery.toLowerCase()) || 
     order.id.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (statusFilter === 'all' || order.status === statusFilter)
  );

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Delivered':
        return <Badge className="bg-green-500">Delivered</Badge>;
      case 'Processing':
        return <Badge className="bg-blue-500">Processing</Badge>;
      case 'Pending':
        return <Badge className="bg-yellow-500">Pending</Badge>;
      case 'Cancelled':
        return <Badge className="bg-red-500">Cancelled</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <DashboardHeader />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Orders Management</h2>
          <div className="flex gap-3">
            <Button variant="outline" className="flex gap-2 items-center">
              <FileDown size={16} />
              <span>Export</span>
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <Input 
            type="text" 
            placeholder="Search by order ID or customer..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="md:w-80"
          />
          <Select 
            value={statusFilter} 
            onValueChange={setStatusFilter}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="Delivered">Delivered</SelectItem>
              <SelectItem value="Processing">Processing</SelectItem>
              <SelectItem value="Pending">Pending</SelectItem>
              <SelectItem value="Cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="dashboard-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Vehicle</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.vehicle}</TableCell>
                  <TableCell>{formatDate(order.date)}</TableCell>
                  <TableCell>{formatPrice(order.total)}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Eye size={16} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
