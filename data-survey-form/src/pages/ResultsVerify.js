import React from 'react';
import { connect } from "react-redux";
import { Map, GoogleApiWrapper } from 'google-maps-react';


import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const ResultsVerify=({dispatch,firstName,lastName,city,state,zipCode,addressLine,phoneNumber,email,feet,inches,birthDate,educationLevel})=> {
  const google = window.google;

  // const mapStyles = {
  //   width: '100%',
  //   height: '100%'
  // };
  // const containerStyle = {
  //   width: '400px',
  //   height: '400px'
  // };
   
  // const center = {
  //   lat:37.7241,
  //   lng: 122.4799
  // };
   
  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: {lat: -34.397, lng: 150.644}
    });
    var geocoder = new google.maps.Geocoder();

    window.onload = geocodeAddress(geocoder, map);
  }

  function geocodeAddress(geocoder, resultsMap) {
    var address = addressLine+";"+city+";"+state+";"+zipCode;
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
// const MyMapComponent = withScriptjs(withGoogleMap((props) =>
// <GoogleMap
//   defaultZoom={8}
//   defaultCenter={{ lat: 37.7241, lng: 122.4799}}
// >
//   {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
// </GoogleMap>
// ))
//   function MyComponent() {
//     const [map, setMap] = React.useState(null)
   
//     const onLoad = React.useCallback(function callback(map) {
//       const bounds = new window.google.maps.LatLngBounds();
//       map.fitBounds(bounds);
//       setMap(map)
//     }, [])
   
//     const onUnmount = React.useCallback(function callback(map) {
//       setMap(null)
//     }, [])
//   }
   
   
   
   return(
<div class="container-fluid bg-light">

<div class="row justify-content-center">

    <div class="col-lg-5.5">

<div class="card bg-white " >
<div class="card-header bg-info waves-light  text-center">
{/* <div class="card-header waves-light active waves-effect waves-light text-center"> */}
<h4 class="text-white">          Data Survey Form Summary             </h4>
</div>
{/* <div class="py-5 text-center">
  <h2>Data Survey Form</h2>
</div> */}
<div class="row">
  
  </div>
  <div class="col-md-8 mx-auto">
  
   <form  novalidate>
      <br/>
      <div class="row" style={{"float":"center"}}>

        <div class="col-md-6 mb-3">
          <label for="firstName">First Name</label>
        </div>
        <div class="col-md-6 mb-3">
        {firstName}
        </div>
        
      </div>
      <div class="row" style={{"float":"center"}}>

      <div class="col-md-6 mb-3">
          <label for="lastName">Last name </label>
          
        </div>
        <div class="col-md-6 mb-3">
        {lastName}
        </div>
        
      </div>
      <div class="row" style={{"float":"center"}}>

          <div class="col-md-6 mb-3">
        <label for="address">Address</label>
    
        </div>
        <div class="col-md-6 mb-3">
        {addressLine}
        </div>
  
      </div>
      <div class="row" style={{"float":"center"}}>

          <div class="col-md-6 mb-3">
        <label for="city">City</label>
    
        </div>
        <div class="col-md-6 mb-3">
        {city}
        </div>
  
      </div>
      
      <div class="row" style={{"float":"center"}}>

      <div class="col-md-6 mb-3">
<label for="state">State</label>

</div>
<div class="col-md-6 mb-3">
{state}
</div>

</div>
<div class="row" style={{"float":"center"}}>

<div class="col-md-6 mb-3">
<label for="zipcode">Zipcode</label>

</div>
<div class="col-md-6 mb-3">
{zipCode}
</div>

</div>
<div class="row" style={{"float":"center"}}>

<div class="col-md-6 mb-3">
<label for="birthdate">BirthDate</label>

</div>
<div class="col-md-6 mb-3">
{birthDate}
</div>

</div>
{educationLevel && (

<div class="row" style={{"float":"center"}}>
<div class="col-md-6 mb-3">
<label for="inputEducationLevel">Education level</label>

</div>
<div class="col-md-6 mb-3">
{educationLevel}
</div>

</div>)}
{feet &&(      

<div class="row" style={{"float":"center"}}>

<div class="col-md-6 mb-3">

<label for="height">Height</label>
</div> \
<div class="col-md-6 mb-3">
{feet} Feet   {inches} Inches 
</div>

</div> )}
<div class="row" style={{"float":"center"}}>

<div class="col-md-6 mb-3">
<label for="Phone number">Phone number</label>

</div>
<div class="col-md-6 mb-3">
{phoneNumber}
</div>

</div>
<div class="row" style={{"float":"center"}}>

<div class="col-md-6 mb-3">
<label for="email">Email address</label>

</div>
<div class="col-md-6 mb-3">
  {email}
</div>

</div>
<div id="map"  style={{"height":"100%"}}></div>

         
     </form></div>
  
  </div>
</div>
</div></div>

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
