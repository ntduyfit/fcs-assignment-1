import React, { useContext, useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { CartActions, ProductDetailInfo, ProductDetailWrapper, QtyButton, SubmitButton } from './style';
import CartContext from '../../store/cart';
import CartChange from './cart/cartChange';

const ProductDetail = ({ product, isOpen, handleClose }) => {
  const { items, handleAddProductToCart, handleRemoveItem } = useContext(CartContext);
  const [amount, setAmount] = useState(1);

  const handleDecreaseAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const handleAddProduct = () => {
    handleAddProductToCart(product.id, amount);
    setAmount(1);

    handleClose();
  };

  const handleRemoveProduct = () => {
    handleRemoveItem(product.id);
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <ProductDetailWrapper>
        <Box>
          <Image src={product.image} width={160} height={120} alt={product.name} />
          <ProductDetailInfo>
            <Typography color='darkblue' fontWeight='bold'>
              {product.name}
            </Typography>
            <Typography fontWeight='bold'>${product.price}</Typography>
          </ProductDetailInfo>
        </Box>
        <Box marginTop={1}>
          <ProductDetailInfo>
            {items.find((item) => item.productId === product.id) ? (
              <CartChange productId={product.id} />
            ) : (
              <CartActions>
                <QtyButton variant='contained' color='success' onClick={handleDecreaseAmount}>
                  -
                </QtyButton>
                <Typography width='30px' textAlign='center'>
                  {amount}
                </Typography>
                <QtyButton variant='contained' color='success' onClick={() => setAmount((prev) => ++prev)}>
                  +
                </QtyButton>
              </CartActions>
            )}
            {items.find((item) => item.productId === product.id) ? (
              <SubmitButton variant='contained' color='error' remove onClick={handleRemoveProduct}>
                Remove from cart
              </SubmitButton>
            ) : (
              <SubmitButton variant='contained' color='success' onClick={handleAddProduct}>
                <Typography fontWeight='bold'>Add to cart</Typography>
                <Typography fontWeight='bold'>${amount * product.price}</Typography>
              </SubmitButton>
            )}
          </ProductDetailInfo>
        </Box>
      </ProductDetailWrapper>
    </Modal>
  );
};

export default ProductDetail;

ProductDetail.propTypes = {
  product: PropTypes.object,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func
};
