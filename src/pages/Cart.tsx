
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Cart = () => {
  const navigate = useNavigate();
  
  const handleRedirect = () => {
    navigate('/dashboard');
  };
  
  return (
    <div className="container mx-auto py-20 px-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Cart Functionality Removed</h1>
        <p className="text-gray-500 mb-8">
          The cart feature has been removed as requested. Please use the dashboard to explore our services.
        </p>
        <Button onClick={handleRedirect} className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" /> Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Cart;
