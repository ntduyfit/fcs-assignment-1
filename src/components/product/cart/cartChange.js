import React, { useContext, useMemo } from 'react';
import { CartActions, QtyButton } from '../style';
import Typography from '@mui/material/Typography';
import CartContext from '../../../store/cart';

const CartChange = ({ productId }) => {
  const { items, handleIncreaseQty, handleDecreaseQty } = useContext(CartContext);

  const product = useMemo(() => items.find((item) => item.productId === productId), []);

  return (
    <CartActions>
      <QtyButton variant='contained' color='success' onClick={() => handleDecreaseQty(productId)}>
        -
      </QtyButton>
      <Typography width='30px' textAlign='center'>
        {product?.amount}
      </Typography>
      <QtyButton variant='contained' color='success' onClick={() => handleIncreaseQty(productId)}>
        +
      </QtyButton>
    </CartActions>
  );
};

export default CartChange;
