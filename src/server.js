import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import connectDB from './config/db.js';

// Inicializar conexión a MongoDB Atlas
connectDB();

const app = express();

// Middlewares globales
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Ruta de salud del servicio
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'admision-2026-api' });
});

// TODO: Registrar aquí las rutas de cada módulo (src/modules/**/*.routes.js)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[Server] Escuchando en el puerto ${PORT}`);
});
