const { Router } = require("express");

const router = Router();


router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Список дел',
    description: 'Приложение - список дел',
    h1: 'Список дел',
    text: 'Привет! Давай составим список дел, <br>чтобы ничего не забыть!'
  });
});


router.get('/new', (req, res, next) => {
  res.render('new', {
    title: 'Создать новое дело',
    description: 'Создать новое дело в приложении Список дел',
    h1: 'Создать новое дело',
    text: 'Привет! Давай создадим новое дело, <br>чтобы не забыть его!'
  });
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