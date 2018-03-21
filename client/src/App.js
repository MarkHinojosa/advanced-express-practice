import React, { Component } from "react";
import "./App.css";
import Main from "./components/Main";
import VehicleCont from "./containers/VehicleCont";
import ProductCont from "./containers/ProductCont";
import CommentCont from "./containers/CommentCont";
import ContactCont from "./containers/ContactCont";


import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = { users: [] };
  }

  componentDidMount() {
    this.props.loadComments();
    this.props.loadContacts();
    this.props.loadVehicles();
    this.props.loadProducts();
  }
  render() {
    console.log(this.props)
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/product/:productId" component={ProductCont} />
            <Route path="/vehicle/:vehicleId" component={VehicleCont} />
            <Route path="/comment/:commentId" component={CommentCont} />  
            <Route path="/contact/:contactId" component={ContactCont} />                                  
            <Route path="/" component={Main} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}
export default (App);


