const asyncHandler = require('express-async-handler')

const getProducts = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Products'})
})

const addProduct = asyncHandler(async (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body)
})

const updateProduct = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'update product'})
})

const deleteProduct = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Delete Product'})
})

module.exports = {
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct
}