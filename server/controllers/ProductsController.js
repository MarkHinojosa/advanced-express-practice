import Products from "../models/ProductsModel.js";

export function list(request, response) {

  Products.find({}).exec().then(prod => {
    return response.json(prod);
  })

}
export function show(request, response) {
  Products.findById(request.params.id).exec().then(prod => {
    return response.json(prod);
  })
}
export function create(request, response) {
  products.push(request.body);
  return response.json(products);
}
export function update(request, response) {
  return response.json();
}
export function remove(request, response) {
  products.splice(products.indexOf(products.find(prod => prod._id == request.params.id)), 1);
  return response.json(products);
}