import Product from "../models/ProductsModel.js";

export function list(request, response) {

  Product.find({}).exec().then(prod => {
    return response.json(prod);
  })

}
export function show(request, response) {
  Product.findById(request.params.id).exec().then(prod => {
    return response.json(prod);
  })
}
export function create(request, response) {
  const product = new Product({
    name: request.body.name,
    description: request.body.description
  });

  product.save().then(prod => {
    return response.json(prod);
  })
}
export function update(request, response) {
  return response.json();
}
export function remove(request, response) {
  products.splice(products.indexOf(products.find(prod => prod._id == request.params.id)), 1);
  return response.json(products);
}