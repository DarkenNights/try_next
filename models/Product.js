import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: true
  }
},
  { timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  })

module.exports = mongoose.model('Product', productSchema)
