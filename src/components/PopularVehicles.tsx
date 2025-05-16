
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const vehicles = [
  {
    id: 1,
    name: 'Tesla Model Y',
    type: 'Electric SUV',
    views: 2458,
    rating: 4.9,
    price: '$58,990',
  },
  {
    id: 2,
    name: 'BMW X5',
    type: 'Luxury SUV',
    views: 2245,
    rating: 4.7,
    price: '$62,500',
  },
  {
    id: 3,
    name: 'Ford Mustang',
    type: 'Sports Car',
    views: 2145,
    rating: 4.8,
    price: '$47,800',
  },
];

const PopularVehicles = () => {
  const navigate = useNavigate();
  
  const handleViewAll = () => {
    navigate('/inventory');
  };
  
  return (
    <div className="dashboard-card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Popular Vehicles</h2>
        <Button 
          variant="ghost"
          onClick={handleViewAll}
          className="text-sm text-primary flex items-center"
        >
          View All <ChevronRight size={16} />
        </Button>
      </div>
      
      <div className="space-y-4">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="flex items-center p-3 rounded-lg border border-border hover:bg-accent/30 transition-colors">
            <div className="w-12 h-12 rounded-md bg-accent flex items-center justify-center mr-4">
              <span className="text-accent-foreground font-medium">{vehicle.name.substring(0, 2)}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium">{vehicle.name}</h3>
              <p className="text-xs text-muted-foreground">{vehicle.type}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">{vehicle.price}</p>
              <div className="flex items-center justify-end mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-3 h-3 ${i < Math.floor(vehicle.rating) ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground ml-1">{vehicle.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularVehicles;
