// -------------------------------------------------- installed packages --------------------------------
require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const Cors = require('cors');
const cookieParser = require('cookie-parser');

const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');

// --------------------------------Custom Packages --------------------------------
const ConnectDB = require('./DB/connect');
const AuthRoutes = require('./Routes/AuthRoutes');
const ProductRoutes = require('./Routes/ProductRoutes');

const {
  NotFoundRouteMiddleware,
  ErrorHandlerMiddleware,
} = require('./Middlewares');

// const Products = require('./Models/Products');
// const mockedData = require('./DB/mockdata');

// -------------------------------- Middlewares --------------------------------
app.set('trust proxy', 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 60,
  })
);
app.use(helmet());
app.use(
  Cors({
    origin: (origin, callback) => {
      // Allow requests from any subdomain of localhost
      if (origin && origin.startsWith('http://localhost')) {
        return callback(null, true);
      }
      // allow requests from https://6526a68812a98a000815f90e--gleaming-scone-975fcf.netlify.app/
      else if (
        origin &&
        origin.startsWith(
          'https://6526a68812a98a000815f90e--gleaming-scone-975fcf.netlify.app/'
        )
      ) {
        return callback(null, true);
      }

      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
  })
);
app.use(xss());
app.use(morgan('combined'));
app.use(mongoSanitize());

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

// --------------------------------Custom Middlewares --------------------------------

app.use('/api/v1/auth', AuthRoutes);
app.use('/api/v1', ProductRoutes);

app.use(NotFoundRouteMiddleware);
app.use(ErrorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await ConnectDB(process.env.MONGO_URL);
    // await Products.insertMany(mockedData);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
