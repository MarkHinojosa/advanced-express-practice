import Vehicles from "../models/VehiclesModels.js";

export function list(request, response) {
  Vehicles.find({}).exec().then(cont => {
    return response.json(cont);
  })
}
export function show(request, response) {
  Vehicles.findById(request.params.id).exec().then(veh => {
    return response.json(veh);
  })
}
export function create(request, response) {
  vehicles.push(request.body);
  return response.json(vehicles);
}
export function update(request, response) {
  return response.json();
}
export function remove(request, response) {
  products.splice(vehicles.indexOf(vehicles.find(veh => veh._id == request.params.id)), 1);
  return response.json(vehicles);
}
