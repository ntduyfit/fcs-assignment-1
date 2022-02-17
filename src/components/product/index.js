import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

import { ProductWrapper, ProductInfo } from './style';
import FoodPic from '../../../public/food.png';
import axios from '../../libs/axios';
import ProductDetail from './productDetail';
import useToggle from '../../hooks/useToggle';

const Product = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/products/${productId}`);
      setProduct(data);
    })();
  }, []);

  const { isOpen, handleOpen, handleClose } = useToggle();

  return product ? (
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
  ) : (
    <LinearProgress />
  );
};

export default Product;

Product.propTypes = {
  productId: PropTypes.number
};
