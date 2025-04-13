
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bot,
  Globe,
  Smartphone,
  Zap,
  MessageSquare,
  ArrowRight,
  Check,
  CheckCircle,
  Info,
  Send,
  User,
  Settings,
  LogOut,
  Headphones,
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
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

// Service Options
const serviceOptions = [
  {
    id: 'website-bot',
    name: 'Website Chatbot',
    description: 'Deploy an AI chatbot on your website',
  },
  {
    id: 'whatsapp-integration',
    name: 'WhatsApp Integration',
    description: 'Connect your AI assistant to WhatsApp for seamless communication',
  },
  {
    id: 'mobile-app-integration',
    name: 'Mobile App Integration',
    description: 'Integrate your chatbot with Android and iOS applications',
  },
  {
    id: 'training-update',
    name: 'Training Update',
    description: 'Update your chatbot with new data',
  },
  {
    id: 'voice-ai',
    name: 'Voice AI',
    description: 'Add voice capabilities to your chatbot',
  },
  {
    id: 'custom-integration',
    name: 'Custom Integration',
    description: 'Connect your chatbot to a custom system',
  },
];

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('services');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(current => 
      current.includes(serviceId)
        ? current.filter(id => id !== serviceId)
        : [...current, serviceId]
    );
  };

  const handleSubmitRequest = () => {
    if (selectedServices.length === 0) {
      toast.error('Please select at least one service');
      return;
    }

    if (!userEmail) {
      toast.error('Please enter your email');
      return;
    }

    // In a real app, you would send this data to an API or email service
    // For now, we'll just show a success message
    setSending(true);
    
    setTimeout(() => {
      setSending(false);
      toast.success('Your service request has been sent!');
      // Reset form
      setSelectedServices([]);
      setUserMessage('');
    }, 1500);
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
            <TabsTrigger value="services">Our Services</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
          </TabsList>

          {/* Services Tab Content */}
          <TabsContent value="services" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="border border-gray-700">
                  <CardHeader>
                    <CardTitle>Our Services</CardTitle>
                    <CardDescription>
                      Select the services you're interested in and we'll get back to you with a customized quote
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {serviceOptions.map(service => (
                        <div 
                          key={service.id}
                          className="flex items-start space-x-3 bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                        >
                          <Checkbox 
                            id={service.id} 
                            checked={selectedServices.includes(service.id)}
                            onCheckedChange={() => handleServiceToggle(service.id)}
                          />
                          <div>
                            <label 
                              htmlFor={service.id}
                              className="text-sm font-medium cursor-pointer block"
                            >
                              {service.name}
                            </label>
                            <p className="text-xs text-gray-400 mt-1">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="border border-gray-700 sticky top-24">
                  <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                    <CardDescription>
                      Send us your requirements
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Your Name</label>
                      <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full p-2 rounded-md border border-gray-700 bg-gray-800 text-white"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Your Email</label>
                      <input
                        type="email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="w-full p-2 rounded-md border border-gray-700 bg-gray-800 text-white"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message (Optional)</label>
                      <textarea
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                        className="w-full p-2 rounded-md border border-gray-700 bg-gray-800 text-white min-h-[100px]"
                        placeholder="Tell us more about your requirements..."
                      />
                    </div>

                    {selectedServices.length > 0 && (
                      <div className="bg-gray-800 p-3 rounded-lg">
                        <p className="text-sm font-medium mb-2">Selected Services:</p>
                        <ul className="space-y-1">
                          {selectedServices.map(id => (
                            <li key={id} className="text-xs text-gray-300 flex items-center">
                              <CheckCircle className="h-3 w-3 text-brand-teal mr-2" />
                              {serviceOptions.find(s => s.id === id)?.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className="w-full bg-brand-blue hover:bg-brand-blue/90"
                      onClick={handleSubmitRequest}
                      disabled={sending}
                    >
                      {sending ? (
                        <>Processing...</>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Request
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
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

              <Card className="border border-gray-700">
                <CardHeader>
                  <Smartphone className="h-8 w-8 text-brand-blue mb-2" />
                  <CardTitle>Mobile Apps</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Integrate with Android and iOS apps using our SDK or iframe solutions.
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
