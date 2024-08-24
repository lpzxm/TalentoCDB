// ObservacionController.js
import * as ObservacionModelo from '../model/observacionModel.js';

export const createObservation = async (req, res) => {
    try {
        const observation = await ObservacionModelo.createObservation(req.body);
        res.status(201).json(observation);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error al crear la observación.' });
    }
};

export const getAllObservations = async (req, res) => {
    try {
        const observations = await ObservacionModelo.getAllObservations();
        res.status(200).json(observations);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error al obtener las observaciones.' });
    }
};

export const getObservationById = async (req, res) => {
    try {
        const observation = await ObservacionModelo.getObservationById(parseInt(req.params.id));
        if (observation) {
            res.status(200).json(observation);
        } else {
            res.status(404).json({ error: 'Observación no encontrada.' });
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error al obtener la observación.' });
    }
};

export const updateObservation = async (req, res) => {
    try {
        const observation = await ObservacionModelo.updateObservation(parseInt(req.params.id), req.body);
        res.status(200).json(observation);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error al actualizar la observación.' });
    }
};

export const deleteObservation = async (req, res) => {
    try {
        await ObservacionModelo.deleteObservation(parseInt(req.params.id));
        res.status(204).json();
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error al eliminar la observación.' });
    }
};
