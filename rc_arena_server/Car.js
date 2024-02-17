import { Model, DataTypes } from "sequelize";
import sequelize from "./db.js";
class Car extends Model {}

Car.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    carId: {
      type: DataTypes.STRING,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    HealthPoints: {
      type: DataTypes.INTEGER,
    },
    specialAbilityStatus: {
      type: DataTypes.BOOLEAN,
    },
    overallScore: {
      type: DataTypes.INTEGER,
    },
  },

  {
    sequelize,
    modelName: "books",
  }
);

export default Car;
