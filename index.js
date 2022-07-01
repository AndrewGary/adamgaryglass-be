const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 9000;
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db');

const cors = require('cors');

connectDB();

const productRouter = require('./routers/productRouter');

const app = express();
app.use(cors());

app.use(express.json({ limit: '50mb'}));
app.use(express.urlencoded({ extended: false}))

app.use('/api/products', productRouter);


app
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})