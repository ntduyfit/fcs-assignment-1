import axios from '../../../libs/axios';

let products;

const productsHandler = async (req, res) => {
  switch (req.method) {
    case 'GET': {
      const { id } = req.query;
      const { data } = await axios.get(`/products/${id}`);
      return res.status(200).json(data);
    }
    default:
      res.status(404);
  }
};

export default productsHandler;
