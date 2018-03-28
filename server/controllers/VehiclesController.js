import Vehicle from "../models/VehiclesModels.js";

export function list(request, response) {
  Vehicle.find({}).exec().then(cont => {
    return response.json(cont);
  })
}
export function show(request, response) {
  Vehicle.findById(request.params.id).exec().then(veh => {
    return response.json(veh);
  })
}
export function create(request, response) {
  const vehicle = new Vehicle({
    year: request.body.year,
    make: request.body.make,
    model: request.body.model
  });

  vehicle.save().then(veh => {
    return response.json(veh);
  })
}
export function update(request, response) {
  return response.json();
}
export function remove(request, response) {
  vehicle.splice(vehicle.indexOf(vehicle.find(veh => veh._id == request.params.id)), 1);
  return response.json(vehicle);
}
