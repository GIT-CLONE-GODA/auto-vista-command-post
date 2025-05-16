
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
import { Check, X, Edit, Trash2, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Mock data for inventory
const inventoryData = [
  { 
    id: 1, 
    name: 'Tesla Model S', 
    stock: 12, 
    price: 79999, 
    category: 'Electric', 
    status: 'In Stock',
    image: 'https://placehold.co/100x60?text=Model+S'
  },
  { 
    id: 2, 
    name: 'BMW i8', 
    stock: 5, 
    price: 147500, 
    category: 'Hybrid', 
    status: 'In Stock',
    image: 'https://placehold.co/100x60?text=i8'
  },
  { 
    id: 3, 
    name: 'Mercedes EQS', 
    stock: 8, 
    price: 102310, 
    category: 'Electric', 
    status: 'In Stock',
    image: 'https://placehold.co/100x60?text=EQS'
  },
  { 
    id: 4, 
    name: 'Audi e-tron GT', 
    stock: 0, 
    price: 104900, 
    category: 'Electric', 
    status: 'Out of Stock',
    image: 'https://placehold.co/100x60?text=e-tron'
  },
  { 
    id: 5, 
    name: 'Porsche Taycan', 
    stock: 3, 
    price: 86700, 
    category: 'Electric', 
    status: 'Low Stock',
    image: 'https://placehold.co/100x60?text=Taycan'
  },
  { 
    id: 6, 
    name: 'Toyota Camry', 
    stock: 20, 
    price: 25945, 
    category: 'Sedan', 
    status: 'In Stock',
    image: 'https://placehold.co/100x60?text=Camry'
  },
  { 
    id: 7, 
    name: 'Ford Mustang', 
    stock: 7, 
    price: 27470, 
    category: 'Sports', 
    status: 'In Stock',
    image: 'https://placehold.co/100x60?text=Mustang'
  },
];

const Inventory = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInventory = inventoryData.filter(item => 
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
            <Button className="flex items-center gap-1">
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
                      <Button variant="ghost" size="sm">
                        <Edit size={16} />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500">
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
