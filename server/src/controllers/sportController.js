import { getAllSport, createSport, getSportById, updateSport, deleteSport } from "../model/sportModel.js";
import { createCategoryBySport, updateCategory, deleteCategory, addPlayerToCategory, removePlayerToCategory, getCategory } from "../model/categoryModel.js";
import { cloudinary } from "../config/cloudinary.js";
export const getSports = async (req, res) => {
    try {
        const sports = await getAllSport();
        return res.json(sports);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


export const createNewSport = async (req, res) => {
    try {
        const datos = req.body;
        const sport = await createSport(datos, req.file);
        return res.status(201).json(sport);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const getSport = async (req, res) => {
    try {
        const id_deporte = +req.params.id;
        const sport = await getSportById(id_deporte);
        if (sport) {
            return res.json(sport);
        } else {
            return res.status(404).json({ error: "Sport not found" });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const updateSportDetails = async (req, res) => {
    try {
        const id_deporte = +req.params.id;
        const datos = req.body;
        const sport = await updateSport(id_deporte, datos);
        if (sport) {
            return res.json(sport);
        } else {
            return res.status(404).json({ error: "Sport not found" });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const deleteSportRecord = async (req, res) => {
    try {
        const id_deporte = +req.params.id;
        const sportDeleted = await deleteSport(id_deporte);
        if (sportDeleted) {
            return res.json(sportDeleted);
        } else {
            return res.status(404).json({ error: "Sport not found" });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const createSportCategory = async (req, res) => {
    try {
        const id_deporte = +req.params.id
        const datos = req.body;

        const b64 = Buffer.from(req.file.buffer).toString("base64");
        let dataURI = "data:" + req.file.mimetype + ";base64," + b64;

        const img = await cloudinary.uploader.upload(dataURI, {
            resource_type: "auto",
        })

        datos.img = img.url

        const category = await createCategoryBySport(id_deporte, datos);
        return res.json(category)
    } catch (error) {
        return res.status(500).json({ error: "hubo un error en el servidor" });

    }
}
export const updateSportCategory = async (req, res) => {
    try {
        const id_categoria = +req.params.id_categoria
        const datos = req.body;

        if (req.file) {
            const b64 = Buffer.from(req.file.buffer).toString("base64");
            let dataURI = "data:" + req.file.mimetype + ";base64," + b64;

            const img = await cloudinary.uploader.upload(dataURI, {
                resource_type: "auto",
            })

            datos.img = img.url
        }

        const category = await updateCategory(id_categoria, datos);
        return res.json(category)
    } catch (error) {
        return res.status(500).json({ error: "hubo un error en el servidor" });

    }
}
export const deleteSportCategory = async (req, res) => {
    try {
        const id_categoria = +req.params.id_categoria;
        const categoryDeleted = await deleteCategory(id_categoria);
        if (categoryDeleted) {
            return res.json(categoryDeleted);
        } else {
            return res.status(404).json({ error: "Category not found" });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
export const getCategorySport = async (req, res) => {
    try {
        const id_categoria = +req.params.id_categoria;

        const categoryFound = await getCategory(id_categoria);
        if (categoryFound) {
            return res.json(categoryFound);
        } else {
            return res.status(404).json({ error: "Category not found" });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const addPlayer = async (req, res) => {
    try {
        const { id_categoria, id_player } = req.params;
        const result = await addPlayerToCategory(+id_categoria, +id_player);
        if (result.error) {
            return res.status(400).json({ error: result.error });
        }
        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const removePlayer = async (req, res) => {
    try {
        const { id_categoria, id_player } = req.params;
        const result = await removePlayerToCategory(+id_categoria, +id_player);
        if (result.error) {
            return res.status(400).json({ error: result.error });
        }
        return res.json({ message: result });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};