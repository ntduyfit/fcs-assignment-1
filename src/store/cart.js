import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = React.createContext({
  items: [],
  handleIncreaseQty: (productId) => {},
  handleDecreaseQty: (productId) => {},
  handleAddProductToCart: (product) => {}
});

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const cartString = localStorage.getItem('cart');
    if (cartString) {
      const cart = JSON.parse(cartString);
      setItems(cart);
    }
  }, []);

  const handleIncreaseQty = (productId) => {
    const newItems = [...items];
    const targetProduct = items.find((item) => item.id === productId);
    if (targetProduct) {
      targetProduct.amount++;
      setItems(newItems);
    }
  };

  const handleDecreaseQty = (productId) => {
    const newItems = [...items];
    const targetProduct = items.find((item) => item.id === productId);
    if (targetProduct) {
      --targetProduct.amount;
      if (targetProduct > 0) {
        setItems(newItems);
      } else {
        setItems((prev) => prev.filter((item) => item.id !== productId));
      }
    }
  };

  const handleAddProductToCart = (product) => {
    const targetProduct = items.find((item) => item.id === product.id);
    if (targetProduct) {
      handleIncreaseQty(product.id);
    } else {
      const newItems = [...items, product];
      setItems(newItems);
    }
  };

  return (
    <CartContext.Provider value={{ items, handleIncreaseQty, handleDecreaseQty, handleAddProductToCart }}>{children}</CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.element
};

export default CartContext;
