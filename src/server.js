import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import connectDB from './config/db.js';
import postulanteRoutes from './modules/postulante/postulante.routes.js';

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

// Rutas de cada módulo (Feature-Based)
app.use('/api/postulantes', postulanteRoutes);

// TODO: registrar aquí las rutas de los próximos módulos (carrera, convocatoria, etc.)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`[Server] Escuchando en el puerto ${PORT}`);
});
