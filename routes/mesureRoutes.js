const express = require("express");
const router = express.Router();
const Mesure = require("../models/mesure");

function handleError(res, err) {
  if (err.name === "ValidationError" || err.name === "CastError") {
    return res.status(400).json({ message: "Données invalides" });
  }
  console.error(err);
  return res.status(500).json({ message: "Erreur serveur" });
}

// POST /api/mesures
router.post("/", async (req, res) => {
  try {
    const mesure = new Mesure(req.body);
    await mesure.save();
    return res.status(201).json(mesure);
  } catch (err) {
    return handleError(res, err);
  }
});

// GET /api/mesures?capteur=esp32-salle1&type=temperature&limit=50
router.get("/", async (req, res) => {
  try {
    const filtre = {};
    if (req.query.capteur) filtre.capteur = req.query.capteur;
    if (req.query.type) filtre.type = req.query.type;
    const parsedLimit = parseInt(req.query.limit, 10) || 50;
    const limit = Math.min(Math.max(parsedLimit, 1), 500);
    const mesures = await Mesure.find(filtre).sort({ date: -1 }).limit(limit);
    return res.json(mesures);
  } catch (err) {
    return handleError(res, err);
  }
});

module.exports = router;
