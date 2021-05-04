import Product from '../../../models/Product'
import dbConnectHelper from '../../../helpers/dbConnectHelper'

const products = async (req, res) => {
  if (req.method === 'GET') {
    await dbConnectHelper()
    await Product.find({}, (err, products) => {
      if (err) res.status(500).send(err)
      res.status('200').send(products)
    })
  }
}

export default products
