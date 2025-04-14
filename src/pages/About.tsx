import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Lightbulb, 
  Target, 
  Rocket, 
  Code,
  Handshake as HandshakeIcon,
  Sparkles,
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
                    Abhyum started when our founders noticed that many businesses wanted to leverage AI technology but found existing solutions too complex or too expensive. We set out to create an AI platform that was powerful yet approachable, designed specifically for businesses without large IT departments or budgets.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex justify-center">
                  <div className="bg-brand-purple/10 p-4 rounded-full h-20 w-20 flex items-center justify-center">
                    <Code className="h-10 w-10 text-brand-purple" />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-4">Our Technology</h3>
                  <p className="text-gray-300">
                    Built on state-of-the-art open-source models and retrieval-augmented generation (RAG), our chatbot platform is fast, secure, and completely white-labeled. We help clients deploy intelligent assistants trained on their own content — think PDFs, websites, internal docs — all within a few hours.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex justify-center">
                  <div className="bg-brand-teal/10 p-4 rounded-full h-20 w-20 flex items-center justify-center">
                    <HandshakeIcon className="h-10 w-10 text-brand-teal" />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-4">How We Work with You</h3>
                  <p className="text-gray-300">
                    We make AI easy. Whether you're a tech-savvy startup or a traditional service provider, we guide you through onboarding, data prep, and deployment. Our plug-and-play platform can be adapted to match your brand and workflows — no code required.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex justify-center">
                  <div className="bg-brand-blue/10 p-4 rounded-full h-20 w-20 flex items-center justify-center">
                    <Sparkles className="h-10 w-10 text-brand-blue" />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold mb-4">Future-Ready</h3>
                  <p className="text-gray-300">
                    We're committed to staying on the frontier — experimenting with new models, building smarter pipelines, and empowering businesses to grow with intelligent, human-like automation.
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
                <p className="text-sm text-gray-400 mb-4">Founder</p>
                <p className="text-gray-300 mb-4">
                  A visionary entrepreneur passionate about creating AI solutions for businesses of every scale. Positioned at the intersection of AI and quantitative research, with a focus on building precision-driven alpha models. Armed with deep expertise in artificial intelligence, delivering intelligent systems that create measurable impact.
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
                <p className="text-sm text-gray-400 mb-4">Founder</p>
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
                <div className="h-28 w-28 rounded-full bg-gray-700 flex items-center justify-center text-3xl font-bold">AS</div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">Aditya Srivastava</h3>
                <p className="text-sm text-gray-400 mb-4">Co-Founder</p>
                <p className="text-gray-300 mb-4">
                  Tech Head & Lead Web Developer at Abhyum, where cutting-edge design meets seamless functionality. Also steering the brand's vision as a sharp Marketing Strategist, fusing creativity with conversion.
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
