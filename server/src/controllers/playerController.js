import { getAllPlayers, createjugador, getPlayerById, updatePlayer, deletejugador, uploadReporteAcademico } from "../model/playersModel.js";

export const getPlayers = async (req, res) => {
    try {
        const players = await getAllPlayers();
        return res.json(players);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const createNewPlayer = async (req, res) => {
    try {
        const datos = req.body;
        const result = await createjugador(datos);
        if (result.error) {
            return res.status(400).json({ error: result.error });
        }
        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const getPlayer = async (req, res) => {
    try {
        const id_player = +req.params.id;
        const player = await getPlayerById(id_player);
        if (player) {
            return res.json(player);
        } else {
            return res.status(404).json({ error: "Player not found" });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const updatePlayerDetails = async (req, res) => {
    try {
        const id_player = +req.params.id;
        const datos = req.body;
        const result = await updatePlayer(id_player, datos);
        if (result.error) {
            return res.status(400).json({ error: result.error });
        }
        if (result === "Hubo un error con el servidor") {
            return res.status(500).json({ error: result });
        }
        return res.json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const deletePlayerRecord = async (req, res) => {
    try {
        const id_player = +req.params.id;
        const result = await deletejugador(id_player);
        if (result === "Hubo un error con el servidor") {
            return res.status(500).json({ error: result });
        }
        return res.json({ message: result });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const uploadReporteAcademicoFile = async (req, res) => {
    try {
        const id_player = +req.params.id

        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;

        const img = await cloudinary.uploader.upload(dataURI, {
            resource_type: "auto",
        })


        const category = await uploadReporteAcademico(id_player, img.url);
        return res.json(category)
    } catch (error) {
        return res.status(500).json({ error: "hubo un error en el servidor" });

    }
}