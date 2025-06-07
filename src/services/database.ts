
interface Vehicle {
  id?: number;
  name: string;
  stock: number;
  price: number;
  category: string;
  status: string;
  image: string;
}

interface Order {
  id?: number;
  orderId: string;
  customer: string;
  vehicle: string;
  date: string;
  total: number;
  status: string;
}

interface Customer {
  id?: number;
  name: string;
  email: string;
  phone: string;
  orders: number;
  spent: number;
  status: string;
  lastPurchase: string | null;
}

class DatabaseService {
  private db: IDBDatabase | null = null;
  private readonly dbName = 'CarDealershipDB';
  private readonly dbVersion = 1;

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.dbVersion);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // Create vehicles store
        if (!db.objectStoreNames.contains('vehicles')) {
          const vehicleStore = db.createObjectStore('vehicles', { keyPath: 'id', autoIncrement: true });
          vehicleStore.createIndex('name', 'name', { unique: false });
          vehicleStore.createIndex('category', 'category', { unique: false });
        }

        // Create orders store
        if (!db.objectStoreNames.contains('orders')) {
          const orderStore = db.createObjectStore('orders', { keyPath: 'id', autoIncrement: true });
          orderStore.createIndex('orderId', 'orderId', { unique: true });
          orderStore.createIndex('customer', 'customer', { unique: false });
        }

        // Create customers store
        if (!db.objectStoreNames.contains('customers')) {
          const customerStore = db.createObjectStore('customers', { keyPath: 'id', autoIncrement: true });
          customerStore.createIndex('email', 'email', { unique: true });
          customerStore.createIndex('name', 'name', { unique: false });
        }
      };
    });
  }

  // Vehicle operations
  async addVehicle(vehicle: Omit<Vehicle, 'id'>): Promise<number> {
    const transaction = this.db!.transaction(['vehicles'], 'readwrite');
    const store = transaction.objectStore('vehicles');
    const request = store.add(vehicle);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result as number);
      request.onerror = () => reject(request.error);
    });
  }

  async getVehicles(): Promise<Vehicle[]> {
    const transaction = this.db!.transaction(['vehicles'], 'readonly');
    const store = transaction.objectStore('vehicles');
    const request = store.getAll();
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async updateVehicle(vehicle: Vehicle): Promise<void> {
    const transaction = this.db!.transaction(['vehicles'], 'readwrite');
    const store = transaction.objectStore('vehicles');
    const request = store.put(vehicle);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async deleteVehicle(id: number): Promise<void> {
    const transaction = this.db!.transaction(['vehicles'], 'readwrite');
    const store = transaction.objectStore('vehicles');
    const request = store.delete(id);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  // Order operations
  async addOrder(order: Omit<Order, 'id'>): Promise<number> {
    const transaction = this.db!.transaction(['orders'], 'readwrite');
    const store = transaction.objectStore('orders');
    const request = store.add(order);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result as number);
      request.onerror = () => reject(request.error);
    });
  }

  async getOrders(): Promise<Order[]> {
    const transaction = this.db!.transaction(['orders'], 'readonly');
    const store = transaction.objectStore('orders');
    const request = store.getAll();
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async updateOrder(order: Order): Promise<void> {
    const transaction = this.db!.transaction(['orders'], 'readwrite');
    const store = transaction.objectStore('orders');
    const request = store.put(order);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async deleteOrder(id: number): Promise<void> {
    const transaction = this.db!.transaction(['orders'], 'readwrite');
    const store = transaction.objectStore('orders');
    const request = store.delete(id);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  // Customer operations
  async addCustomer(customer: Omit<Customer, 'id'>): Promise<number> {
    const transaction = this.db!.transaction(['customers'], 'readwrite');
    const store = transaction.objectStore('customers');
    const request = store.add(customer);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result as number);
      request.onerror = () => reject(request.error);
    });
  }

  async getCustomers(): Promise<Customer[]> {
    const transaction = this.db!.transaction(['customers'], 'readonly');
    const store = transaction.objectStore('customers');
    const request = store.getAll();
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async updateCustomer(customer: Customer): Promise<void> {
    const transaction = this.db!.transaction(['customers'], 'readwrite');
    const store = transaction.objectStore('customers');
    const request = store.put(customer);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async deleteCustomer(id: number): Promise<void> {
    const transaction = this.db!.transaction(['customers'], 'readwrite');
    const store = transaction.objectStore('customers');
    const request = store.delete(id);
    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  // Seed data
  async seedData(): Promise<void> {
    const vehicles: Omit<Vehicle, 'id'>[] = [
      { name: 'Tesla Model S', stock: 12, price: 79999, category: 'Electric', status: 'In Stock', image: 'https://placehold.co/100x60?text=Model+S' },
      { name: 'BMW i8', stock: 5, price: 147500, category: 'Hybrid', status: 'In Stock', image: 'https://placehold.co/100x60?text=i8' },
      { name: 'Mercedes EQS', stock: 8, price: 102310, category: 'Electric', status: 'In Stock', image: 'https://placehold.co/100x60?text=EQS' },
      { name: 'Audi e-tron GT', stock: 0, price: 104900, category: 'Electric', status: 'Out of Stock', image: 'https://placehold.co/100x60?text=e-tron' },
      { name: 'Porsche Taycan', stock: 3, price: 86700, category: 'Electric', status: 'Low Stock', image: 'https://placehold.co/100x60?text=Taycan' },
      { name: 'Toyota Camry', stock: 20, price: 25945, category: 'Sedan', status: 'In Stock', image: 'https://placehold.co/100x60?text=Camry' },
      { name: 'Ford Mustang', stock: 7, price: 27470, category: 'Sports', status: 'In Stock', image: 'https://placehold.co/100x60?text=Mustang' },
    ];

    const orders: Omit<Order, 'id'>[] = [
      { orderId: '#ORD-8924', customer: 'John Doe', vehicle: 'Tesla Model S', date: '2025-04-18', total: 79999, status: 'Delivered' },
      { orderId: '#ORD-8923', customer: 'Jane Smith', vehicle: 'BMW i8', date: '2025-04-17', total: 147500, status: 'Processing' },
      { orderId: '#ORD-8922', customer: 'Robert Johnson', vehicle: 'Mercedes EQS', date: '2025-04-16', total: 102310, status: 'Delivered' },
      { orderId: '#ORD-8921', customer: 'Emily Davis', vehicle: 'Audi e-tron GT', date: '2025-04-15', total: 104900, status: 'Pending' },
      { orderId: '#ORD-8920', customer: 'Michael Brown', vehicle: 'Porsche Taycan', date: '2025-04-14', total: 86700, status: 'Cancelled' },
      { orderId: '#ORD-8919', customer: 'Sarah Wilson', vehicle: 'Toyota Camry', date: '2025-04-13', total: 25945, status: 'Delivered' },
      { orderId: '#ORD-8918', customer: 'David Martinez', vehicle: 'Ford Mustang', date: '2025-04-12', total: 27470, status: 'Processing' },
    ];

    const customers: Omit<Customer, 'id'>[] = [
      { name: 'John Doe', email: 'john.doe@example.com', phone: '(555) 123-4567', orders: 3, spent: 108450, status: 'Active', lastPurchase: '2025-04-10' },
      { name: 'Jane Smith', email: 'jane.smith@example.com', phone: '(555) 987-6543', orders: 1, spent: 147500, status: 'Active', lastPurchase: '2025-04-17' },
      { name: 'Robert Johnson', email: 'robert.j@example.com', phone: '(555) 555-5555', orders: 2, spent: 128255, status: 'Active', lastPurchase: '2025-04-02' },
      { name: 'Emily Davis', email: 'emily.d@example.com', phone: '(555) 222-3333', orders: 1, spent: 104900, status: 'Inactive', lastPurchase: '2025-03-15' },
      { name: 'Michael Brown', email: 'michael.b@example.com', phone: '(555) 444-5555', orders: 0, spent: 0, status: 'Inactive', lastPurchase: null },
      { name: 'Sarah Wilson', email: 'sarah.w@example.com', phone: '(555) 777-8888', orders: 1, spent: 25945, status: 'Active', lastPurchase: '2025-04-13' },
      { name: 'David Martinez', email: 'david.m@example.com', phone: '(555) 666-7777', orders: 2, spent: 54940, status: 'Active', lastPurchase: '2025-03-25' }
    ];

    // Check if data already exists
    const existingVehicles = await this.getVehicles();
    if (existingVehicles.length === 0) {
      for (const vehicle of vehicles) {
        await this.addVehicle(vehicle);
      }
    }

    const existingOrders = await this.getOrders();
    if (existingOrders.length === 0) {
      for (const order of orders) {
        await this.addOrder(order);
      }
    }

    const existingCustomers = await this.getCustomers();
    if (existingCustomers.length === 0) {
      for (const customer of customers) {
        await this.addCustomer(customer);
      }
    }
  }
}

export const db = new DatabaseService();
export type { Vehicle, Order, Customer };
