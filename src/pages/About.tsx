
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Code, 
  LineChart, 
  Target, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-brand-dark relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              About <span className="gradient-text">Abhyum</span>
            </h1>
            <p className="text-xl text-gray-300">
              Empowering businesses with intelligent AI automation solutions that transform customer experiences.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-brand-purple/10 to-brand-teal/10"></div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center p-3 bg-brand-blue/20 rounded-lg">
                <Target className="h-6 w-6 text-brand-blue" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
              <p className="text-gray-300">
                At Abhyum, our mission is to democratize AI technology for businesses of all sizes. We believe that advanced AI solutions should not be limited to enterprise companies with large budgets. Our platform makes custom AI chatbots accessible, affordable, and easy to implement for any business.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-blue mr-2 mt-0.5" />
                  <span>Simplify AI implementation for businesses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-blue mr-2 mt-0.5" />
                  <span>Create AI solutions that truly understand your business</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-blue mr-2 mt-0.5" />
                  <span>Deliver exceptional customer experiences through intelligent automation</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center p-3 bg-brand-purple/20 rounded-lg">
                <LineChart className="h-6 w-6 text-brand-purple" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
              <p className="text-gray-300">
                We envision a future where every business can leverage the power of AI to enhance their operations, improve customer satisfaction, and drive growth. Our platform is designed to make this vision a reality by providing AI solutions that are powerful yet accessible.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 mt-0.5" />
                  <span>Make AI accessible to businesses of all sizes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 mt-0.5" />
                  <span>Help businesses provide 24/7 intelligent support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-brand-purple mr-2 mt-0.5" />
                  <span>Continue innovating to stay at the forefront of AI technology</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-300">
              Abhyum was founded with a simple but powerful idea: to bridge the gap between advanced AI technology and everyday business needs.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">The Beginning</h3>
              <p className="text-gray-300">
                Abhyum started when our founders noticed that many businesses wanted to leverage AI technology but found existing solutions too complex or too expensive. We set out to create an AI platform that was powerful yet approachable, designed specifically for businesses without large IT departments or budgets.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Our Growth</h3>
              <p className="text-gray-300">
                Since our inception, we've grown from a small team of passionate AI enthusiasts to a full-service AI solution provider. We've helped hundreds of businesses implement custom AI chatbots that deliver real value, improving customer satisfaction and operational efficiency.
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Where We Are Today</h3>
              <p className="text-gray-300">
                Today, Abhyum is at the forefront of AI automation technology. Our platform continues to evolve, incorporating the latest advancements in natural language processing and machine learning. We're proud to serve a diverse range of clients, from small local businesses to large enterprises across various industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-brand-teal/20 rounded-lg mb-4">
              <Users className="h-6 w-6 text-brand-teal" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-300">
              Behind Abhyum is a talented team of AI engineers, developers, and business experts united by a common goal: making AI accessible to businesses everywhere.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team member cards would go here */}
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <div className="h-48 bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">SHREYAS SHASHI GOWDA</h3>
                <p className="text-brand-blue mb-2">Founder</p>
                <p className="text-gray-400">
                   AI researcher with a passion for making advanced technology accessible to businesses of all sizes.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <div className="h-48 bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">RACHIT PARIHAR</h3>
                <p className="text-brand-purple mb-2"> Co-Founder</p>
                <p className="text-gray-400">
                  Machine learning expert with over 10 years of experience developing AI solutions for enterprise companies.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <div className="h-48 bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">ADITYA SRIVASTAVA</h3>
                <p className="text-brand-teal mb-2">Co-Founder</p>
                <p className="text-gray-400">
                Tech Head & Lead Web Developer at Abhyum, where cutting-edge design meets seamless functionality. Also steering the brand's vision as a sharp Marketing Strategist, fusing creativity with conversion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-dark to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with <span className="gradient-text">Abhyum AI?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses already using our platform to deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button className="bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 text-white py-6 px-8 rounded-lg text-lg w-full sm:w-auto">
                  Explore Solutions
                </Button>
              </Link>
              <Link to="/support">
                <Button variant="outline" className="border-white/20 py-6 px-8 rounded-lg text-lg w-full sm:w-auto">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
