import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

import Stores from '../components/stores';
import axios from '../libs/axios';

const Home = ({ stores }) => {
  return (
    <Box>
      <Typography color='blue'>Select a store</Typography>
      <Stores stores={stores} />
    </Box>
  );
};

export default Home;

Home.propTypes = {
  stores: PropTypes.arrayOf(PropTypes.object)
};

export const getStaticProps = async (context) => {
  const { data: stores } = await axios.get('/stores');

  return {
    props: {
      stores
    },
    revalidate: 20
  };
};
