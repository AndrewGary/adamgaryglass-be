const { MongoClient, ServerApiVersion } = require('mongodb');

const server = require('./api/server.js');

server.get('/', (req, res, next) => {
    
})

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
