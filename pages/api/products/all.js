import connectDB from '../../../middlewares/mongodb';
// import getT from 'next-translate/getT'
import Product from '../../../models/Product';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    // const t = await getT(req.query.__nextLocale, 'auth')
    await Product.find({}).then(function (products) {
      res.status(200).send(products);
    });
  }
  else {
    res.status(405).send('Method Not Allowed');
  }
}

export default connectDB(handler);
