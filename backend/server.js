require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const taskRoutes = require('./routes/taskRoutes');
const gatewayRoutes = require('./routes/gatewayRoutes');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('API Running');
});

app.use('/api/tasks', taskRoutes);
app.use('/api/gateways', gatewayRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
