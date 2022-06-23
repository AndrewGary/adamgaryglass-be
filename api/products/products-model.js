const asyncHandler = require('express-async-handler');

const Products = require('../dbSchemas/productSchema');

const getAllProducts = asyncHandler(async (req, res, next) => {
    const allProducts = await Products.find();

    console.log('allProducts: ', allProducts);

    return allProducts
})

// async function addProduct(newProduct) => {

// }

const addProduct = async (newProduct) => {
    console.log('newProduct: ', newProduct)
   const p = await Products.create(newProduct);

   return p;
}

// const addProduct = asyncHandler(async (req, res, next), product => {
//     // res.status(200).json({ message: 'Hitting the addProduct endpoint'})
//     // return 'hitting the addProduct';
//     if(!req.body.name || !req.body.description || !req.body.price || !req.body.category){
//         res.status(400).json({ message: 'You must provide a name, description, price, and category for the product' })
//     }

//     const product = await Products.create(req.body);

//     return product;
// })

module.exports = {
    getAllProducts,
    addProduct
}