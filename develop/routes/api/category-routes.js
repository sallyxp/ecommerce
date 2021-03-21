const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products


    try {
      const CategoryData = await Category.findAll();
      res.status(200).json(CategoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/:id', (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      // JOIN with locations, using the Trip through table
      include: [{ model: Product }]
    });

    if (!CategoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Create a category
router.post('/', (req, res) => {
  // create a new category
 
    try {
      const CategoryData = await Category.create(req.body);
      res.status(200).json(CategoryData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

//Update a category  
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(CategoryData => {
    if(!CategoryData[0]) {
      res.status(404).json({ message: 'No category found with this id.' });
      return; 
    }
    res.json(CategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

//Delete a category
router.delete('/:id', (req, res) => {
  try {
    const CategoryData = await Category.destroy({
      where: {
        category_id: req.params.id
      }
    });

    if (!CategoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
