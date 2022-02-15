import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Product from '../product';
import { ProductsList } from './style';

const MenuGroup = ({ products, menu }) => {
  return (
    <Box component='section' id={`menu-${menu.id}`}>
      <Typography fontWeight='bold' color='#3e59a3'>
        {menu.name}
      </Typography>
      <ProductsList component='ul'>
        {products.map((product) => (
          <React.Fragment key={product.id}>
            <Product product={product} />
            <Divider />
          </React.Fragment>
        ))}
      </ProductsList>
    </Box>
  );
};

export default MenuGroup;

MenuGroup.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  menu: PropTypes.object
};