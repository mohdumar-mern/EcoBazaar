import express from 'express';

import productsRoutes from './routes/productsRoute.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1', productsRoutes);




export default app;