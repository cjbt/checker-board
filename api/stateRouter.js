const express = require('express');
const db = require('../models/stateModel');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let result = await db.get();
    res.status(200).json({ state: JSON.parse(result.state) });
  } catch (error) {
    console.error({ message: error.message });
  }
});

router.put('/', async (req, res) => {
  const { state } = req.body;
  try {
    let result = await db.update(1, { state: JSON.stringify(state) });
    res.status(200).json(result);
  } catch (error) {
    console.error({ message: error.message });
  }
});

module.exports = router;
