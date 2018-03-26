import mongoose from "mongoose";

const schema = new mongoose.Schema({
  firstName: {
    required: true,
    type: String
  },
  lastName: {
    required: true,
    type: String
  },
  address: {
    required: true,
    type: String
  },
  phone: {
    required: true,
    type: String
  },
  occupation: {
    type: String
  },
  avatar: {
    type: String
  },
});

const Contacts = mongoose.model("Contact", schema);

export default Contacts;

