import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Product from '../product';
import { ProductsList } from './style';
import { LinearProgress } from '@mui/material';

const MenuGroup = ({ menu }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const url = `/api/products?id=${menu.items.toString()}`;
      const { data } = await axios.get(url);
      setProducts(data);
    })();
  }, []);

  return products.length > 0 ? (
    <Box component='section' id={`menu-${menu.id}`}>
      <Typography fontWeight='bold' color='#3e59a3'>
        {menu.name}
      </Typography>
      <ProductsList component='ul'>
        {products.map((item) => (
          <React.Fragment key={item.id}>
            <Product product={item} />
            <Divider />
          </React.Fragment>
        ))}
      </ProductsList>
    </Box>
  ) : (
    <LinearProgress />
  );
};

export default MenuGroup;

MenuGroup.propTypes = {
  menu: PropTypes.object
};
