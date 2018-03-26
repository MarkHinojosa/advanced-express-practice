import Contact from "../models/ContactModel.js";

export function list(request, response) {

  Contact.find({}).exec().then(cont => {
    return response.json(cont);
  })
}
export function show(request, response) {
  Contact.findById(request.params.id).exec().then(contact => {
    return response.json(contact);
  })
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
