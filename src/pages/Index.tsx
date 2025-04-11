
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Bot, 
  BarChart, 
  Layers, 
  Zap, 
  MessageSquare, 
  Globe, 
  Smartphone, 
  Mail, 
  CheckCircle2,
  Award,
  Users,
  Building2,
  HeartHandshake,
  Store,
  HomeIcon,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const Index = () => {
  const [visibleSection, setVisibleSection] = useState('features');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-brand-dark py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-brand-purple/10 to-brand-teal/10"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-purple to-brand-teal animate-gradient-flow"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Intelligent AI Chatbots</span> for Your Business
              </h1>
              <p className="text-xl text-gray-300">
                Abhyum transforms your business data into intelligent AI assistants, delivering 24/7 support and boosting customer engagement.
              </p>
              <div className="flex gap-4 pt-4">
                <Link to="/dashboard">
                  <Button className="bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 text-white py-6 px-8 rounded-lg text-lg">
                    Explore Solutions
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" className="text-white border-white/20 py-6 px-8 rounded-lg text-lg">
                    Get Started
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <CheckCircle2 className="mr-1 h-4 w-4 text-brand-teal" />
                  No coding required
                </span>
                <span className="flex items-center">
                  <CheckCircle2 className="mr-1 h-4 w-4 text-brand-teal" />
                  Fast setup
                </span>
                <span className="flex items-center">
                  <CheckCircle2 className="mr-1 h-4 w-4 text-brand-teal" />
                  Custom trained
                </span>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-gradient-to-tr from-brand-blue/20 via-brand-purple/20 to-brand-teal/20 rounded-2xl p-1 shadow-xl">
                  <div className="bg-brand-dark rounded-xl p-4">
                    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-brand-purple rounded-full p-2 mt-1">
                          <Bot className="h-5 w-5 text-white" />
                        </div>
                        <div className="bg-gray-700/50 rounded-lg p-3 text-sm text-gray-200">
                          Hello! I'm your Abhyum AI assistant. How can I help you today?
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 mb-6 justify-end">
                        <div className="bg-gray-700/50 rounded-lg p-3 text-sm text-gray-200">
                          Can you tell me about your custom chatbot solutions?
                        </div>
                        <div className="bg-brand-blue rounded-full p-2 mt-1">
                          <Users className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="bg-brand-purple rounded-full p-2 mt-1">
                          <Bot className="h-5 w-5 text-white" />
                        </div>
                        <div className="bg-gray-700/50 rounded-lg p-3 text-sm text-gray-200">
                          Our custom chatbots are trained on your business data, including PDFs, websites, and product catalogs. They can answer customer questions, capture leads, and schedule appointments - all available 24/7 across your website, WhatsApp, and other channels.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-brand-teal rounded-full p-3 shadow-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Tabs */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Everything You Need</span> for AI Automation
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Abhyum provides end-to-end solutions for businesses looking to leverage the power of AI without the technical complexity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <button
              onClick={() => setVisibleSection('features')}
              className={`p-4 rounded-lg transition-all ${
                visibleSection === 'features'
                  ? 'bg-brand-blue/10 border border-brand-blue/20'
                  : 'bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800'
              }`}
            >
              <div className="flex flex-col items-center gap-3">
                <Bot className={`h-6 w-6 ${visibleSection === 'features' ? 'text-brand-blue' : 'text-gray-400'}`} />
                <h3 className={`font-medium ${visibleSection === 'features' ? 'text-white' : 'text-gray-300'}`}>
                  Core Features
                </h3>
              </div>
            </button>
            
            <button
              onClick={() => setVisibleSection('integrations')}
              className={`p-4 rounded-lg transition-all ${
                visibleSection === 'integrations'
                  ? 'bg-brand-purple/10 border border-brand-purple/20'
                  : 'bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800'
              }`}
            >
              <div className="flex flex-col items-center gap-3">
                <Layers className={`h-6 w-6 ${visibleSection === 'integrations' ? 'text-brand-purple' : 'text-gray-400'}`} />
                <h3 className={`font-medium ${visibleSection === 'integrations' ? 'text-white' : 'text-gray-300'}`}>
                  Integrations
                </h3>
              </div>
            </button>
            
            <button
              onClick={() => setVisibleSection('industries')}
              className={`p-4 rounded-lg transition-all ${
                visibleSection === 'industries'
                  ? 'bg-brand-teal/10 border border-brand-teal/20'
                  : 'bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800'
              }`}
            >
              <div className="flex flex-col items-center gap-3">
                <BarChart className={`h-6 w-6 ${visibleSection === 'industries' ? 'text-brand-teal' : 'text-gray-400'}`} />
                <h3 className={`font-medium ${visibleSection === 'industries' ? 'text-white' : 'text-gray-300'}`}>
                  Industries
                </h3>
              </div>
            </button>
          </div>
          
          {visibleSection === 'features' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <MessageSquare className="h-10 w-10 text-brand-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">Custom AI Chatbot</h3>
                <p className="text-gray-300">
                  Trained on your business data to provide accurate, brand-aligned responses to customer questions.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <Zap className="h-10 w-10 text-brand-purple mb-4" />
                <h3 className="text-xl font-semibold mb-2">Fast Deployment</h3>
                <p className="text-gray-300">
                  Get up and running in days, not months. Simple setup process with minimal technical requirements.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <Layers className="h-10 w-10 text-brand-teal mb-4" />
                <h3 className="text-xl font-semibold mb-2">Training Pipeline</h3>
                <p className="text-gray-300">
                  Automatically process and vectorize your business documents, websites, and product information.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <Globe className="h-10 w-10 text-brand-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">Multi-Channel Support</h3>
                <p className="text-gray-300">
                  Deploy your AI assistant across website, WhatsApp, mobile apps, and email channels.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <BarChart className="h-10 w-10 text-brand-purple mb-4" />
                <h3 className="text-xl font-semibold mb-2">Analytics & Insights</h3>
                <p className="text-gray-300">
                  Track performance, customer satisfaction, and identify opportunities for improvements.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <Bot className="h-10 w-10 text-brand-teal mb-4" />
                <h3 className="text-xl font-semibold mb-2">Advanced AI Models</h3>
                <p className="text-gray-300">
                  Leverage state-of-the-art language models like GPT-4, Claude, and Mixtral for intelligent responses.
                </p>
              </div>
            </div>
          )}
          
          {visibleSection === 'integrations' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <Globe className="h-10 w-10 text-brand-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">Website Integration</h3>
                <p className="text-gray-300">
                  Simple JavaScript code snippet to embed your chatbot on any website or platform.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <Smartphone className="h-10 w-10 text-brand-purple mb-4" />
                <h3 className="text-xl font-semibold mb-2">WhatsApp Business</h3>
                <p className="text-gray-300">
                  Connect your AI assistant to WhatsApp via Twilio or Vapi.ai for messaging support.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <Mail className="h-10 w-10 text-brand-teal mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email Automation</h3>
                <p className="text-gray-300">
                  Handle customer inquiries via email with AI-powered responses and follow-ups.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <Smartphone className="h-10 w-10 text-brand-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
                <p className="text-gray-300">
                  Integrate with Android and iOS apps using our SDK or iframe solutions.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <MessageSquare className="h-10 w-10 text-brand-purple mb-4" />
                <h3 className="text-xl font-semibold mb-2">CRM Systems</h3>
                <p className="text-gray-300">
                  Connect with popular CRM systems to log conversations and manage customer data.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <Zap className="h-10 w-10 text-brand-teal mb-4" />
                <h3 className="text-xl font-semibold mb-2">API Access</h3>
                <p className="text-gray-300">
                  Custom API endpoints for seamless integration with your existing systems.
                </p>
              </div>
            </div>
          )}
          
          {visibleSection === 'industries' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <Store className="h-10 w-10 text-brand-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">E-Commerce</h3>
                <p className="text-gray-300">
                  Product recommendations, order status inquiries, and personalized shopping assistance.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <Building2 className="h-10 w-10 text-brand-purple mb-4" />
                <h3 className="text-xl font-semibold mb-2">Real Estate</h3>
                <p className="text-gray-300">
                  Property information, scheduling viewings, and answering common buyer/seller questions.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <HeartHandshake className="h-10 w-10 text-brand-teal mb-4" />
                <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
                <p className="text-gray-300">
                  Appointment scheduling, basic symptom assessment, and clinic information.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <Users className="h-10 w-10 text-brand-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-300">
                  Course information, enrollment assistance, and student support services.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <HomeIcon className="h-10 w-10 text-brand-purple mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local Businesses</h3>
                <p className="text-gray-300">
                  Hours, directions, services offered, and frequently asked questions.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <Award className="h-10 w-10 text-brand-teal mb-4" />
                <h3 className="text-xl font-semibold mb-2">Professional Services</h3>
                <p className="text-gray-300">
                  Client intake, service explanations, and preliminary consultations.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-dark to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with <span className="gradient-text">AI Automation?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses already using Abhyum to deliver exceptional customer experiences and drive growth.
            </p>
            <Link to="/dashboard">
              <Button className="bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 text-white py-6 px-8 rounded-lg text-lg">
                <span>Get Started Today</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
