require('dotenv').config();
const mongoose = require('mongoose');
const Gateway = require('./models/Gateway');

const dummyGateways = [
  { gatewayId: '2135', simId: '230GB', batchId: 'B-104', company: 'TJMAX', status: 'active', lastSeen: new Date('2026-02-12') },
  { gatewayId: '6935', simId: '111GB', batchId: 'B-208', company: 'HUBI', status: 'inactive', lastSeen: new Date('2026-08-23') },
  { gatewayId: '9510', simId: '300GB', batchId: 'B-301', company: 'ISIK', status: 'warning', lastSeen: new Date('2026-02-07') },
  { gatewayId: '6038', simId: '450GB', batchId: 'B-412', company: 'CLEVE', status: 'error', lastSeen: new Date('2026-10-11') },
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    await Gateway.deleteMany();
    await Gateway.insertMany(dummyGateways);
    console.log('Dummy data indsat!');
    process.exit();
  });