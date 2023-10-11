const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String },
    category: { type: String },
    company: { type: String },
    colors: { type: Array },
    featured: { type: Boolean },
    shipping: { type: Boolean },
    id: { type: Number, unique: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model('Products', ProductsSchema);
