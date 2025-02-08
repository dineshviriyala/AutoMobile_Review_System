import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle", required: true },
    reviewer: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;
