import mongoose from "mongoose";

const schema = new mongoose.Schema({
  body: {
    type: String
  },
});

const Comment = mongoose.model("Comment", schema);

export default Comment;