
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
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Eye, Plus, Mail, Phone } from 'lucide-react';

// Mock data for customers
const customerData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    orders: 3,
    spent: 108450,
    status: 'Active',
    lastPurchase: '2025-04-10'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '(555) 987-6543',
    orders: 1,
    spent: 147500,
    status: 'Active',
    lastPurchase: '2025-04-17'
  },
  {
    id: 3,
    name: 'Robert Johnson',
    email: 'robert.j@example.com',
    phone: '(555) 555-5555',
    orders: 2,
    spent: 128255,
    status: 'Active',
    lastPurchase: '2025-04-02'
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.d@example.com',
    phone: '(555) 222-3333',
    orders: 1,
    spent: 104900,
    status: 'Inactive',
    lastPurchase: '2025-03-15'
  },
  {
    id: 5,
    name: 'Michael Brown',
    email: 'michael.b@example.com',
    phone: '(555) 444-5555',
    orders: 0,
    spent: 0,
    status: 'Inactive',
    lastPurchase: null
  },
  {
    id: 6,
    name: 'Sarah Wilson',
    email: 'sarah.w@example.com',
    phone: '(555) 777-8888',
    orders: 1,
    spent: 25945,
    status: 'Active',
    lastPurchase: '2025-04-13'
  },
  {
    id: 7,
    name: 'David Martinez',
    email: 'david.m@example.com',
    phone: '(555) 666-7777',
    orders: 2,
    spent: 54940,
    status: 'Active',
    lastPurchase: '2025-03-25'
  }
];

const Customers = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCustomers = customerData.filter(customer => 
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'Active':
        return <Badge className="bg-green-500">Active</Badge>;
      case 'Inactive':
        return <Badge variant="outline">Inactive</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return 'Never';
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

  const getInitials = (name: string) => {
    return name.split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <DashboardHeader />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Customer Management</h2>
          <div className="flex gap-3">
            <Button className="flex items-center gap-1">
              <Plus size={16} />
              <span>Add Customer</span>
            </Button>
          </div>
        </div>
        
        <div className="mb-6">
          <Input 
            type="text" 
            placeholder="Search customers..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-sm"
          />
        </div>
        
        <div className="dashboard-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Last Purchase</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback>{getInitials(customer.name)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{customer.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1">
                        <Mail size={14} /> 
                        <span>{customer.email}</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Phone size={14} /> 
                        <span>{customer.phone}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{customer.orders}</TableCell>
                  <TableCell>{formatPrice(customer.spent)}</TableCell>
                  <TableCell>{formatDate(customer.lastPurchase)}</TableCell>
                  <TableCell>{getStatusBadge(customer.status)}</TableCell>
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

export default Customers;
