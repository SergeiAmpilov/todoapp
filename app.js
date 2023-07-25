const express = require('express');
const {
  PORT,
} = require('./constants/constants');
const router = require('./routes/router');




async function init() {
  const app = express();

  // routes
  app.use(router);


  const server = app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}/`);
  });

}

init();