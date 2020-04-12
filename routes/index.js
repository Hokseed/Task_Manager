const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('pages/accueil');
});

/* GET add task page. */
router.get('/add-task', (req, res) => {
  res.render('pages/addTask');
});
/* GET update task page. */
router.get('/update-task', (req, res) => {
  res.render('pages/editTask');
});

/* GET add tag page. */
router.get('/add-tag', (req, res) => {
  res.render('pages/addTag');
});
/* GET update tag page. */
router.get('/update-tag', (req, res) => {
  res.render('pages/editTag');
});

module.exports = router;
