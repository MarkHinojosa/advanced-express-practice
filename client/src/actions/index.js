export function loadContacts() {
  return function (dispatch) {
    fetch("/contacts")
      .then((response) => {
        return response.json();
      }).then((contacts) => {
        dispatch(contactsLoaded(contacts));
      });
  };
}
export function contactsLoaded(contacts) {
  return {
    type: "CONTACTS_LOADED",
    value: contacts
  };
}

export function loadVehicles() {
  return function (dispatch) {
    fetch("/vehicles")
      .then((response) => {
        return response.json();
      }).then((vehicles) => {
        dispatch(vehiclesLoaded(vehicles));
      });
  };
}
export function vehiclesLoaded(vehicles) {
  return {
    type: "VEHICLES_LOADED",
    value: vehicles
  };
}
export function loadComments() {
  return function (dispatch) {
    fetch("/comments")
      .then((response) => {
        return response.json();
      }).then((comments) => {
        dispatch(commentsLoaded(comments));
      });
  };
}
export function commentsLoaded(comments) {
  return {
    type: "COMMENTS_LOADED",
    value: comments
  };
}
export function loadProducts() {
  return function (dispatch) {
    fetch("/products")
      .then((response) => {
        return response.json();
      }).then((products) => {
        dispatch(productsLoaded(products));
      });
  };
}
export function productsLoaded(products) {
  return {
    type: "PRODUCTS_LOADED",
    value: products
  };
}
export function createProduct(product) {
  return function (dispatch) {
    fetch("/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    }).then(() => dispatch(loadProducts()));
  };
}
export function createContact(c) {
  return function (dispatch) {
    fetch("/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(c)
    }).then(() => dispatch(loadContacts()));
  };
}
export function createVehicle(v) {
  return function (dispatch) {
    fetch("/vehicles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(v)
    }).then(() => dispatch(loadVehicles()));
  };
}
export function createComment(v) {
  return function (dispatch) {
    fetch("/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(v)
    }).then(() => dispatch(loadComments()));
  };
}

export function getVehicle(id) {
  console.log(id)
  return function (dispatch) {
    fetch("/vehicles/" + id).then((response) => {
      return response.json();
    }).then(vehicle => dispatch(getVehicleDone(vehicle)));
  }
}

export function getVehicleDone(vehicle) {
  return {
    type: "GET_VEHICLE_DONE",
    value: vehicle
  }
}

export function getProduct(id) {
  console.log("this is geproductid:" + id)
  return function(dispatch){
    fetch("/products/" + id).then((response) => {
      return response.json();
    }).then(prod => dispatch(getProductDone(prod)));
  }
}

export function getProductDone(product) {
  return {
    type: "GET_PRODUCT_DONE",
    value: product
  }
}

export function getComment(id) {
  console.log(id)
  return function(dispatch) {
    fetch("/comments/" + id). then((response) => {
      return response.json();
    }).then(com => dispatch(getCommentDone(com)));
  }
}

export function getCommentDone(comment) {
  return {
    type: "GET_COMMENT_DONE",
    value: comment
  }
}

export function getContact(id) {
  return function(dispatch) {
    fetch("/contacts/" + id). then((response) => {
      return response.json();
    }).then(con => dispatch(getContactDone(con)));
  }
}

export function getContactDone(contact) {
  return {
    type: "GET_CONTACT_DONE",
    value: contact
  }
}