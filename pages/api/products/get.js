import Product from '../../../models/Product'
import dbConnect from '../../../utils/dbConnect'

export default async function handler(req, res) {
  await dbConnect()
  if (req.method === 'GET') {
    try {
      const products = await Product.find({})
      res.status('200').send(products)
    } catch (error) {
      res.status(500).send(error)
    }
  } else {
    res.status(400).send('BAD REQUEST')
  }
}
