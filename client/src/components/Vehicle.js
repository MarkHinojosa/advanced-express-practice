import React from 'react';

class Vehicle extends React.Component {

  componentDidMount() {
    this.props.getVehicle(this.props.match.params.vehicleId);
  }

  render() {
    console.log(this.props)
    return (
      <div>
      <h1>This is the Vehicle Component and this is the vehicle id: {this.props.match.params.vehicleId}</h1>
    </div>
    )

  }
}

export default Vehicle;