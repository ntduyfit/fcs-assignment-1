import axios from '../../../libs/axios';

const productsHandler = async (req, res) => {
  switch (req.method) {
    case 'GET': {
      const { id } = req.query;
      const { data } = await axios.get('/products');
      if (id) {
        const idArr = id.split(',');
        const result = data.filter((product) => idArr.includes(product.id));
        return res.status(200).json(result);
      }

      return res.status(200).json(data);
    }
    default:
      res.status(404);
  }
};

export default productsHandler;
