import express from "express";
import sequelize from "./db.js";
import Car from "./Car.js";
import cors from "cors";
import router from "./routes/CarRoutes.js";

var app = express();
app.use(express.json());
app.use(cors());
sequelize.sync().then(() => {
  console.log("db is ready");
});
app.post("/cars", function (req, res) {
  Car.create(req.body).then(() => {
    res.send("success!");
  });
});
app.use("/api/car", router);

app.listen(3000, function () {
  console.log("Example Server listening on port 3000!");
});
