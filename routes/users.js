var express = require('express');
var router = express.Router();
var pool = require('../db.js');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.send('Maybe you are so cool');
});

router.get('/cool/:num', function(req, res, next) {
  const num = req.params.num;
  if (num > 5) res.json('You are cool');
  res.json('You are not so cool'); 
});

router.post('/psql', async (req, res) => {
  try {
    const { description } = req.body;

    const newUser = await pool.query(
      'INSERT INTO users (description) VALUES($1) RETURNING *',
      [description]
    )
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
})

module.exports = router;
