
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import {
  Bot,
  User,
  Send,
  Clock,
  ChevronRight,
  Mail,
  MessageCircle,
  Phone,
  Headphones,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

// FAQ data
const faqs = [
  {
    question: "How does the AI chatbot service work?",
    answer: "Our AI chatbot service works by using your uploaded business data to train a custom AI model. The chatbot uses this knowledge to answer customer inquiries accurately. The setup process involves uploading your content (PDFs, website links, etc.), training the AI, and deploying it to your preferred channels (website, WhatsApp, email)."
  },
  {
    question: "What kind of data can I use to train my chatbot?",
    answer: "You can train your chatbot using various data sources including PDF documents, website content, product catalogs, FAQs, support documentation, and more. The more relevant content you provide, the better your chatbot will perform in answering customer queries."
  },
  {
    question: "How long does it take to set up a custom chatbot?",
    answer: "The setup time varies depending on the complexity and amount of training data. Typically, a basic chatbot can be deployed within 2-3 business days after receiving all necessary information. More complex implementations may take 5-7 business days."
  },
  {
    question: "Can I update my chatbot's knowledge after deployment?",
    answer: "Yes, you can update your chatbot's knowledge at any time. We offer training updates as an add-on service, allowing you to keep your AI assistant up-to-date with your latest information, products, or services."
  },
  {
    question: "How secure is my business data?",
    answer: "We take data security very seriously. Your business data is encrypted during transmission and storage. We comply with industry-standard security practices and never share your data with third parties. Your data is only used to train your specific chatbot."
  }
];

// Initial bot messages
const initialMessages = [
  {
    sender: 'bot',
    message: "Hello! I'm your Abhyum AI Support Assistant. How can I help you today?",
    timestamp: new Date()
  },
  {
    sender: 'bot',
    message: "You can ask me about our services, pricing, or how to get started with Abhyum AI chatbots.",
    timestamp: new Date()
  }
];

// Bot responses based on keywords
const botResponses = [
  {
    keywords: ['pricing', 'cost', 'price', 'subscription', 'package'],
    response: "We offer three main subscription plans: Website Chatbot ($49/month), Professional ($99/month), and Enterprise ($199/month). Each plan includes different features and integration options. You can view detailed pricing on our dashboard page."
  },
  {
    keywords: ['setup', 'install', 'integration', 'implement', 'deploy'],
    response: "Setting up your Abhyum chatbot is easy! After subscribing, you'll upload your business data, our system will train the AI, and then we'll help you deploy it to your chosen channels (website, WhatsApp, email). The typical setup takes 2-3 business days."
  },
  {
    keywords: ['train', 'training', 'data', 'learn', 'knowledge'],
    response: "You can train your chatbot using PDFs, website content, FAQs, product catalogs, and more. The more quality content you provide, the better your chatbot will perform. We also offer regular training updates to keep your bot's knowledge current."
  },
  {
    keywords: ['whatsapp', 'chat', 'messaging', 'sms', 'text'],
    response: "Yes, our Professional and Enterprise plans include WhatsApp integration through Twilio or Vapi.ai. This allows your customers to interact with your AI chatbot directly through WhatsApp messaging."
  },
  {
    keywords: ['security', 'privacy', 'data protection', 'secure', 'safe'],
    response: "We take security very seriously. All your data is encrypted in transit and at rest. We follow industry best practices for data protection and never share your business information with third parties."
  },
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'start'],
    response: "Hello! How can I help you today with Abhyum's AI chatbot services? Feel free to ask about our pricing, features, setup process, or anything else!"
  }
];

const Support = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  
  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    subject: '',
    message: ''
  });
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage = {
      sender: 'user',
      message: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Simulate bot thinking
    setTimeout(() => {
      // Generate bot response based on keywords
      let botResponse = "I'm not sure how to help with that specific query. Could you try asking in a different way? Or you can reach out to our human support team for more assistance.";
      
      // Check for matching keywords
      for (const response of botResponses) {
        if (response.keywords.some(keyword => 
          input.toLowerCase().includes(keyword.toLowerCase())
        )) {
          botResponse = response.response;
          break;
        }
      }
      
      const botReply = {
        sender: 'bot',
        message: botResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botReply]);
    }, 1000);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };
  
  const handleContactFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!contactForm.name || !contactForm.email || !contactForm.subject || !contactForm.message) {
      toast.error('Please fill in all fields');
      return;
    }
    
    // Simulate form submission
    toast.success('Your message has been sent! We will get back to you soon.');
    setContactForm({
      name: user?.name || '',
      email: user?.email || '',
      subject: '',
      message: ''
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Customer Support</h1>
        <p className="text-gray-400 mb-8">Get help with your Abhyum AI services</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Bot Section */}
          <div className="lg:col-span-2">
            <Card className="border-gray-700">
              <CardHeader className="border-b border-gray-700">
                <div className="flex items-center">
                  <div className="bg-brand-purple/20 p-2 rounded-full mr-3">
                    <Bot className="h-6 w-6 text-brand-purple" />
                  </div>
                  <div>
                    <CardTitle>Abhyum Support Bot</CardTitle>
                    <CardDescription>Get instant answers to your questions</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="h-[400px] overflow-y-auto p-4">
                  {messages.map((msg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex mb-4 ${
                        msg.sender === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {msg.sender === 'bot' && (
                        <div className="bg-brand-purple rounded-full p-2 h-8 w-8 flex items-center justify-center mr-2">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                      )}
                      
                      <div
                        className={`max-w-[70%] rounded-lg p-3 ${
                          msg.sender === 'user'
                            ? 'bg-brand-blue text-white'
                            : 'bg-gray-800 text-gray-200'
                        }`}
                      >
                        <p className="text-sm">{msg.message}</p>
                        <div
                          className={`text-xs mt-1 ${
                            msg.sender === 'user' ? 'text-blue-200' : 'text-gray-400'
                          } flex items-center`}
                        >
                          <Clock className="h-3 w-3 mr-1" />
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                      
                      {msg.sender === 'user' && (
                        <div className="bg-gray-700 rounded-full p-2 h-8 w-8 flex items-center justify-center ml-2">
                          <User className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-700 p-4">
                <div className="flex items-center w-full">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type your question here..."
                    className="bg-gray-800 border-gray-700 focus:border-brand-blue"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="ml-2 bg-brand-blue hover:bg-brand-blue/90"
                    disabled={!input.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
          
          {/* FAQ and Contact Section */}
          <div className="space-y-6">
            <Card className="border-gray-700">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
            
            <Card className="border-gray-700">
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>
                  Need more help? Get in touch with our team.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-brand-blue/20 p-2 rounded-full mr-3">
                    <Mail className="h-5 w-5 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email Support</p>
                    <a href="mailto:support@abhyum.com" className="text-sm text-brand-blue">
                      support@abhyum.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-brand-purple/20 p-2 rounded-full mr-3">
                    <Phone className="h-5 w-5 text-brand-purple" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Phone Support</p>
                    <a href="tel:+1234567890" className="text-sm text-brand-blue">
                      +1 (234) 567-890
                    </a>
                    <p className="text-xs text-gray-400">Mon-Fri, 9AM-5PM EST</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-gray-700">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactFormSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleContactFormChange}
                      placeholder="Your name"
                      className="bg-gray-800 border-gray-700"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={contactForm.email}
                      onChange={handleContactFormChange}
                      placeholder="your@email.com"
                      className="bg-gray-800 border-gray-700"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleContactFormChange}
                      placeholder="What's this about?"
                      className="bg-gray-800 border-gray-700"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactFormChange}
                      placeholder="How can we help you?"
                      className="bg-gray-800 border-gray-700 min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
