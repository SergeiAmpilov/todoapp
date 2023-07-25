const { Router } = require("express");

const router = Router();


router.get('/', (req, res, next) => {
  res.render('index', {});
});


router.get('/new', (req, res, next) => {
  res.render('new', {});
});


router.post('/add', (req, res, next) => {
  res.send({
    ok: 'create new task'
  });
});

router.post('/complete', (req, res, next) => {
  res.send({
    ok: 'toggle complete task'
  });
});

router.post('/delete', (req, res, next) => {
  res.send({
    ok: 'delete task'
  });
});



module.exports = router;