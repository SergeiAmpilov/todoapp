const { Router } = require("express");

const router = Router();


router.get('/', (req, res, next) => {
  res.send({
    ok: 'Main page'
  });
});


router.get('/new', (req, res, next) => {
  res.send({
    ok: 'page new task'
  });
});




module.exports = router;