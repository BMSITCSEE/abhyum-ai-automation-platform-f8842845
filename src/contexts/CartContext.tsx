
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: number;
  type: 'subscription' | 'one-time';
  billingCycle?: 'monthly' | 'yearly';
}

interface CartContextType {
  items: ServiceItem[];
  addItem: (item: ServiceItem) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<ServiceItem[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('abhyum-cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to parse cart data:', error);
        localStorage.removeItem('abhyum-cart');
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('abhyum-cart', JSON.stringify(items));
  }, [items]);

  const addItem = (item: ServiceItem) => {
    // Check if item already in cart
    const existingItem = items.find((i) => i.id === item.id);
    
    if (existingItem) {
      toast.info(`${item.name} is already in your cart.`);
      return;
    }
    
    setItems([...items, item]);
    toast.success(`${item.name} added to cart.`);
  };

  const removeItem = (itemId: string) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    toast.info('Item removed from cart.');
  };

  const clearCart = () => {
    setItems([]);
    toast.info('Cart cleared.');
  };

  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  const value = {
    items,
    addItem,
    removeItem,
    clearCart,
    totalPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
