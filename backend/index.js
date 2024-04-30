const connectToMongo = require('./db'); // Assuming the file name is connectToMongo.js

connectToMongo();

const express = require('express');
const app = express();
const port = 5050;

app.listen(port, () => {
  console.log(`mynotebook is listening on ${port}`);
});
