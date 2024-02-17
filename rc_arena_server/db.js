import { Sequelize } from "sequelize";

const sequelize = new Sequelize("libDB", "user", "pass", {
  dialect: "sqlite",
  host: "./database/cars.sqlite",
});

export default sequelize;
