import React, { useState } from 'react';
import PropTypes from 'prop-types';

const RouteContext = React.createContext({ currentTab: 0, handleChangeTab: (newTab) => {} });

export const RouteContextProvider = ({ children }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChangeTab = (newTab) => {
    setCurrentTab(newTab);
  };

  return <RouteContext.Provider value={{ currentTab, handleChangeTab }}>{children}</RouteContext.Provider>;
};

RouteContextProvider.propTypes = {
  children: PropTypes.element
};

export default RouteContext;
