import express from "express";

//******implemented Model View Controller(MVC) design pattern with express routes*****
import ContactsRoutes from './routes/ContactsRoutes';
import VehiclesRoutes from './routes/VehiclesRoutes';
import CommentsRoutes from './routes/CommentsRoutes';
import ProductsRoutes from './routes/ProductsRoutes';




var mongoose = require('mongoose');
mongoose.connect("mongodb://markhinojosa:mh12345@ds011863.mlab.com:11863/aca");
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });

const bodyParser = require("body-parser"),
  app = express();

app.use(bodyParser.json());
app.use(ContactsRoutes);
app.use(VehiclesRoutes);
app.use(CommentsRoutes);
app.use(ProductsRoutes);



const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});

