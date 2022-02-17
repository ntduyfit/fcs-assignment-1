import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import MenuGroup from '../components/menuGroup';
import { AppBar, Toolbar } from '@mui/material';
import axios from '../libs/axios';

const MenuPage = ({ menus }) => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const router = useRouter();

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const anchors = document.querySelectorAll('.MuiTabs-root .MuiTabs-scroller .MuiTabs-flexContainer a');

    const handleScroll = () => {
      let current;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 300) {
          current = section.getAttribute('id');
        }
      });

      anchors.forEach((anchor, index) => {
        const href = anchor.getAttribute('href');
        if (href.includes(current)) {
          setSelectedMenu(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChangeMenu = (_, newTab) => {
    setSelectedMenu(newTab);
  };

  return (
    <Box>
      <AppBar sx={{ backgroundColor: '#fff', boxShadow: 'none', height: '60px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
          <Tabs value={selectedMenu} onChange={handleChangeMenu} variant='fullWidth' centered>
            {menus.map((item) => (
              <Tab key={item.id} label={item.name} href={`#menu-${item.id}`} />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: '60px' }}>
        {menus.map((menu) => (
          <MenuGroup key={menu.id} menu={menu} />
        ))}
      </Box>
    </Box>
  );
};

export default MenuPage;

MenuPage.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.object),
  products: PropTypes.arrayOf(PropTypes.object)
};

export const getStaticProps = async (context) => {
  const { data: menus } = await axios.get('/menus');

  return {
    props: {
      menus
    },
    revalidate: 20
  };
};
