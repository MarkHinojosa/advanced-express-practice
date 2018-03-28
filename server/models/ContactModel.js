import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  occupation: {
    type: String
  },
  avatar: {
    type: String
  },
});

const Contact = mongoose.model("Contact", schema);

export default Contact;

