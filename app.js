const express = require('express');
const {
  PORT, DB_NAME,
} = require('./constants/constants');
const router = require('./routes/router');
const mongoose = require('mongoose');



const app = express();

app.use(router);


async function init() {

  try {
    await mongoose.connect(`mongodb://0.0.0.0:27017/${DB_NAME}`);
    console.log(`[mongo] Connected to database success: ${DB_NAME}`);
  } catch (e) {
    console.log('[error] Cannot connect to database', e);
  }

  const server = app.listen(PORT, () => {
    console.log(`[express] Server started at http://localhost:${PORT}/`);
  });

}

init();