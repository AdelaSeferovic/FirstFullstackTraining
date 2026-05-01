const express = require('express');
const router = express.Router();
const Gateway = require('../models/Gateway');

// Hent alle gateways
router.get('/', async (req, res) => {
  const gateways = await Gateway.find();
  res.json(gateways);
});

// Hent statistik til kortene øverst
router.get('/stats', async (req, res) => {
  const active = await Gateway.countDocuments({ status: 'active' });
  const inactive = await Gateway.countDocuments({ status: 'inactive' });
  const warning = await Gateway.countDocuments({ status: 'warning' });
  const error = await Gateway.countDocuments({ status: 'error' });
  res.json({ active, inactive, warning, error });
});

module.exports = router;