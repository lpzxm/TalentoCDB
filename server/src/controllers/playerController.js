import {
  getAllPlayers,
  createjugador,
  getPlayerById,
  updatePlayer,
  deletejugador,
  uploadReporteAcademico,
  uploadReporteConductual,
} from "../model/playersModel.js";
import { cloudinary } from "../config/cloudinary.js";
import { prisma } from "../config/prisma.js";
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
    const id_player = req.usuario.id;

    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;

    const img = await cloudinary.uploader.upload(dataURI, {
      resource_type: "auto",
    });

    const category = await uploadReporteAcademico(id_player, img.secure_url);
    return res.json(category);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "hubo un error en el servidor" });
  }
};
export const uploadReporteConductualFile = async (req, res) => {
  try {
    const id_player = req.usuario.id;

    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;

    const img = await cloudinary.uploader.upload(dataURI, {
      resource_type: "auto",
    });

    const category = await uploadReporteConductual(id_player, img.secure_url);
    return res.json(category);
  } catch (error) {
    return res.status(500).json({ error: "hubo un error en el servidor" });
  }
};
export const fillRubrica = async (req, res) => {
  const rubricScores = req.body;

  try {
    // Ejecutamos todas las operaciones de manera paralela con Promise.all
    const results = await Promise.all(
      rubricScores.map(async (score) => {
        // Verificamos si ya existe un score para este jugador y campo de rúbrica
        const existingScore = await prisma.rubric_Score_player.findFirst({
          where: {
            id_player: score.id_player,
            id_rubric_field: score.id_rubric_field,
          },
        });

        if (existingScore) {
          // Si existe, lo actualizamos
          return prisma.rubric_Score_player.update({
            where: {
              id: existingScore.id,
            },
            data: {
              score: score.score,
            },
          });
        } else {
          // Si no existe, lo creamos
          return prisma.rubric_Score_player.create({
            data: {
              score: score.score,
              id_player: score.id_player,
              id_rubric_field: score.id_rubric_field,
            },
          });
        }
      })
    );

    res.status(200).json(results);
  } catch (error) {
    console.error("Error al insertar o actualizar puntajes de rúbrica:", error);
    res
      .status(500)
      .json({ error: "Error al insertar o actualizar puntajes de rúbrica" });
  }
};

export const getRubricaScores = async (req, res) => {
  const userId = req.params.id;

  try {
    // Buscamos los puntajes de rúbrica asociados al usuario especificado
    const scores = await prisma.rubric_Score_player.findMany({
      where: {
        id_player: parseInt(userId), // Asegúrate de que el ID es un número
      },
      include: {
        rubric: true, // Incluye detalles del campo de rúbrica si es necesario
      },
    });

    // Si no se encuentran puntajes, devolvemos una respuesta vacía o un mensaje adecuado
    if (scores.length === 0) {
      return res
        .status(404)
        .json({
          message: "No se encontraron puntajes para el usuario especificado.",
        });
    }

    // Devolvemos los puntajes encontrados
    res.status(200).json(scores);
  } catch (error) {
    console.error("Error al obtener los puntajes de rúbrica:", error);
    res.status(500).json({ error: "Error al obtener los puntajes de rúbrica" });
  }
};

export const updatePlayerStatus = async (req, res) => {
  const userId = req.params.id;
  const { status_main_sport } = req.body;

  // Validación simple
  if (!["aceptado", "rechazado"].includes(status_main_sport)) {
    return res
      .status(400)
      .json({ message: 'Estado inválido. Debe ser "aceptado" o "rechazado".' });
  }

  try {
    // Busca al jugador en la base de datos usando el userId
    const player = await prisma.jugador.findUnique({
      where: { id: parseInt(userId) },
    });

    if (!player) {
      return res.status(404).json({ message: "Jugador no encontrado." });
    }

    // Actualiza el estado del jugador
    const updatedPlayer = await prisma.jugador.update({
      where: { id: parseInt(userId) },
      data: { status_main_sport },
    });

    res
      .status(200)
      .json({
        message: "Estado del jugador actualizado exitosamente.",
        player: updatedPlayer,
      });
  } catch (error) {
    console.error("Error al actualizar el estado del jugador:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};
