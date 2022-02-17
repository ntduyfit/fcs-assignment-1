import axios from '../../../libs/axios';

const menuHandler = async (req, res) => {
  switch (req.method) {
    case 'GET': {
      const { data } = await axios.get('/menus');
      return res.status(200).json(data);
    }
    default:
      res.status(404);
  }
};

export default menuHandler;
