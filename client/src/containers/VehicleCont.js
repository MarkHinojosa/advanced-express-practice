import { connect } from "react-redux";
import Vehicle from "../components/Vehicle";
import { getVehicle } from '../actions';

function mapStateToProps(state) {
  return {
    vehicle: state.vehicle
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getVehicle: function (id) {
      dispatch(getVehicle(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);
