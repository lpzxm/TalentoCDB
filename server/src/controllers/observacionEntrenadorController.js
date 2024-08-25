import {
    getObservacionesEntrenador,
    getObservacionEntrenadorById,
    createObservacionEntrenador,
    updateObservacionEntrenador,
    deleteObservacionEntrenador
} from '../model/observacionEntrenadorModel.js';

export const obtenerObservacionesEntrenador = async (req, res) => {
    try {
        const observaciones = await getObservacionesEntrenador();
        res.json(observaciones);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las observaciones de los entrenadores' });
    }
};

export const obtenerObservacionEntrenador = async (req, res) => {
    try {
        const { id } = req.params;
        const observacion = await getObservacionEntrenadorById(id);
        if (!observacion) {
            return res.status(404).json({ error: 'Observación no encontrada' });
        }
        res.json(observacion);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la observación del entrenador' });
    }
};

export const crearObservacionEntrenador = async (req, res) => {
    try {
        const nuevaObservacion = await createObservacionEntrenador(req.body);
        res.status(201).json(nuevaObservacion);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al crear la observación del entrenador' });
    }
};

export const actualizarObservacionEntrenador = async (req, res) => {
    try {
        const { id } = req.params;
        const observacionActualizada = await updateObservacionEntrenador(id, req.body);
        res.json(observacionActualizada);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la observación del entrenador' });
    }
};

export const eliminarObservacionEntrenador = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteObservacionEntrenador(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la observación del entrenador' });
    }
};
