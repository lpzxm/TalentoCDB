// ObservacionRoute.js
import express from 'express';
import * as ObservacionController from '../controllers/observacionController.js';
import { auth } from '../middlewares/auth.js';

const router = express.Router();

// Ruta para crear una nueva observación
router.post('/observaciones', ObservacionController.createObservation);

// Ruta para obtener todas las observaciones
router.get('/observaciones', ObservacionController.getAllObservations);

// Ruta para obtener una observación por ID
router.get('/observaciones/:id', ObservacionController.getObservationById);

// Ruta para actualizar una observación por ID
router.put('/observaciones/:id', ObservacionController.updateObservation);

// Ruta para eliminar una observación por ID
router.delete('/observaciones/:id', ObservacionController.deleteObservation);

export default router;