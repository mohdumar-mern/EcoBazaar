import express from 'express';
import morgan from "morgan";

// Import Routes
import productsRoutes from './routes/productsRoute.js';
import usersRoutes from './routes/userRoutes.js';

// Import Middlewares
import { errorHandler, errorHandling } from './middleware/errorHandlingMiddleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"))




app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1', productsRoutes);
app.use('/api/v1', usersRoutes);


// Middleware for handling errors
app.use(errorHandling);
app.use(errorHandler)



export default app;