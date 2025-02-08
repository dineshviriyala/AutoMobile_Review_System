import express from "express";
import { getVehicles, addVehicle } from "../controllers/vehicleController.js";

const router = express.Router();

router.get("/", getVehicles);  // GET /api/vehicles
router.post("/", addVehicle);  // POST /api/vehicles

export default router;
