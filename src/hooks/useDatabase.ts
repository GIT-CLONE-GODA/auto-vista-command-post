
import { useState, useEffect } from 'react';
import { db, Vehicle, Order, Customer } from '../services/database';

export const useDatabase = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const initDatabase = async () => {
      try {
        await db.init();
        await db.seedData();
        await loadAllData();
        setIsInitialized(true);
      } catch (error) {
        console.error('Failed to initialize database:', error);
      }
    };

    initDatabase();
  }, []);

  const loadAllData = async () => {
    try {
      const [vehiclesData, ordersData, customersData] = await Promise.all([
        db.getVehicles(),
        db.getOrders(),
        db.getCustomers()
      ]);
      setVehicles(vehiclesData);
      setOrders(ordersData);
      setCustomers(customersData);
    } catch (error) {
      console.error('Failed to load data:', error);
    }
  };

  // Vehicle operations
  const addVehicle = async (vehicle: Omit<Vehicle, 'id'>) => {
    try {
      await db.addVehicle(vehicle);
      await loadAllData();
    } catch (error) {
      console.error('Failed to add vehicle:', error);
      throw error;
    }
  };

  const updateVehicle = async (vehicle: Vehicle) => {
    try {
      await db.updateVehicle(vehicle);
      await loadAllData();
    } catch (error) {
      console.error('Failed to update vehicle:', error);
      throw error;
    }
  };

  const deleteVehicle = async (id: number) => {
    try {
      await db.deleteVehicle(id);
      await loadAllData();
    } catch (error) {
      console.error('Failed to delete vehicle:', error);
      throw error;
    }
  };

  // Order operations
  const addOrder = async (order: Omit<Order, 'id'>) => {
    try {
      await db.addOrder(order);
      await loadAllData();
    } catch (error) {
      console.error('Failed to add order:', error);
      throw error;
    }
  };

  const updateOrder = async (order: Order) => {
    try {
      await db.updateOrder(order);
      await loadAllData();
    } catch (error) {
      console.error('Failed to update order:', error);
      throw error;
    }
  };

  const deleteOrder = async (id: number) => {
    try {
      await db.deleteOrder(id);
      await loadAllData();
    } catch (error) {
      console.error('Failed to delete order:', error);
      throw error;
    }
  };

  // Customer operations
  const addCustomer = async (customer: Omit<Customer, 'id'>) => {
    try {
      await db.addCustomer(customer);
      await loadAllData();
    } catch (error) {
      console.error('Failed to add customer:', error);
      throw error;
    }
  };

  const updateCustomer = async (customer: Customer) => {
    try {
      await db.updateCustomer(customer);
      await loadAllData();
    } catch (error) {
      console.error('Failed to update customer:', error);
      throw error;
    }
  };

  const deleteCustomer = async (id: number) => {
    try {
      await db.deleteCustomer(id);
      await loadAllData();
    } catch (error) {
      console.error('Failed to delete customer:', error);
      throw error;
    }
  };

  return {
    isInitialized,
    vehicles,
    orders,
    customers,
    addVehicle,
    updateVehicle,
    deleteVehicle,
    addOrder,
    updateOrder,
    deleteOrder,
    addCustomer,
    updateCustomer,
    deleteCustomer,
    refreshData: loadAllData
  };
};
