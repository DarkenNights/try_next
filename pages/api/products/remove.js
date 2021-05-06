import Product from '../../../models/Product'
import dbConnect from '../../../utils/dbConnect'

const remove = async (req, res) => {
  if (req.method === 'POST') {
    try {
      await dbConnect()
      const deletedProduct = await Product.deleteOne({ name: req.body.name })
      res.status(200).send(deletedProduct)
    } catch (err) {
      res.status(500).send('Problème à la création')
    }
  }
}

export default remove
