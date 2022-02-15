import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Badge from '@mui/material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import CartIcon from '@mui/icons-material/ShoppingCart';
import DiningIcon from '@mui/icons-material/LocalDining';

import CartContext from '../../store/cart';
import RouteContext from '../../store/route';
import { routes } from './routes';
import { Wrapper } from './style';

const Navigation = () => {
  const { currentTab, handleChangeTab } = useContext(RouteContext);
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  const { items } = useContext(CartContext);

  useEffect(() => {
    if (!isReady) {
      const currentRoute = router.pathname;
      const index = routes.findIndex((route) => route === currentRoute);
      handleChangeTab(index);
      setIsReady(true);
    } else {
      const newRoute = routes[currentTab];
      router.push(newRoute);
    }
  }, [currentTab]);

  const handleChange = (_, value) => {
    handleChangeTab(value);
  };

  return (
    <Wrapper>
      <Tabs value={currentTab} onChange={handleChange} aria-label='routing' centered>
        <Tab icon={<HomeIcon />} iconPosition='top' label='Home' />
        <Tab icon={<DiningIcon />} iconPosition='top' label='Menu' />
        <Tab
          icon={
            <Badge badgeContent={items.length} color='error' showZero>
              <CartIcon color='action' />
            </Badge>
          }
          iconPosition='top'
          label='Cart'
        />
      </Tabs>
    </Wrapper>
  );
};

export default Navigation;
