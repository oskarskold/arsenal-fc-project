'use client';
import { createContext, useState, useContext } from 'react';
import { ShoppingCartContext, ShoppingCartProviderProps, ProductType } from '../types';
import  useLocalStorage from "../hooks/useLocalStorage";

const ShoppingCartContext = createContext<ShoppingCartContext>({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<ProductType[]>("shoppingCart", []);

  const cartQuantity = cartItems.reduce((quantity, item) => quantity + item.quantity, 0);

  function getItemQuantity(id: number) {
    const item = cartItems.find((item) => item._id === id);
    return item ? item.quantity : 0;
  }
  
  function totalCartPrice() {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  function addToCart(product: ProductType) {
    const itemExists = cartItems.find((item) => item._id === product._id);

    if (itemExists) {
      const updatedCartItems = cartItems.map((item) => {
        if (item._id === product._id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function increaseItemQuantity(id: number) {
    const updatedCartItems = cartItems.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  }

  function decreaseQuantity(id: number) {
    const updatedCartItems = cartItems.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCartItems(updatedCartItems.filter((item) => item.quantity > 0));
  }

  function removeFromCart(id: number) {
    setCartItems(cartItems.filter((item) => item._id !== id));
  }

  return (
    <ShoppingCartContext.Provider
      value={{ getItemQuantity, increaseItemQuantity, decreaseQuantity, removeFromCart, cartQuantity, cartItems, addToCart, totalCartPrice }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
