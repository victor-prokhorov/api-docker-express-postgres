const pool = require('../db.js');

exports.book_list = async function(req, res) {
  try {
    const allBooks = await pool.query('SELECT * FROM books');
    res.json(allBooks.rows);
  } catch (err) {
    console.error(err.message);
  }
};

exports.book_create = async function(req, res) {
  try {
    const { description } = req.body;

    const newBook = await pool.query(
      'INSERT INTO books (description) VALUES($1) RETURNING *',
      [description]
    )
    res.json(newBook.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
};
