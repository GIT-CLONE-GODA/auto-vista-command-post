import React, { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useTheme } from '@/context/ThemeContext';
import { toast } from '@/hooks/use-toast';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  
  // Form state
  const [storeInfo, setStoreInfo] = useState({
    name: "Auto Excellence",
    email: "contact@autoexcellence.com",
    phone: "(555) 123-4567",
    address: "123 Auto Boulevard, Car City, CC 12345"
  });
  
  const [regionalSettings, setRegionalSettings] = useState({
    timezone: "America/New_York",
    currency: "USD",
    dateFormat: "MM/DD/YYYY"
  });
  
  // Handle form changes
  const handleStoreInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoreInfo({
      ...storeInfo,
      [e.target.id]: e.target.value
    });
  };
  
  const handleRegionalSettingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegionalSettings({
      ...regionalSettings,
      [e.target.id]: e.target.value
    });
  };
  
  // Handle form submissions
  const handleSaveStoreInfo = () => {
    toast({
      title: "Store information saved",
      description: "Your store information has been updated successfully."
    });
  };
  
  const handleSaveRegionalSettings = () => {
    toast({
      title: "Regional settings saved",
      description: "Your regional settings have been updated successfully."
    });
  };
  
  const handleSaveNotifications = () => {
    toast({
      title: "Notification preferences saved",
      description: "Your notification preferences have been updated successfully."
    });
  };
  
  const handleUpdatePassword = () => {
    toast({
      title: "Password updated",
      description: "Your password has been updated successfully."
    });
  };
  
  const handleSignOutDevices = () => {
    toast({
      title: "Devices signed out",
      description: "You've been signed out from all other devices."
    });
  };
  
  const handleSaveAppearance = () => {
    toast({
      title: "Appearance settings saved",
      description: "Your appearance settings have been updated successfully."
    });
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <DashboardHeader />
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-6">System Settings</h2>
        
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Store Information</CardTitle>
                  <CardDescription>
                    Update your store details and contact information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Store Name</Label>
                    <Input 
                      id="name" 
                      value={storeInfo.name}
                      onChange={handleStoreInfoChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Contact Email</Label>
                    <Input 
                      id="email" 
                      value={storeInfo.email}
                      onChange={handleStoreInfoChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Contact Phone</Label>
                    <Input 
                      id="phone" 
                      value={storeInfo.phone}
                      onChange={handleStoreInfoChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Store Address</Label>
                    <Input 
                      id="address" 
                      value={storeInfo.address}
                      onChange={handleStoreInfoChange}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button onClick={handleSaveStoreInfo}>Save Changes</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Regional Settings</CardTitle>
                  <CardDescription>
                    Configure timezone and currency settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <select 
                      id="timezone" 
                      className="w-full p-2 border border-input rounded-md bg-background"
                      value={regionalSettings.timezone}
                      onChange={handleRegionalSettingChange}
                    >
                      <option value="America/New_York">Eastern Time (US & Canada)</option>
                      <option value="America/Chicago">Central Time (US & Canada)</option>
                      <option value="America/Denver">Mountain Time (US & Canada)</option>
                      <option value="America/Los_Angeles">Pacific Time (US & Canada)</option>
                      <option value="Europe/London">London</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <select 
                      id="currency" 
                      className="w-full p-2 border border-input rounded-md bg-background"
                      value={regionalSettings.currency}
                      onChange={handleRegionalSettingChange}
                    >
                      <option value="USD">USD - US Dollar</option>
                      <option value="EUR">EUR - Euro</option>
                      <option value="GBP">GBP - British Pound</option>
                      <option value="CAD">CAD - Canadian Dollar</option>
                      <option value="AUD">AUD - Australian Dollar</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateFormat">Date Format</Label>
                    <select 
                      id="dateFormat" 
                      className="w-full p-2 border border-input rounded-md bg-background"
                      value={regionalSettings.dateFormat}
                      onChange={handleRegionalSettingChange}
                    >
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button onClick={handleSaveRegionalSettings}>Save Changes</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Manage how you receive notifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Email Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">New Orders</p>
                          <p className="text-sm text-muted-foreground">Receive notifications for new customer orders</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Inventory Updates</p>
                          <p className="text-sm text-muted-foreground">Get alerts when products are low in stock</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Customer Accounts</p>
                          <p className="text-sm text-muted-foreground">Notifications about new customer registrations</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">System Notifications</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Security Alerts</p>
                          <p className="text-sm text-muted-foreground">Important security-related notifications</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">System Updates</p>
                          <p className="text-sm text-muted-foreground">Notifications about system updates and maintenance</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Marketing Reports</p>
                          <p className="text-sm text-muted-foreground">Weekly marketing performance reports</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSaveNotifications}>Save Preferences</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage your account security preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Change Password</h3>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="newPassword">New Password</Label>
                      <Input id="newPassword" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm New Password</Label>
                      <Input id="confirmPassword" type="password" />
                    </div>
                  </div>
                  <Button onClick={handleUpdatePassword}>Update Password</Button>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium">Two-Factor Authentication</h3>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Enable Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Switch />
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="font-medium">Session Management</h3>
                  <div>
                    <p className="font-medium">Active Sessions</p>
                    <p className="text-sm text-muted-foreground mb-2">You're currently signed in on these devices</p>
                    
                    <div className="space-y-3">
                      <div className="p-3 border border-border rounded-md">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">Current Browser</p>
                            <p className="text-sm text-muted-foreground">Chrome on Windows • IP: 192.168.1.1</p>
                          </div>
                          <Badge>Current</Badge>
                        </div>
                      </div>
                      
                      <Button variant="outline" onClick={handleSignOutDevices}>Sign Out of All Other Devices</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>
                  Customize the look and feel of your dashboard
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-medium mb-3">Theme Preference</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        id="theme-dark" 
                        name="theme" 
                        value="dark" 
                        className="h-4 w-4 border-gray-300 text-primary focus:ring-primary" 
                        checked={theme === "dark"}
                        onChange={() => theme !== "dark" && toggleTheme()}
                      />
                      <Label htmlFor="theme-dark">Dark Mode</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        id="theme-light" 
                        name="theme" 
                        value="light" 
                        className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                        checked={theme === "light"}
                        onChange={() => theme !== "light" && toggleTheme()}
                      />
                      <Label htmlFor="theme-light">Light Mode</Label>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium mb-3">Sidebar Position</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        id="sidebar-left" 
                        name="sidebar" 
                        value="left" 
                        className="h-4 w-4 border-gray-300 text-primary focus:ring-primary" 
                        defaultChecked 
                      />
                      <Label htmlFor="sidebar-left">Left (Default)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="radio" 
                        id="sidebar-right" 
                        name="sidebar" 
                        value="right" 
                        className="h-4 w-4 border-gray-300 text-primary focus:ring-primary" 
                      />
                      <Label htmlFor="sidebar-right">Right</Label>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Compact Mode</p>
                      <p className="text-sm text-muted-foreground">Reduce the size of UI elements for a denser layout</p>
                    </div>
                    <Switch />
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium">Animations</p>
                      <p className="text-sm text-muted-foreground">Enable or disable UI animations</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSaveAppearance}>Save Appearance Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
