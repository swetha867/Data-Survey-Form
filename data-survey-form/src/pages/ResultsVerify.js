import React from 'react';
import { connect } from "react-redux";
import { Map, GoogleApiWrapper } from 'google-maps-react';


import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const ResultsVerify=({dispatch,firstName,lastName,city,state,zipCode,addressLine,phoneNumber,email,feet,inches,birthDate,educationLevel})=> {
   
  const mapStyles = {
    width: '100%',
    height: '100%'
  };
  const containerStyle = {
    width: '400px',
    height: '400px'
  };
   
  const center = {
    lat:37.7241,
    lng: 122.4799
  };
   
const MyMapComponent = withScriptjs(withGoogleMap((props) =>
<GoogleMap
  defaultZoom={8}
  defaultCenter={{ lat: 37.7241, lng: 122.4799}}
>
  {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
</GoogleMap>
))
  function MyComponent() {
    const [map, setMap] = React.useState(null)
   
    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      setMap(map)
    }, [])
   
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])
  }
   
   
   
   return(
<div class="container">
<div class="card text-center">
  <div class="card-header">
  CSC 642 Summer 2020 Individual Assignment Swetha Govindu
  </div>
  <div class="card-body">
    <h5 class="card-title">Data survey Form Summary</h5>
    <div class="card-text">


  
  <div class="form-label-group">
      <label for="inputFirstName">First Name</label>{firstName}
    </div>
    <div class="form-label-group">
      <label for="inputLastName">Last Name </label>{lastName}     
  </div>
  <div class="form-label-group">
    <label for="inputAddress">Address</label>{addressLine}
  </div>
  <div class="form-label-group">
  <label for="inputCity">City </label>{city}
  </div>
    
    <div class="form-label-group">
      <label for="inputState">State </label>{state}
    
    </div>
    <div class="form-label-group">
      <label for="inputZip">Zip </label>{zipCode}
    </div>
  <div class="form-label-group">
      <label for="inputBirthDate">Birth date  </label>{birthDate}
       </div>
  
  <div class="form-label-group">
    <label for="inputEducationLevel">Education Level</label>{educationLevel}
    
  </div>
  {feet &&(
  <div class="form-label-group">
  <label for="inputHeight">Height </label> {feet} feet {inches} inches
    </div>)}

  
  
  <div class="form-label-group">
      <label for="inputPhone">Phone number </label>{phoneNumber}
  </div>
  <div class="form-label-group">
      <label for="inputEmail">Email Address </label>{email}
        
  </div>
  {/* https://maps.googleapis.com/maps/api/geocode/json?address=high+st+hasting&components=country:GB
&key=YOUR_API_KEY */}
  <MyMapComponent
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/geocode/json?address=high+st+hasting&components=country:GB
  &key=AIzaSyDKthUAQZzDQWjiDSwp20RitR8-d9qP1Bw"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
  
  {/* <div class="card-footer text-muted">
    2 days ago
  </div> */}
</div></div></div></div>
        
    )
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
      educationLevel:state.userReducer.educationLevel
      //phoneNumber:state.userReducer.phoneNumber
  
    };
  };

 export default connect(mapStateToProps)(ResultsVerify);
