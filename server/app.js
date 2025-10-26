import express from 'express';
import morgan from "morgan";
import cookieParser from 'cookie-parser';

// Import Routes
import productsRoutes from './routes/productsRoute.js';
import usersRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoute.js';

// Import Middlewares
import { errorHandler, errorHandling } from './middleware/errorHandlingMiddleware.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"))
app.use(cookieParser());




app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1', productsRoutes);
app.use('/api/v1', usersRoutes);
app.use('/api/v1', orderRoutes);


// Middleware for handling errors
app.use(errorHandling);
app.use(errorHandler)



export default app;