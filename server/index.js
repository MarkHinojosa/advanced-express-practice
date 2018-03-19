import express from "express";
// import comments from "./comments";
// import products from "./products";
// import vehicles from "./vehicles";
// import contacts from "./contacts";


//******implemented Model View Controller(MVC) design pattern with express routes*****
import ContactsRoutes from './routes/ContactsRoutes';
import VehiclesRoutes from './routes/VehiclesRoutes';
import CommentsRoutes from './routes/CommentsRoutes';
import ProductsRoutes from './routes/ProductsRoutes';

const bodyParser = require("body-parser"),
  app = express();

app.use(bodyParser.json());
app.use(ContactsRoutes);
app.use(VehiclesRoutes);
app.use(CommentsRoutes);
app.use(ProductsRoutes);

// app.get("/contacts",function(request,response,next){
//   response.json(contacts);
// });

// app.get('/contacts/:contactId',function(request,response,next){
//   const contactIdNum = parseInt(request.params.contactId);
//   response.json(contacts.find( contact => contact._id === contactIdNum ))
// });

// app.get('/vehicles',function(request,response,next){
//   response.json(vehicles);
// });

// app.get('/vehicles/:vehicleId',function(request,response,next){
//   const vehicleIdNum = parseInt(request.params.vehicleId);
//   response.json(vehicles.find( vehicle => vehicle._id === vehicleIdNum ))
// });

// app.get('/comments',function(request,response,next){
//   response.json(comments);
// });

// app.get('/comments/:commentId',function(request,response,next){
//   const commentIdNum = parseInt(request.params.commentId);
//   response.json(comments.find( comment => comment._id === commentIdNum ))
// });

// app.get('/products',function(request,response,next){
//   response.json(products);
// });

// app.get('/products/:productId',function(request,response,next){
//   const productIdNum = parseInt(request.params.productId);
//   response.json(products.find( product => product._id === productIdNum ))
// });

// app.post('/contacts', function (request, response, next) {
//   contacts.push(request.body);
//   response.json(contacts);
// });

// app.post('/vehicles', function (request, response, next) {
//   vehicles.push(request.body);
//   response.json(vehicles);
// });

// app.post('/comments', function (request, response, next) {
//   comments.push(request.body);
//   response.json(comments);
// });

// app.post('/products', function (request, response, next) {
//   products.push(request.body);
//   response.json(products);
// });

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

