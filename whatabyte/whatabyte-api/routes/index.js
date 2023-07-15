const express = require('express');
const router = express.Router();
const dbService = require('../db/dbService');
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

router.get('/menu-item/between-prices', async function(req, res, next) {
  const result = await db.getBetweenPrices();
  if(result.length !== 0) {
    res.json(result);
    return;
  }
  console.log('there is no result');
});

router.post('/menu-item', async function(req, res, next) {
  const result = await db.insertData(req.body);
  req.body.id = result.insertId

  res.json(req.body)
});

router.put('/menu-item/:id', async function(req, res, next) {
  const { id } = req.params;
  req.body.id = id
  const result = await db.updateData(req.body);

  res.json(req.body)
});

router.get('/menu-item/:id', async function(req, res, next) {
  const { id } = req.params;
  const result = await db.getById(id);

  res.json(result)
});

router.delete('/menu-item/:id',function(req, res, next) {
  const { id } = req.params;
  const result = db.deleteDataById(id);
  
  result
  .then(data => res.json({success : data}))
  .catch(err => console.log(err));
});

module.exports = router;
