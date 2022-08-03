const mongoose = require("mongoose");

const vehiclemodelSchema = new mongoose.Schema({
  
  licenseplate: {
    type: String,
    required: true,
  },

  vtype: {
    type: String,
    required: true,
  },

  ownername: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("vehicleregistration", vehiclemodelSchema);
