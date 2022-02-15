import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import MenuGroup from '../components/menuGroup';

const Menu = [
  {
    id: 1,
    name: 'Taiwan food'
  },
  {
    id: 2,
    name: 'Must try'
  },
  {
    id: 3,
    name: 'Chill'
  }
];

const Products = [
  {
    id: 1,
    name: 'Noodle',
    price: 4.8
  },
  {
    id: 2,
    name: 'Rice',
    price: 3
  },
  {
    id: 3,
    name: 'Pizza',
    price: 3.5
  },
  {
    id: 4,
    name: 'Hamburger',
    price: 3.8
  }
];

const MenuPage = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

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
      <Box sx={{ position: 'sticky', backgroundColor: '#fff' }}>
        <Tabs value={selectedMenu} onChange={handleChangeMenu} variant='fullWidth' centered>
          {Menu.map((item) => (
            <Tab key={item.id} label={item.name} href={`#menu-${item.id}`} />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ mt: '10px' }}>
        {Menu.map((item) => (
          <MenuGroup key={item.id} products={Products} menu={item} />
        ))}
      </Box>
    </Box>
  );
};

export default MenuPage;
