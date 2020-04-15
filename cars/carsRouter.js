const express = require("express");

const cars = require("./carsModel");

const router = express.Router();

//get all cars
router.get("/", (req, res) => {
  cars
    .find()
    .then((cars) => res.status(200).json(cars))
    .catch((err) =>
      res
        .status(500)
        .json({ error: "The cars information could not be retrieved." })
    );
});

module.exports = router;
