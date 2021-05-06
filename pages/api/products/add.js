import Product from '../../../models/Product'
import dbConnect from '../../../utils/dbConnect'

const add = async (req, res) => {
  if (req.method === 'POST') {
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
    })
    try {
      await dbConnect()
      const savedProduct = await product.save()
      res.status(201).send(savedProduct)
    } catch (err) {
      res.status(500).send('Problème à la création')
    }
  }
}

export default add
