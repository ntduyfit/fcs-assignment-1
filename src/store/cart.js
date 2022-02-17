import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = React.createContext({
  items: [],
  handleIncreaseQty: (productId) => {},
  handleDecreaseQty: (productId) => {},
  handleAddProductToCart: (productId, amount) => {},
  handleRemoveItem: (productId) => {}
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

  useEffect(() => {
    if (items.length) {
      localStorage.setItem('cart', JSON.stringify(items));
    }
  }, [items]);

  const handleIncreaseQty = (productId) => {
    const newItems = [...items];
    const targetProduct = items.find((item) => item.productId === productId);
    if (targetProduct) {
      targetProduct.amount++;
      setItems(newItems);
    }
  };

  const handleDecreaseQty = (productId) => {
    const newItems = [...items];
    const targetProduct = items.find((item) => item.productId === productId);
    if (targetProduct) {
      --targetProduct.amount;
      if (targetProduct.amount > 0) {
        setItems(newItems);
      } else {
        setItems((prev) => prev.filter((item) => item.productId !== productId));
      }
    }
  };

  const handleAddProductToCart = (productId, amount) => {
    const targetProduct = items.find((item) => item === productId);
    if (targetProduct) {
      handleIncreaseQty(productId);
    } else {
      const newItems = [...items, { productId, amount }];
      setItems(newItems);
    }
  };

  const handleRemoveItem = (productId) => {
    const newItems = items.filter((item) => item.productId !== productId);
    setItems(newItems);
  };

  return (
    <CartContext.Provider value={{ items, handleIncreaseQty, handleDecreaseQty, handleAddProductToCart, handleRemoveItem }}>
      {children}
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.element
};

export default CartContext;
