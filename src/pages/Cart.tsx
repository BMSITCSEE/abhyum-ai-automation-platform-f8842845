
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to Dashboard since we've removed the cart functionality
    navigate('/dashboard');
  }, [navigate]);
  
  // This component won't render anything as it immediately redirects
  return null;
};

export default Cart;
