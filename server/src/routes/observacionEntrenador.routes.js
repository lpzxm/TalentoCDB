import express from 'express';
import {
    obtenerObservacionesEntrenador,
    obtenerObservacionEntrenador,
    crearObservacionEntrenador,
    actualizarObservacionEntrenador,
    eliminarObservacionEntrenador
} from '../controllers/observacionEntrenadorController.js';

const router = express.Router();

router.get('/observaciones/entrenadores', obtenerObservacionesEntrenador);
router.get('/observaciones/entrenadores/:id', obtenerObservacionEntrenador);
router.post('/observaciones/entrenadores', crearObservacionEntrenador);
router.put('/observaciones/entrenadores/:id', actualizarObservacionEntrenador);
router.delete('/observaciones/entrenadores/:id', eliminarObservacionEntrenador);

export default router;
