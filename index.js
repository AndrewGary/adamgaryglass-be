const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 9000;
const { errorHandler } = require('./middleware/errorMiddleware')

const productRouter = require('./routers/productRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}))

app.use('/api/products', productRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})