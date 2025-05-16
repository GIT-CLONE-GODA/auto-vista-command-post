
import React from 'react';

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
  return (
    <div className="dashboard-card">
      <h2 className="text-lg font-semibold text-navy-800 mb-4">Popular Vehicles</h2>
      
      <div className="space-y-4">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="flex items-center p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="w-12 h-12 rounded-md bg-navy-100 flex items-center justify-center mr-4">
              <span className="text-navy-600 font-medium">{vehicle.name.substring(0, 2)}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium text-navy-800">{vehicle.name}</h3>
              <p className="text-xs text-navy-500">{vehicle.type}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-navy-800">{vehicle.price}</p>
              <div className="flex items-center justify-end mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-3 h-3 ${i < Math.floor(vehicle.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-navy-500 ml-1">{vehicle.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularVehicles;
