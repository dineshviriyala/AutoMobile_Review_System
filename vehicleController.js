import Vehicle from "../models/Vehicle.js";

export const addVehicle = async (req, res) => {
  try {
    const { type, brand, model, exterior, interior, description } = req.body;
    
    const vehicle = new Vehicle({
      type,
      brand,
      model,
      exterior,
      interior,
      description
    });

    const savedVehicle = await vehicle.save();
    res.status(201).json(savedVehicle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
