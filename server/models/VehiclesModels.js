import mongoose from "mongoose";

const schema = new mongoose.Schema({
  year: {
    type: String,
  },
  make: {
    type: String,
  },
  model: {
    type: String,
  }
});

const Vehicle = mongoose.model("Vehicle", schema);

export default Vehicle;
  
