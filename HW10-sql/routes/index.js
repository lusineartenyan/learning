const express = require('express');
const router = express.Router();
const dbService = require('../dbService');
const db = dbService.getDbServiceInstance();

/* GET home page and items */
router.get('/', async function(req, res, next) {
  const result = await db.getAllData(req.query.nameLike);

  res.json(result)
});

router.get('/menu-item/most-expensive-price', async function(req, res, next) {
  const result = await db.getMaxPrice();

  res.json(result)
});

router.post('/menu-item', async function(req, res, next) {
  const result = await db.insertData(req.body);
  req.body.id = result.insertId

  res.json(req.body)
});

router.delete('/menu-item/:id', function(req, res, next) {
  const { id } = req.params;
  const result = db.deleteDataById(id);
  
  result
  .then(data => res.json({success : data}))
  .catch(err => console.log(err));
});

module.exports = router;
