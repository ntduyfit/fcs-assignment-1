import React from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { ProductWrapper, ProductInfo } from './style';
import FoodPic from '../../../public/food.png';

const Product = ({ product }) => {
  return (
    <ProductWrapper>
      <Image src={FoodPic} width={60} height={60} alt={product.name} />
      <ProductInfo>
        <Typography fontWeight={500}>{product.name}</Typography>
        <Typography variant='subtitle2' fontWeight='bold'>
          ${product.price}
        </Typography>
      </ProductInfo>
    </ProductWrapper>
  );
};

export default Product;
