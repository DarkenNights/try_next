import connectDB from '../../../middlewares/mongodb';
// import getT from 'next-translate/getT'
import Product from '../../../models/Product';

const handler = (req, res) => {
  if (req.method === 'GET') {
    // const t = await getT(req.query.__nextLocale, 'auth')
    const productsDB = Product.find({}, function (err, products) {
      res.json(products);
    });
  }
  else {
    res.status(405).send('Method Not Allowed');
  }
}

export default connectDB(handler);
