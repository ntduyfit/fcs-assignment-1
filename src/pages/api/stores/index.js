import axios from '../../../libs/axios';

const storeHandler = async (req, res) => {
  switch (req.method) {
    case 'GET': {
      const { data } = await axios.get('/stores');
      return res.status(200).json(data);
    }
    default:
      res.status(404);
  }
};

export default storeHandler;
