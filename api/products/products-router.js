const router = require('express').Router();

const Products = require('./products-model.js');

router.get('/', (req, res, next) => {
    Products.getAllProducts()
    .then(products => {
        res.json(products);
    })
})

router.post('/', (req, res, next) => {
    // res.status(200).json(req.body);
    if(!req.body.name || !req.body.description || !req.body.price || !req.body.category){
        console.log('inside of the ifStatement');
        res.status(400).json({ message: 'You need to enter all the product info'})
    }else{
        console.log('passed if statement');
        Products.addProduct(req.body)
        .then(resp => {
            res.status(200).json(resp);
        })
    }
})


module.exports = router;