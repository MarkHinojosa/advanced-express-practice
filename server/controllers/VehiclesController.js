import vehicles from "../vehicles.js";

export function list(request, response) {
  return response.json(vehicles);
}
export function show(request, response) {
  return response.json(vehicles.find(veh => veh._id == request.params.id));
}
export function create(request, response) {
  vehicles.push(request.body);
  return response.json(vehicles);
}
export function update(request, response) {
  return response.json(vehicles);
}
export function remove(request, response) {
  products.splice(vehicles.indexOf(vehicles.find(veh => veh._id == request.params.id)), 1);  
  return response.json(vehicles);
}
