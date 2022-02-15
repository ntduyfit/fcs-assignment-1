import React from 'react';
import PropTypes from 'prop-types';

import Store from './store';
import { StoresWrapper } from './style';

const Stores = ({ stores }) => {
  return (
    <StoresWrapper component='ul'>
      {stores.map((store) => (
        <Store store={store} key={store.id} />
      ))}
    </StoresWrapper>
  );
};

export default Stores;

Stores.propTypes = {
  stores: PropTypes.arrayOf(PropTypes.object)
};
