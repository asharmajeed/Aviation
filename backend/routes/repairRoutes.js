import express from "express";
import Repair from "../models/repair.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { componentType, username, repairDate, expireDate } = req.body;
  try {
    const newRepair = new Repair({
      componentType,
      username,
      repairDate,
      expireDate,
    });
    await newRepair.save();
    res.json(newRepair);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/:componentType", async (req, res) => {
  try {
    const repairs = await Repair.find({
      componentType: req.params.componentType,
    });
    res.json(repairs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;
