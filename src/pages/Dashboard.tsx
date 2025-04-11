
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bot,
  Globe,
  Smartphone,
  Mail,
  Zap,
  MessageSquare,
  ArrowRight,
  Check,
  CheckCircle,
  Info,
  ShoppingCart,
  Headphones,
  User,
  Settings,
  LogOut,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { ServiceItem } from '@/contexts/CartContext';

// Service Pricing Plans
const pricingPlans = [
  {
    id: 'website-bot',
    name: 'Website Chatbot',
    description: 'Deploy an AI chatbot on your website',
    price: 49,
    type: 'subscription' as const,
    billingCycle: 'monthly' as const,
    features: [
      'Custom AI Chatbot',
      'Website Integration',
      'Basic Training (10 PDFs/URLs)',
      'Standard Support',
      'Basic Analytics',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For businesses that need multi-channel support',
    price: 99,
    type: 'subscription' as const,
    billingCycle: 'monthly' as const,
    features: [
      'Everything in Website Chatbot',
      'Email Integration',
      'Advanced Training (25 PDFs/URLs)',
      'Priority Support',
      'Advanced Analytics',
    ],
    recommended: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Complete solution with all integrations',
    price: 199,
    type: 'subscription' as const,
    billingCycle: 'monthly' as const,
    features: [
      'Everything in Professional',
      'WhatsApp Integration',
      'Mobile App Integration',
      'Unlimited Training',
      'Premium Support',
      'Custom Branding',
    ],
  },
];

// Add-on Services
const addOns = [
  {
    id: 'training-update',
    name: 'Training Update',
    description: 'Update your chatbot with new data',
    price: 29,
    type: 'one-time' as const,
  },
  {
    id: 'voice-ai',
    name: 'Voice AI',
    description: 'Add voice capabilities to your chatbot',
    price: 39,
    type: 'one-time' as const,
  },
  {
    id: 'custom-integration',
    name: 'Custom Integration',
    description: 'Connect your chatbot to a custom system',
    price: 149,
    type: 'one-time' as const,
  },
];

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { addItem } = useCart();
  const [activeTab, setActiveTab] = useState('pricing');

  const handleAddToCart = (service: ServiceItem) => {
    addItem(service);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Welcome{user?.name ? `, ${user.name}` : ""}!</h1>
            <p className="text-gray-400 mt-1">Explore our AI automation services</p>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/cart">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                <span>Cart</span>
              </Button>
            </Link>

            <Link to="/settings">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Button>
            </Link>
            
            <Link to="/support">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Headphones className="h-4 w-4" />
                <span>Support</span>
              </Button>
            </Link>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => logout()}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid grid-cols-2 w-[400px]">
            <TabsTrigger value="pricing">Services & Pricing</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
          </TabsList>

          {/* Pricing Tab Content */}
          <TabsContent value="pricing" className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Subscription Plans</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pricingPlans.map((plan) => (
                  <Card 
                    key={plan.id}
                    className={`border ${
                      plan.recommended 
                        ? 'border-brand-purple shadow-lg shadow-brand-purple/20' 
                        : 'border-gray-700'
                    }`}
                  >
                    {plan.recommended && (
                      <div className="bg-brand-purple text-white text-xs font-bold uppercase px-3 py-1 rounded-b-md absolute top-0 left-1/2 transform -translate-x-1/2">
                        Recommended
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle className="flex items-start justify-between">
                        <div>{plan.name}</div>
                        <div className="text-right">
                          <span className="text-2xl font-bold">${plan.price}</span>
                          <span className="text-gray-400 text-sm">/mo</span>
                        </div>
                      </CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        className={`w-full ${
                          plan.recommended 
                            ? 'bg-brand-purple hover:bg-brand-purple/90' 
                            : ''
                        }`} 
                        onClick={() => handleAddToCart(plan)}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Add-on Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {addOns.map((addon) => (
                  <Card key={addon.id} className="border border-gray-700">
                    <CardHeader>
                      <CardTitle className="flex items-start justify-between">
                        <div>{addon.name}</div>
                        <div className="text-right">
                          <span className="text-2xl font-bold">${addon.price}</span>
                        </div>
                      </CardTitle>
                      <CardDescription>{addon.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button 
                        variant="outline" 
                        className="w-full" 
                        onClick={() => handleAddToCart(addon)}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Features Tab Content */}
          <TabsContent value="features" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border border-gray-700">
                <CardHeader>
                  <Bot className="h-8 w-8 text-brand-blue mb-2" />
                  <CardTitle>Custom AI Chatbot</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Our AI chatbots are custom trained on your business data for accurate and relevant responses to customer inquiries.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-700">
                <CardHeader>
                  <Globe className="h-8 w-8 text-brand-purple mb-2" />
                  <CardTitle>Website Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Simple JavaScript snippet to embed your chatbot on any website, providing 24/7 customer support.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-700">
                <CardHeader>
                  <Smartphone className="h-8 w-8 text-brand-teal mb-2" />
                  <CardTitle>WhatsApp Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Connect your AI assistant to WhatsApp for seamless communication with customers on their preferred messaging platform.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-700">
                <CardHeader>
                  <Mail className="h-8 w-8 text-brand-blue mb-2" />
                  <CardTitle>Email Automation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Handle customer inquiries via email with AI-powered responses and follow-ups, saving time and resources.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-700">
                <CardHeader>
                  <Zap className="h-8 w-8 text-brand-purple mb-2" />
                  <CardTitle>Training Pipeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Upload PDFs, website links, and documents to train your AI on your business data for accurate responses.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-700">
                <CardHeader>
                  <MessageSquare className="h-8 w-8 text-brand-teal mb-2" />
                  <CardTitle>Advanced AI Models</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Leverage state-of-the-art language models like GPT-4, Claude, and Mixtral for intelligent, human-like conversations.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="border border-gray-700 bg-gray-800/50">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Info className="h-5 w-5 text-brand-blue mr-2" />
                  Need a Custom Solution?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Contact our team for a personalized solution tailored to your specific business requirements.
                </p>
              </CardContent>
              <CardFooter>
                <Link to="/support">
                  <Button variant="outline" className="flex items-center gap-2">
                    Contact Support <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
