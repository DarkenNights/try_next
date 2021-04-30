import mongoose from 'mongoose';
mongoose.models = {};

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

export default mongoose.model('Product', productSchema);
