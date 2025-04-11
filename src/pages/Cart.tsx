
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  ShoppingCart, 
  Trash2, 
  CreditCard, 
  ArrowLeft, 
  CheckCircle, 
  Loader2,
  AlertCircle
} from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const Cart = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { items, removeItem, clearCart, totalPrice } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <Card className="w-full max-w-md border-gray-700">
          <CardHeader>
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>
              Please login to access your cart
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-end gap-4">
            <Button variant="outline" onClick={() => navigate('/')}>
              Back to Home
            </Button>
            <Button onClick={() => navigate('/login')}>
              Login
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulating payment process
    setTimeout(() => {
      setIsCheckingOut(false);
      setPaymentSuccess(true);
      clearCart();
    }, 2000);
  };
  
  const handleCloseSuccessDialog = () => {
    setPaymentSuccess(false);
    navigate('/dashboard');
  };
  
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto py-8 px-4">
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            className="mr-4" 
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold">Your Cart</h1>
        </div>
        
        {items.length === 0 ? (
          <Card className="border-gray-700 text-center py-12">
            <CardContent>
              <div className="flex flex-col items-center gap-4">
                <ShoppingCart className="h-16 w-16 text-gray-500" />
                <h2 className="text-2xl font-semibold">Your cart is empty</h2>
                <p className="text-gray-400 max-w-md mx-auto">
                  Looks like you haven't added any services to your cart yet.
                </p>
                <Link to="/dashboard">
                  <Button className="mt-4">
                    Browse Services
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <Card className="border-gray-700">
                <CardHeader>
                  <CardTitle>Cart Items ({items.length})</CardTitle>
                  <CardDescription>
                    Review your selected services
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-400">
                          {item.type === 'subscription'
                            ? `$${item.price}/mo`
                            : `$${item.price} (one-time)`}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="font-medium">${item.price}</p>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-5 w-5 text-gray-400 hover:text-red-500" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full text-red-500 hover:text-red-600" 
                    onClick={() => {
                      clearCart();
                      toast.info('Cart cleared');
                    }}
                  >
                    Clear Cart
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            {/* Order Summary */}
            <div>
              <Card className="border-gray-700 sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Tax</span>
                    <span>${(totalPrice * 0.1).toFixed(2)}</span>
                  </div>
                  <Separator className="bg-gray-700" />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${(totalPrice * 1.1).toFixed(2)}</span>
                  </div>
                  
                  <div className="bg-gray-800 p-3 rounded-lg text-sm text-gray-300 mt-4">
                    <p>
                      {items.some(item => item.type === 'subscription')
                        ? 'Subscriptions will be billed monthly until canceled.'
                        : 'This is a one-time payment.'}
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-brand-blue hover:bg-brand-blue/90" 
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                  >
                    {isCheckingOut ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <CreditCard className="mr-2 h-4 w-4" />
                        Checkout
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </div>
      
      {/* Payment Success Dialog */}
      <Dialog open={paymentSuccess} onOpenChange={setPaymentSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 rounded-full p-3">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </div>
            <DialogTitle className="text-center">Payment Successful!</DialogTitle>
            <DialogDescription className="text-center">
              Thank you for your purchase. Your order has been processed successfully.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-gray-800 p-4 rounded-lg mt-4">
            <h4 className="font-medium mb-2">Next Steps</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span>You'll receive a confirmation email shortly.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Our team will reach out to begin the setup process.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-brand-blue mt-0.5" />
                <span>For any questions, please contact our support team.</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <Button onClick={handleCloseSuccessDialog}>
              Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Cart;
