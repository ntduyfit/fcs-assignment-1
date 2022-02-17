import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

import { ProductWrapper, ProductInfo } from './style';
import ProductDetail from './productDetail';
import useToggle from '../../hooks/useToggle';

const Product = ({ product }) => {
  const { isOpen, handleOpen, handleClose } = useToggle();

  return (
    <React.Fragment>
      <ProductWrapper onClick={handleOpen}>
        <Image src={product.image} width={60} height={60} alt={product.name} />
        <ProductInfo>
          <Typography fontWeight={500}>{product.name}</Typography>
          <Typography variant='subtitle2' fontWeight='bold'>
            ${product.price}
          </Typography>
        </ProductInfo>
        <ProductDetail product={product} handleClose={handleClose} isOpen={isOpen} />
      </ProductWrapper>
    </React.Fragment>
  );
};

export default Product;

Product.propTypes = {
  productId: PropTypes.object
};
