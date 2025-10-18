
export const errorHandling = (err, req, res, next) => {
    console.error(err.stack);

    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map((error) => error.message);
      res.status(400).json({ message: errors });
    } else if (err.name === 'CastError') {
      res.status(400).json({ message: 'Invalid ID format' });
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    
    if (err.isOperational) {
      return res.status(err.statusCode).json({ message: err.message });
    } 
    
    console.error(err);

    return res.status(500).json({ message: 'Internal Server Error' });
  };
  
