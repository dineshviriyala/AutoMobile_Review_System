import Review from "../models/Review.js";
import Vehicle from "../models/Vehicle.js";

export const getReviewsByVehicle = async (req, res) => {
    try {
        const reviews = await Review.find({ vehicle: req.params.vehicleId });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addReview = async (req, res) => {
    try {
        const review = new Review({
            vehicle: req.params.vehicleId,
            ...req.body,
        });

        await review.save();

        await Vehicle.findByIdAndUpdate(req.params.vehicleId, {
            $push: { reviews: review._id },
        });

        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
