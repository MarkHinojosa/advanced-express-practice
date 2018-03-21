import contacts from "../contacts";

export function list(request, response) {
  return response.json(contacts);
}
export function show(request, response) {
  return response.json(contacts.find(contact => contact._id == request.params.id));
}
export function create(request, response) {
  contacts.push(request.body);
  return response.json(contacts);
}
export function update(request, response) {
  return response.json();
}
export function remove(request, response) {
  contacts.splice(contacts.indexOf(contacts.find(con => con._id == request.params.id)), 1);
  return response.json(contacts);
}
