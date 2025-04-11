
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import {
  User,
  Settings as SettingsIcon,
  Bell,
  Shield,
  CreditCard,
  Clock,
  Loader2,
  CheckCircle2,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

// Mock order history data
const mockOrderHistory = [
  {
    id: 'ORD-001',
    date: '2025-04-01',
    items: [{ name: 'Website Chatbot', price: 49 }],
    total: 53.9,
    status: 'Completed',
  },
  {
    id: 'ORD-002',
    date: '2025-03-15',
    items: [{ name: 'Training Update', price: 29 }],
    total: 31.9,
    status: 'Completed',
  },
];

const Settings = () => {
  const navigate = useNavigate();
  const { user, updateUserProfile, logout } = useAuth();
  
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    bio: '',
  });
  
  // Notification settings
  const [notifications, setNotifications] = useState({
    email: true,
    updates: true,
    marketing: false,
  });
  
  // Load user data
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        company: '',
        address: '',
        bio: '',
      });
    }
  }, [user]);
  
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <Card className="w-full max-w-md border-gray-700">
          <CardHeader>
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>
              Please login to access your settings
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-end gap-4">
            <Button variant="outline" onClick={() => navigate('/')}>
              Back to Home
            </Button>
            <Button onClick={() => navigate('/login')}>
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);
    
    try {
      await updateUserProfile({
        name: formData.name,
        phone: formData.phone,
      });
      
      toast.success('Profile updated successfully');
    } catch (error) {
      console.error('Update error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications({ ...notifications, [key]: value });
    toast.success(`Notification preference updated`);
  };
  
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-8">Account Settings</h1>
        
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-[600px] max-w-full">
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              <span>Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Security</span>
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              <span>Orders</span>
            </TabsTrigger>
          </TabsList>
          
          {/* Profile Tab */}
          <TabsContent value="profile">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="col-span-2 border-gray-700">
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your personal and business information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProfileUpdate}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <FormLabel>Full Name</FormLabel>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="bg-gray-800 border-gray-700"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <FormLabel>Email</FormLabel>
                        <Input
                          name="email"
                          value={formData.email}
                          disabled
                          placeholder="your@email.com"
                          className="bg-gray-800 border-gray-700 opacity-70"
                        />
                        <p className="text-xs text-gray-400">
                          Email cannot be changed
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <FormLabel>Phone Number</FormLabel>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your phone number"
                          className="bg-gray-800 border-gray-700"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <FormLabel>Company</FormLabel>
                        <Input
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                          className="bg-gray-800 border-gray-700"
                        />
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <FormLabel>Address</FormLabel>
                        <Input
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="Your business address"
                          className="bg-gray-800 border-gray-700"
                        />
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <FormLabel>Bio</FormLabel>
                        <Textarea
                          name="bio"
                          value={formData.bio}
                          onChange={handleInputChange}
                          placeholder="A brief description about you or your business"
                          className="bg-gray-800 border-gray-700 min-h-[100px]"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end mt-6">
                      <Button 
                        type="submit" 
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          'Save Changes'
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card className="border-gray-700">
                  <CardHeader>
                    <CardTitle>Account Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Member Since</span>
                        <span>April 2025</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Account Status</span>
                        <span className="flex items-center text-green-500">
                          <CheckCircle2 className="h-4 w-4 mr-1" /> Active
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-gray-700">
                  <CardHeader>
                    <CardTitle>Delete Account</CardTitle>
                    <CardDescription>
                      Permanently delete your account and all associated data
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="destructive" 
                      className="w-full"
                      onClick={() => {
                        toast.error("This feature is disabled in the demo");
                      }}
                    >
                      Delete My Account
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Notifications Tab */}
          <TabsContent value="notifications">
            <Card className="border-gray-700">
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Manage how you receive notifications and updates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Email Notifications</h3>
                    <p className="text-sm text-gray-400">
                      Receive notifications about your account via email
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.email} 
                    onCheckedChange={(checked) => handleNotificationChange('email', checked)} 
                  />
                </div>
                
                <Separator className="bg-gray-700" />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Product Updates</h3>
                    <p className="text-sm text-gray-400">
                      Receive notifications about new features and improvements
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.updates} 
                    onCheckedChange={(checked) => handleNotificationChange('updates', checked)} 
                  />
                </div>
                
                <Separator className="bg-gray-700" />
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Marketing Communications</h3>
                    <p className="text-sm text-gray-400">
                      Receive offers, promotions, and other marketing communications
                    </p>
                  </div>
                  <Switch 
                    checked={notifications.marketing} 
                    onCheckedChange={(checked) => handleNotificationChange('marketing', checked)} 
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Security Tab */}
          <TabsContent value="security">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-gray-700">
                <CardHeader>
                  <CardTitle>Change Password</CardTitle>
                  <CardDescription>
                    Update your password to maintain account security
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                      <FormLabel>Current Password</FormLabel>
                      <Input
                        type="password"
                        placeholder="Current password"
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <FormLabel>New Password</FormLabel>
                      <Input
                        type="password"
                        placeholder="New password"
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <FormLabel>Confirm New Password</FormLabel>
                      <Input
                        type="password"
                        placeholder="Confirm new password"
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      onClick={() => {
                        toast.success("Password updated successfully");
                      }}
                    >
                      Update Password
                    </Button>
                  </form>
                </CardContent>
              </Card>
              
              <Card className="border-gray-700">
                <CardHeader>
                  <CardTitle>Two-Factor Authentication</CardTitle>
                  <CardDescription>
                    Add an extra layer of security to your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400">
                    Two-factor authentication adds an additional layer of security to your
                    account by requiring more than just a password to log in.
                  </p>
                  
                  <Button 
                    variant="outline"
                    onClick={() => {
                      toast.info("This feature is coming soon");
                    }}
                  >
                    Enable 2FA
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card className="border-gray-700">
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>
                  View your past orders and subscriptions
                </CardDescription>
              </CardHeader>
              <CardContent>
                {mockOrderHistory.length > 0 ? (
                  <div className="space-y-4">
                    {mockOrderHistory.map((order) => (
                      <div key={order.id} className="bg-gray-800 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">Order #{order.id}</h3>
                          <span className="text-sm text-gray-400">{order.date}</span>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          {order.items.map((item, index) => (
                            <div key={index} className="flex justify-between">
                              <span>{item.name}</span>
                              <span>${item.price.toFixed(2)}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Separator className="bg-gray-700 mb-4" />
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm text-gray-400">Status:</span>
                            <span className="ml-2 text-green-500">{order.status}</span>
                          </div>
                          <div className="font-medium">
                            Total: ${order.total.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-400">No orders found</p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button variant="outline" onClick={() => navigate('/dashboard')}>
                  Browse Services
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
