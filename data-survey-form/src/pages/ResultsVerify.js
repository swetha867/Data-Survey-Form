import React, { Component } from 'react';
import { connect } from "react-redux";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import GoogleMapReact from 'google-maps-react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const AnyReactComponent = ({ text }) => <div>{text}</div>;


const ResultsVerify=({dispatch,firstName,lastName,city,state,zipCode,addressLine,phoneNumber,email,feet,inches,birthDate,educationLevel})=> {
  const google = window.google;
  const[googlemapsrc,setGooglemapsrc]=React.useState("https://www.google.com/maps/embed/v1/place?key=site_key&q="+city+""+addressLine+""+state+""+zipCode);

  // setGooglemapsrc("https://www.google.com/maps/embed/v1/place?key=AIzaSyAeJ-EPgN1ctwzOBO6-jyseWKdl_C-wqxA&q="+city+" "+addressLine+" "+state+" "+zipCode);
   

   
   return(
<div class="container-fluid bg-light">


{/* <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      /> 
       <div >
            <div id="iframe-container" class="widthAndHeightOneHundredPercent">
            {/* <iframe class="widthAndHeightOneHundredPercent removeBorder" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAeJ-EPgN1ctwzOBO6-jyseWKdl_C-wqxA&q={{property.city}} {{property.streetAddress}} {{property.state}} {{property.zipcode}}"
                    allowfullscreen>
                </iframe> 
           <br/>
           <br/>

            </div>
        </div>
     </form></div>
  
  </div>
</div></div></div> */}

<div class="card " >
<div class="card-header bg-info waves-light  text-center">
<div class="card-header waves-light active waves-effect waves-light text-center"> 
<h4 class="text-white">                       Thanks for taking the survey!! Here is your  Survey  Summary                    </h4>
</div>
 </div>
 <div class="col-md-8 mx-auto">

<div class="table-responsive">
<table class="table" style={{"    table-layout": "fixed"}}>
  
  <tbody>
    <tr>
      {/* <th scope="row">1</th> */}
      <td> Name</td>
      <td>{firstName} {lastName}</td>

      {/* <td>Otto</td>
      <td>@mdo</td> */}
    </tr>
    <tr>
      <td> Address</td>
      <td>{addressLine} {city} {state} {zipCode}</td>
    </tr>
    <tr>
      <td> BirthDate</td>
      <td>{birthDate.toString()} </td>
    </tr>
    <tr>
      <td> Phone Number</td>
      <td>{phoneNumber} </td>
    </tr>
    <tr>
      <td> Email</td>
      <td>{email} </td>
    </tr>
    {educationLevel && (

    <tr>
      <td> Education Level</td>
      <td>{educationLevel} </td>
    </tr>)}
    {feet &&(      

    <tr>
      <td> Height</td>
      <td>{feet} feet {inches} inches </td>
    </tr>
    )}
  </tbody>
</table>
<div>
                <iframe  width="600"
  height="450"
  frameborder="0" style={{"border":"0"}} 
  
  class="widthAndHeightOneHundredPercent removeBorder" src={googlemapsrc}
                    allowfullscreen>
                </iframe>
                <br/><br/><br/>
                </div>
</div></div></div>
</div>
    );

}
const mapStyles = {
  width: '100%',
  height: '100%'
};
export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
    );
  }
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
  // export default GoogleApiWrapper(
  //   (props) => ({
  //     apiKey: props.apiKey
  //   }
  // ))(MapContainer)
  // const WrappedContainer = GoogleApiWrapper({
  //   (props) => ({
  //         apiKey: props.apiKey
  //          })(ResultsVerify);
  //   export default   connect(mapStateToProps)(ResultsVerify);


  const WrappedContainer = GoogleApiWrapper({
    apiKey: "AIzaSyBvPRbd0bX_ndUcnBLb0th6uK02kQOJAN0"
    })(ResultsVerify);
  export default connect(mapStateToProps)(ResultsVerify);
