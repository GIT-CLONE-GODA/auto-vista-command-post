
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
import { Eye, Plus, Mail, Phone, Trash2, Edit } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useDatabase } from '../hooks/useDatabase';

const Customers = () => {
  const { isInitialized, customers, deleteCustomer } = useDatabase();
  const [searchQuery, setSearchQuery] = useState('');

  if (!isInitialized) {
    return (
      <div className="flex-1 overflow-y-auto">
        <DashboardHeader />
        <div className="p-6">
          <div className="flex justify-center items-center h-64">
            <p>Loading customers...</p>
          </div>
        </div>
      </div>
    );
  }

  const filteredCustomers = customers.filter(customer => 
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
  
  const handleAddCustomer = () => {
    toast({
      title: "Add Customer",
      description: "Customer add form would open here.",
    });
  };
  
  const handleViewCustomer = (id: number) => {
    toast({
      title: "View Customer Details",
      description: `Viewing details for customer #${id}`,
    });
  };

  const handleEditCustomer = (id: number) => {
    toast({
      title: "Edit Customer",
      description: `Editing customer #${id}`,
    });
  };

  const handleDeleteCustomer = async (id: number) => {
    try {
      await deleteCustomer(id);
      toast({
        title: "Customer Deleted",
        description: "Customer has been successfully deleted.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete customer.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <DashboardHeader />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Customer Management</h2>
          <div className="flex gap-3">
            <Button className="flex items-center gap-1" onClick={handleAddCustomer}>
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
                    <div className="flex justify-end gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0"
                        onClick={() => handleViewCustomer(customer.id!)}
                      >
                        <Eye size={16} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0"
                        onClick={() => handleEditCustomer(customer.id!)}
                      >
                        <Edit size={16} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0 text-red-500"
                        onClick={() => handleDeleteCustomer(customer.id!)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
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
