
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Lightbulb, 
  Target, 
  Rocket, 
  TrendingUp, 
  MessageSquare,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';
import {
  Card,
  CardContent,
} from '@/components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-brand-purple/5 to-brand-teal/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About <span className="gradient-text">Abhyum</span></h1>
            <p className="text-xl text-gray-300">
              We're on a mission to make AI automation accessible and impactful for businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-brand-blue/10 p-3 rounded-lg">
                    <Lightbulb className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h2 className="text-2xl font-bold ml-4">Our Mission</h2>
                </div>
                <p className="text-gray-300">
                  To create intelligent, ethical, and scalable AI automation tools that simplify communication, boost productivity, and empower small businesses to thrive in the digital age.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-brand-purple/10 p-3 rounded-lg">
                    <Target className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h2 className="text-2xl font-bold ml-4">Our Vision</h2>
                </div>
                <p className="text-gray-300">
                  To lead a future where AI automation bridges human effort and machine intelligence—making everyday business tasks smarter, more efficient, and accessible to all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-16 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex justify-center">
                  <div className="bg-brand-blue/10 p-4 rounded-full h-20 w-20 flex items-center justify-center">
                    <Rocket className="h-10 w-10 text-brand-blue" />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-4">The Beginning</h3>
                  <p className="text-gray-300">
                    ABHYUM was born from the relentless curiosity and shared vision of two AI enthusiasts—fellow technophiles bound by a singular mission: to make intelligent systems accessible, scalable, and impactful for businesses of all sizes. What began as a passion project has evolved into a purpose-driven venture. At ABHYUM, every line of code, every algorithm, and every client interaction is infused with deep-rooted passion. We don't just build AI—we live it. Our team is powered by purpose, driven by innovation, and united by the belief that meaningful technology stems from human dedication.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex justify-center">
                  <div className="bg-brand-purple/10 p-4 rounded-full h-20 w-20 flex items-center justify-center">
                    <TrendingUp className="h-10 w-10 text-brand-purple" />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-4">Our Growth</h3>
                  <p className="text-gray-300">
                    ABHYUM is expanding rapidly in the evolving frontier of Artificial Intelligence. We believe AI isn't just a tool—it's a transformational ally. Our mission is clear: empower startups, scale-ups, and enterprises to harness AI as a competitive advantage. As we build scalable chatbot systems, automation tools, and digital experiences, we invite you to join the revolution. Let AI become a core part of your business arsenal—shaping smarter workflows, intuitive customer journeys, and elevated productivity.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex justify-center">
                  <div className="bg-brand-teal/10 p-4 rounded-full h-20 w-20 flex items-center justify-center">
                    <MessageSquare className="h-10 w-10 text-brand-teal" />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-4">Where We Are Today</h3>
                  <p className="text-gray-300">
                    Today, ABHYUM partners with a diverse set of forward-thinking startups—helping them navigate their digital journey with confidence and intelligence. Our tailored AI solutions are enabling these businesses to automate conversations, accelerate growth, and scale with efficiency. With every successful deployment, we reaffirm our belief: that intelligent automation isn't the future—it's the now. And we're here to lead that transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-gray-700 overflow-hidden bg-gray-800/30">
              <div className="h-48 bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 flex items-center justify-center">
                <div className="h-28 w-28 rounded-full bg-gray-700 flex items-center justify-center text-3xl font-bold">SG</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">Shreyas Shashi Kumar Gowda</h3>
                <p className="text-sm text-gray-400 mb-4">Founder & CEO</p>
                <p className="text-gray-300 mb-4">
                  A visionary entrepreneur passionate about creating AI solutions for businesses of every scale.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-brand-blue">
                    <Github size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-brand-blue">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-brand-blue">
                    <Twitter size={18} />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-700 overflow-hidden bg-gray-800/30">
              <div className="h-48 bg-gradient-to-r from-brand-purple/20 to-brand-teal/20 flex items-center justify-center">
                <div className="h-28 w-28 rounded-full bg-gray-700 flex items-center justify-center text-3xl font-bold">RP</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">Rachit Parihar</h3>
                <p className="text-sm text-gray-400 mb-4">Founder & CTO</p>
                <p className="text-gray-300 mb-4">
                  An AI researcher with a deep passion for making advanced technology accessible, understandable, and useful for businesses of all sizes.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-brand-blue">
                    <Github size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-brand-blue">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-brand-blue">
                    <Twitter size={18} />
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-700 overflow-hidden bg-gray-800/30">
              <div className="h-48 bg-gradient-to-r from-brand-teal/20 to-brand-blue/20 flex items-center justify-center">
                <div className="h-28 w-28 rounded-full bg-gray-700 flex items-center justify-center text-3xl font-bold">AK</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">Ananya Kumar</h3>
                <p className="text-sm text-gray-400 mb-4">Lead Designer</p>
                <p className="text-gray-300 mb-4">
                  A creative designer focused on crafting intuitive and engaging user experiences for AI products.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-brand-blue">
                    <Github size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-brand-blue">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-brand-blue">
                    <Twitter size={18} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with us to bring the power of AI automation to your business operations.
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90">
                Explore Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
