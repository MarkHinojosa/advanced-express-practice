import Comment from "../models/CommentModel.js";

export function list(request, response) {
  Comment.find({}).exec().then(cont => {
    return response.json(cont);
  })
}
export function show(request, response) {
  Comment.findById(request.params.id).exec().then(com => {
    return response.json(com);
  })
}
export function create(request, response) {
  const comment = new Comment({
    body: request.body.body
  });

  comment.save().then(comm => {
    return response.json(comm);
  });
}

export function update(request, response) {
  return response.json();
}
export function remove(request, response) {
  comments.splice(comments.indexOf(comments.find(com => com._id == request.params.id)), 1);
  return response.json(comments);
}
