import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  ResultsVerify from "./pages/ResultsVerify";
import example2 from './pages/surveyForm';
import surveyForm from './pages/surveyForm';

const App=({dispatch})=> {

 
  return (
    <Router>

<Switch>
    <Route path="/ResultsVerify" component={ResultsVerify} />
    <Route exact path="/" component={surveyForm} />
</Switch>
</Router>
  );
}


const mapStateToProps = (state) => {
  return {
    firstName: state.userReducer.firstName,
    lastName: state.userReducer.lastName,
    city: state.userReducer.city,
    state: state.userReducer.state,
    addressLine: state.userReducer.addressLine,
    zipCode: state.userReducer.zipCode,
    phoneNumber: state.userReducer.phoneNumber,
    email: state.userReducer.email,
    feet: state.userReducer.feet,
    inches: state.userReducer.inches,
    birthDate: state.userReducer.birthDate,

  };
};
export default connect(mapStateToProps)(App);
