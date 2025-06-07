
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
import { Edit, Trash2, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { useDatabase } from '../hooks/useDatabase';

const Inventory = () => {
  const { isInitialized, vehicles, deleteVehicle } = useDatabase();
  const [searchQuery, setSearchQuery] = useState('');
  
  if (!isInitialized) {
    return (
      <div className="flex-1 overflow-y-auto">
        <DashboardHeader />
        <div className="p-6">
          <div className="flex justify-center items-center h-64">
            <p>Loading inventory...</p>
          </div>
        </div>
      </div>
    );
  }
  
  const filteredInventory = vehicles.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'In Stock':
        return <Badge className="bg-green-500">In Stock</Badge>;
      case 'Low Stock':
        return <Badge className="bg-yellow-500">Low Stock</Badge>;
      case 'Out of Stock':
        return <Badge className="bg-red-500">Out of Stock</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };
  
  const handleAddVehicle = () => {
    toast({
      title: "Add Vehicle",
      description: "Vehicle add form would open here.",
    });
  };
  
  const handleEdit = (id: number) => {
    toast({
      title: "Edit Vehicle",
      description: `Editing vehicle #${id}`,
    });
  };
  
  const handleDelete = async (id: number) => {
    try {
      await deleteVehicle(id);
      toast({
        title: "Vehicle Deleted",
        description: "Vehicle has been successfully deleted.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete vehicle.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <DashboardHeader />
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Vehicle Inventory</h2>
          <div className="flex gap-3">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search inventory..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64"
              />
            </div>
            <Button className="flex items-center gap-1" onClick={handleAddVehicle}>
              <Plus size={16} />
              <span>Add Vehicle</span>
            </Button>
          </div>
        </div>
        
        <div className="dashboard-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Image</TableHead>
                <TableHead>Vehicle</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="rounded-md w-20 h-12 object-cover" 
                    />
                  </TableCell>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{formatPrice(item.price)}</TableCell>
                  <TableCell>{item.stock}</TableCell>
                  <TableCell>{getStatusBadge(item.status)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm" onClick={() => handleEdit(item.id!)}>
                        <Edit size={16} />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500" onClick={() => handleDelete(item.id!)}>
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

export default Inventory;
