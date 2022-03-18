import compression from 'compression';
import express from 'express';
import routes from './routes.js';

// Set enviroment
const app = express();
const PORT = process.env.PORT || 8080;

// Set Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

// Set Routes
app.use('/', routes);

// Start App
app.listen(PORT, () => {});