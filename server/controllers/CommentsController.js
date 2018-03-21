import comments from "../comments.js";

export function list(request, response) {
  return response.json(comments);
}
export function show(request, response) {
  return response.json(comments.find(comment => comment._id == request.params.id));
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
