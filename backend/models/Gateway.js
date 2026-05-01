const mongoose = require('mongoose');

const gatewaySchema = new mongoose.Schema({
  gatewayId: String,
  simId: String,
  batchId: String,
  company: String,
  status: String,
  lastSeen: Date,
});

module.exports = mongoose.model('Gateway', gatewaySchema);