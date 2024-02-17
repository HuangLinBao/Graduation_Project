import { Router } from "express";
import Car from "../Car.js";

const router = Router();

router.get("/getName/:carId", async (req, res) => {
  const { carId } = req.params;

  try {
    const car = await Car.findOne({ where: { carId: carId } });
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    // Return the current HP
    return res.status(200).json({ name: car.name });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/:carId", async (req, res) => {
  const { carId } = req.params;

  try {
    const car = await Car.findOne({ where: { carId: carId } });
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    // Return all data of the car
    return res.status(200).json({
      carId: car.carId,
      name: car.name,
      healthPoints: car.healthPoints,
      specialAbilityStatus: car.specialAbilityStatus,
      overallScore: car.overallScore,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/getHP/:carId", async (req, res) => {
  const { carId } = req.params;

  try {
    const car = await Car.findOne({ where: { carId: carId } });
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    // Return the current HP
    return res.status(200).json({ healthPoints: car.HealthPoints });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/deductHP/:carId", async (req, res) => {
  const { carId } = req.params;
  const { damage } = req.body;

  try {
    const car = await Car.findOne({ where: { carId: carId } });
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    // Deduct HP logic based on damage
    car.HealthPoints -= damage;
    await car.save();

    return res.status(200).json(car);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/triggerSpecialAbility/:carId", async (req, res) => {
  const { carId } = req.params;

  try {
    const car = await Car.findOne({ where: { carId: carId } });
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    // Trigger special ability logic
    car.specialAbilityStatus = !car.specialAbilityStatus;
    await car.save();

    return res.status(200).json(car);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/updateScore/:carId", async (req, res) => {
  const { carId } = req.params;
  const { score } = req.body;

  try {
    const car = await Car.findOne({ where: { carId: carId } });
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    // Update score logic
    car.overallScore += score;
    await car.save();

    return res.status(200).json(car);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/resetHealth/:carId", async (req, res) => {
  const { carId } = req.params;

  try {
    const car = await Car.findOne({ where: { carId: carId } });
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    // Reset health points logic
    car.HealthPoints = 100;

    await car.save();

    return res.status(200).json(car);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/resetScore/:carId", async (req, res) => {
  const { carId } = req.params;

  try {
    const car = await Car.findOne({ where: { carId: carId } });
    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    // Reset score logic
    car.overallScore = 0;

    await car.save();

    return res.status(200).json(car);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
