import express from "express";
import { getReviewsByVehicle, addReview } from "../controllers/reviewController.js";

const router = express.Router();

router.get("/:vehicleId", getReviewsByVehicle);
router.post("/:vehicleId", addReview);

export default router;
