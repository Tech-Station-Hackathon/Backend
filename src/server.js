import compression from 'compression';
import express from 'express';

// Set enviroment
const app = express();
const PORT = process.env.PORT || 8080;

// Set Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

// Start App
app.listen(PORT, () => {
	console.log(`Servicio online http://localhost:${PORT}`);
});