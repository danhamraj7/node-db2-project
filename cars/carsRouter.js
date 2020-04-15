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

// get a car by car id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  cars
    .findById(id)
    .then((car) => {
      if (car) {
        res.json(car);
      } else {
        res
          .status(404)
          .json({ message: "Could not find the car with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get car" });
    });
});

// add a car
router.post("/", (req, res) => {
  const newCar = req.body;
  //console.log(newCar);
  cars
    .insert(newCar)
    .then((result) => res.status(201).json(result))
    .catch((err) =>
      res.status(400).json({
        errorMessage:
          "Please provide VIN, make, model, milage, transmission, title for the car.",
      })
    );
});

//update a car

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  cars
    .findById(id)
    .then((car) => {
      if (car) {
        cars.update(changes, id).then((updatedCar) => {
          res.json({ updated: updatedCar });
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find the car with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update car" });
    });
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  cars
    .remove(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: "Could not find car with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete car" });
    });
});

module.exports = router;
