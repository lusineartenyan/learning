const express = require("express");
const router = express.Router();
const dbService = require("../db/dbService");
const db = dbService.getDbServiceInstance();

router.get('/', async function(req, res, next) {
    const result = await db.getAllData(req.query.nameLike);
  
    res.json(result)
});

router.post("/menu-item", async function (req, res, next) {
  const result = await db.insertData(req.body);
  req.body.id = result.insertId;

  res.json(req.body);
});

module.exports = router;