
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Key, Loader2, ArrowRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import Logo from '@/components/Logo';

const Login = () => {
  const navigate = useNavigate();
  const { login, requestOTP, loginWithOTP } = useAuth();
  
  // Password login state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // OTP login state
  const [otpEmail, setOtpEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [isOtpLoading, setIsOtpLoading] = useState(false);
  
  // Handle password login
  const handlePasswordLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    
    setIsLoading(true);
    
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle OTP request
  const handleOtpRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!otpEmail) {
      toast.error('Please enter your email');
      return;
    }
    
    setIsOtpLoading(true);
    
    try {
      await requestOTP(otpEmail);
      setOtpSent(true);
    } catch (error) {
      console.error('OTP request error:', error);
    } finally {
      setIsOtpLoading(false);
    }
  };
  
  // Handle OTP verification
  const handleOtpLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!otpEmail || !otp) {
      toast.error('Please fill in all fields');
      return;
    }
    
    setIsOtpLoading(true);
    
    try {
      await loginWithOTP(otpEmail, otp);
      navigate('/dashboard');
    } catch (error) {
      console.error('OTP login error:', error);
    } finally {
      setIsOtpLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-dark to-gray-900 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Logo className="mx-auto" />
          <h1 className="text-2xl font-bold mt-6">Welcome Back</h1>
          <p className="text-gray-400 mt-2">Login to your Abhyum account</p>
        </div>
        
        <div className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-xl shadow-xl border border-gray-700">
          <Tabs defaultValue="password" className="w-full">
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="otp">OTP</TabsTrigger>
            </TabsList>
            
            {/* Password Login Form */}
            <TabsContent value="password">
              <form onSubmit={handlePasswordLogin}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 bg-gray-900 border-gray-700 focus:border-brand-blue"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <label htmlFor="password" className="text-sm font-medium text-gray-300">
                        Password
                      </label>
                      <Link to="/forgot-password" className="text-sm text-brand-blue hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Key className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 bg-gray-900 border-gray-700 focus:border-brand-blue"
                        required
                      />
                    </div>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-brand-blue hover:bg-brand-blue/90"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Logging in...
                      </>
                    ) : (
                      'Login'
                    )}
                  </Button>
                </div>
              </form>
            </TabsContent>
            
            {/* OTP Login Form */}
            <TabsContent value="otp">
              {!otpSent ? (
                <form onSubmit={handleOtpRequest}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="otpEmail" className="text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
                        <Input
                          id="otpEmail"
                          type="email"
                          placeholder="your@email.com"
                          value={otpEmail}
                          onChange={(e) => setOtpEmail(e.target.value)}
                          className="pl-10 bg-gray-900 border-gray-700 focus:border-brand-blue"
                          required
                        />
                      </div>
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-brand-purple hover:bg-brand-purple/90"
                      disabled={isOtpLoading}
                    >
                      {isOtpLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending OTP...
                        </>
                      ) : (
                        'Send OTP'
                      )}
                    </Button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleOtpLogin}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="otp" className="text-sm font-medium text-gray-300">
                        Enter OTP
                      </label>
                      <div className="relative">
                        <Key className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
                        <Input
                          id="otp"
                          type="text"
                          placeholder="123456"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          className="pl-10 bg-gray-900 border-gray-700 focus:border-brand-blue"
                          required
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        OTP sent to {otpEmail}
                      </p>
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-brand-purple hover:bg-brand-purple/90"
                      disabled={isOtpLoading}
                    >
                      {isOtpLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Verifying...
                        </>
                      ) : (
                        'Verify OTP'
                      )}
                    </Button>
                    
                    <Button
                      type="button"
                      variant="link"
                      className="w-full text-gray-400"
                      onClick={() => setOtpSent(false)}
                    >
                      Change Email
                    </Button>
                  </div>
                </form>
              )}
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Don't have an account?{' '}
              <Link to="/signup" className="text-brand-blue hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
