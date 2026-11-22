
import express from "express";

import {
  createLead,
  getAllLeads,
  updateLead,
  deleteLead,
} from "../controllers/leadController.js";

const router = express.Router();

// GET all leads + search + filter
router.get("/", getAllLeads);

// CREATE lead
router.post("/", createLead);

// UPDATE lead
router.put("/:id", updateLead);

// DELETE lead
router.delete("/:id", deleteLead);

export default router;
