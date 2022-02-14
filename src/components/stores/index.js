import React from 'react';
import PropTypes from 'prop-types';

import { StoresWrapper } from './style';

const Stores = ({ stores }) => {
  return <StoresWrapper component='ul'>This is store list</StoresWrapper>;
};

export default Stores;

Stores.propTypes = {
  stores: PropTypes.arrayOf(PropTypes.object)
};
