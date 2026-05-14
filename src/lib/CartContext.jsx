import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('cavaro-cart');
      if (stored) {
        setCartItems(JSON.parse(stored));
      }
    } catch (error) {
      console.warn('Failed to load cart from localStorage', error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('cavaro-cart', JSON.stringify(cartItems));
    } catch (error) {
      console.warn('Failed to save cart to localStorage', error);
    }
  }, [cartItems]);

  const addCourse = (course) => {
    setCartItems((prev) => {
      if (prev.some((item) => item.id === course.id)) {
        return prev;
      }
      return [...prev, course];
    });
  };

  const removeCourse = (courseId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== courseId));
  };

  const clearCart = () => setCartItems([]);

  const itemCount = cartItems.length;
  const totalPriceUSD = cartItems.reduce((sum, item) => sum + (item.priceUSD || 0), 0);

  return (
    <CartContext.Provider
      value={{ cartItems, addCourse, removeCourse, clearCart, itemCount, totalPriceUSD }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
