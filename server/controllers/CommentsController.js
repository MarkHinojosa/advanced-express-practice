import Comments from "../models/CommentModel.js";

export function list(request, response) {
  Comments.find({}).exec().then(cont => {
    return response.json(cont);
  })
}
export function show(request, response) {
  Comments.findById(request.params.id).exec().then(com => {
    return response.json(com);
  })
}
export function create(request, response) {
  comments.push(request.body);
  return response.json(comments);
}
export function update(request, response) {
  return response.json();
}
export function remove(request, response) {
  comments.splice(comments.indexOf(comments.find(com => com._id == request.params.id)), 1);
  return response.json(comments);
}
