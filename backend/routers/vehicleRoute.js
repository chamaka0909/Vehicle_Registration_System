const express = require("express");
const res = require("express/lib/response");
const vehicles = require("../models/vehicleModel");
const router = express.Router();

//save vehicle registration details

router.post("/vehicle/save", (req, res) => {
  let newVehicle = new vehicles(req.body);

  newVehicle.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Vehicle registered Succefully",
    });
  });
});

//get vehicle registration details

router.get("/vehicles", (req, res) => {
    vehicles.find().exec((err, vehiclereg) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      existingvehiclereg: vehiclereg,
    });
  });
});

//get specific vehicle registration details

router.get("/vehicle/:id", (req, res) => {
  let vehicleId = req.params.id;

  vehicles.findById(vehicleId, (err, vehiclereg) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      vehiclereg,
    });
  });
});

//update vehicle registration details

router.put("/vehicle/update/:id", (req, res) => {
  vehicles.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, vehiclereg) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: "Update Successfully",
      });
    }
  );
});

//delete vehicle registration details

router.delete("/vehicle/delete/:id", (req, res) => {
  vehicles.findByIdAndRemove(req.params.id).exec((err, deletedVehicle) => {
    if (err)
      return res.status(400).json({
        message: "Deleted unsuccesful",
        err,
      });

    return res.json({
      message: "Deleted Succesfull",
      deletedVehicle,
    });
  });
});

module.exports = router;
