import React from 'react';

class Vehicle extends React.Component {

  componentDidMount() {
    this.props.getVehicle(this.props.match.params.vehicleId);
  }

  render() {
    return (
      <div>
      <h1>Make: {this.props.vehicle.make}</h1>
      <h1>Model: {this.props.vehicle.model}</h1>
      <h1>Year: {this.props.vehicle.year}</h1>
      <h1>Price: {this.props.vehicle.price}</h1>      
    </div>
    )
  }
}

export default Vehicle;