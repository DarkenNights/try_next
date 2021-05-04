import Product from '../../../models/Product'
import dbConnectHelper from '../../../helpers/dbConnectHelper'

const remove = async (req, res) => {
  if (req.method === 'POST') {
    try {
      await dbConnectHelper()
      const deletedProduct = await Product.deleteOne({ name: req.body.name })
      res.status(200).send(deletedProduct)
    } catch (err) {
      res.status(500).send('Problème à la création')
    }
  }
}

export default remove
