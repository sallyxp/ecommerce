const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

 /// Category.findAll().then((bookData) => {
 ///  res.json(bookData);
 /// });

});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  
  /// Find a single book by its primary key (book_id)
 /// Book.findByPk(req.params.id).then((bookData) => {
 ///   res.json(bookData);
 // });
});

router.post('/', (req, res) => {
  // create a new category
 /// Book.create(req.body)
 /// .then((newBook) => {
 ///   res.json(newBook);
 /// })
 /// .catch((err) => {
 ///   res.json(err);
 /// });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
   // // Calls the update method on the Book model
    Book.update(
      {
        // All the fields you can update and the data attached to the request body.
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn,
        pages: req.body.pages,
        edition: req.body.edition,
        is_paperback: req.body.is_paperback,
      },
      {
        // Gets the books based on the isbn given in the request parameters
        where: {
          isbn: req.params.isbn,
        },
      }
    )
      .then((updatedBook) => {
        // Sends the updated book as a json response
        res.json(updatedBook);
      })
      .catch((err) => res.json(err))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
   // Looks for the books based on isbn given in the request parameters and deletes the instance from the database
   Book.destroy({
    where: {
      isbn: req.params.isbn,
    },
  })
    .then((deletedBook) => {
      res.json(deletedBook);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
