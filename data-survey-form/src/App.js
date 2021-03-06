import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  ResultsVerify from "./pages/ResultsVerify";
//import example2 from './pages/surveyForm';
import surveyForm from './pages/surveyForm';
import map from './pages/MapContainer';

const App=({dispatch})=> {

 
  return (
    <Router  basename={process.env.PUBLIC_URL}>
      <div></div>
        <h4  style={{ "text-align" :"center"}}>CSC 642 Summer 2020 Individual Assignment Swetha Govindu</h4>
        
<Switch>
    <Route path="/ResultsVerify" component={ResultsVerify} />
    <Route path="/map" component={map} />

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
