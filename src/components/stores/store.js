import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { StoreContainer } from './style';
import diningIcon from '../../../public/dining.png';

const Store = ({ store }) => {
  const handleSelect = () => {
    localStorage.setItem('store', store.id);
  };

  return (
    <StoreContainer>
      <Image width={60} height={60} src={diningIcon} alt={store.name} />
      <div>
        <Typography variant='h6' fontSize={16}>
          {store.name}
        </Typography>
        <Typography variant='subtitle2' color='gray' fontSize={12}>
          {store.address || 'Not available'}
        </Typography>
        <Button variant='outlined' sx={{ borderRadius: '15px', padding: '3px' }} color='success' onClick={handleSelect}>
          Select
        </Button>
      </div>
    </StoreContainer>
  );
};

export default Store;

Store.propTypes = {
  store: PropTypes.object
};
