const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name for the product']
    },
    description: {
        type: String,
        required: [true, 'Please add a description for the product']
    },
    price: {
        type: Number,
        required: [true, 'Please add a price for the product']
    },
    category: {
        type: String,
        required: [true, 'Please select a category for the product']
    },
    colors: {
        type: Array,
    },
    onSale: {
        type: Boolean,
        default: false
    },
    salePrice: {
        type: Number
    }
})

module.exports = mongoose.model('Product', productSchema);