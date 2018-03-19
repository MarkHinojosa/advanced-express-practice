import products from "../products";

export function list(request, response) {
  return response.json(products);
}
export function show(request, response) {
  return response.json(products.find(prod => prod._id == request.params.id));
}
export function create(request, response) {
  products.push(request.body);
  return response.json(products);
}
export function update(request, response) {
  return response.json({ theId: request.params.id });
}
export function remove(request, response) {
  products.splice(products.indexOf(products.find(prod => prod._id == request.params.id)), 1);
  return response.json(products);
}