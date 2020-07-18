import React from 'react';
// import { FormGroup,ControlLabel,HelpBlock } from 'react-datepicker';
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {setAddressLine,setCity,setEducationLevel,setEmail,setFeet,SetLastName,
  setFirstName,setInches,setState,setZipCode,setBirthDate,setPhoneNumber}
  from '../redux/actions/userActions';
  import { Redirect } from "react-router-dom";
  import { ReCaptcha } from 'react-recaptcha-google';
  
  import DatePicker from "react-datepicker";
  
  
  
  const SurveyForm= ({dispatch,firstName,lastName,city,state,zipCode,addressLine,phoneNumber,email,feet,inches,birthDate,educationLevel})=>{
    const [birthDate1, setBirthDate1] = React.useState("");
    const [validatePage ,setValidatePage]=React.useState(false);
    const[confirmEmail,setConfirmEmail]=React.useState(null);
    const[errorMessage,setErrorMessage]=React.useState(null);
    const [captcha ,setCaptcha]=React.useState(false);
    const[captchaMessage,setCaptchaMessage]=React.useState(null);
    const[errorMessage2,setErrorMessage2]=React.useState(null);

    
    const handleSubmit = () => {
      console.log(birthDate1)
      if(firstName=="" || lastName=="" || phoneNumber=="" || addressLine=="" || city=="" || zipCode=="" || birthDate1==""){
        setErrorMessage2("Please enter all mandatory fields");
      }
      else if(email!=confirmEmail){
        setErrorMessage2(null);
        setErrorMessage("Email ids dont match. Please make sure two emails are identical");
      }

      // else if(!phoneNumber.match('^\d{7}$')){
      //   setErrorMessage2("Phone Number must contain seven positive digits ");

      // }
      else{
        dispatch(setBirthDate(birthDate1))

        setErrorMessage(null);
        setValidatePage(true);
      }
      
    }
    
    if (validatePage) {
      return <Redirect to="/ResultsVerify"/>;
      
    } 
    const handleChange = (e) => {
      
      dispatch(setBirthDate(e.target.value));
      
    }
    
    
    return(  <div class="container-fluid bg-light">
    
    <div class="row justify-content-center">
    
    <div class="col-lg-5.5">
    
    <div class="card bg-white " >
    
    <div class="card-header bg-info waves-light  text-center">
    <h4 class="text-white">Data Survey Form</h4>
    
    </div>
    
<div class="col-md-8 mx-auto">

<form autoComplete='off'>
<div class="row" style={{"float":"center"}}>

<div class="col-md-6 mb-2">
<label for="firstName">First name<span style={{ "color": "red" }}>*</span></label>
<input type="inputfirstName" class="form-control" id="inputFirstName" onChange={(event) => dispatch(setFirstName(event.target.value))} pattern = "[A-Za-z\s]+" placeholder="First Name"  required></input>
<span class="form-text small text-muted">
Name must contain letters only.
</span>
<div class="invalid-feedback">
Valid first name is .
</div>
</div>
<div class="col-md-6 mb-2">
<label for="lastName">Last name <span style={{ "color": "red" }}>*</span></label>
<input type="lastName" class="form-control" id="inputLastName" onChange={(event) => dispatch(SetLastName(event.target.value))} pattern = "[A-Za-z\s]+" placeholder="Last name"  required></input>

</div>
</div>


<div class="mb-3">
<label for="address">Address <span style={{ "color": "red" }}>*</span></label>
<div class="input-group">

<div class="input-group-prepend">
<span class="input-group-text" id="basic-addon2"><i class="fa fa-address-card" aria-hidden="true"></i></span>
</div>
<input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" maxlength="40"  onChange={(event) => dispatch(setAddressLine(event.target.value))} pattern="[0-9]+[A-Za-z\s]+[A-Za-z\s]" required></input>
</div>
</div>

<div class="row">
<div class="col-md-4 mb-3">
<label for="city">City <span style={{ "color": "red" }}>*</span></label>
<input type="text" class="form-control" onChange={(event) => dispatch(setCity(event.target.value))} id="inputCity" placeholder="city" required></input>
<div class="valid-feedback">
Looks good!
</div>
</div>
<div class="col-md-4 mb-3">
<label for="state">State <span style={{ "color": "red" }}>*</span></label>
<select id="inputState" class="form-control" onChange={(event) => dispatch(setState(event.target.value))} required>
<option>Choose State</option>
<option value="AS">American Samoa</option>
<option value="GU">Guam</option>
<option value="MP">Northern Mariana Islands</option>
<option value="PR">Puerto Rico</option>
<option value="UM">United States Minor Outlying Islands</option>
<option value="VI">Virgin Islands</option>
<option value="AL">Alabama</option>
<option value="AK">Alaska</option>
<option value="AZ">Arizona</option>
<option value="AR">Arkansas</option>
<option value="CA">California</option>
<option value="CO">Colorado</option>
<option value="CT">Connecticut</option>
<option value="DE">Delaware</option>
<option value="DC">District Of Columbia</option>
<option value="FL">Florida</option>
<option value="GA">Georgia</option>
<option value="HI">Hawaii</option>
<option value="ID">Idaho</option>
<option value="IL">Illinois</option>
<option value="IN">Indiana</option>
<option value="IA">Iowa</option>
<option value="KS">Kansas</option>
<option value="KY">Kentucky</option>
<option value="LA">Louisiana</option>
<option value="ME">Maine</option>
<option value="MD">Maryland</option>
<option value="MA">Massachusetts</option>
<option value="MI">Michigan</option>
<option value="MN">Minnesota</option>
<option value="MS">Mississippi</option>
<option value="MO">Missouri</option>
<option value="MT">Montana</option>
<option value="NE">Nebraska</option>
<option value="NV">Nevada</option>
<option value="NH">New Hampshire</option>
<option value="NJ">New Jersey</option>
<option value="NM">New Mexico</option>
<option value="NY">New York</option>
<option value="NC">North Carolina</option>
<option value="ND">North Dakota</option>
<option value="OH">Ohio</option>
<option value="OK">Oklahoma</option>
<option value="OR">Oregon</option>
<option value="PA">Pennsylvania</option>
<option value="RI">Rhode Island</option>
<option value="SC">South Carolina</option>
<option value="SD">South Dakota</option>
<option value="TN">Tennessee</option>
<option value="TX">Texas</option>
<option value="UT">Utah</option>
<option value="VT">Vermont</option>
<option value="VA">Virginia</option>
<option value="WA">Washington</option>
<option value="WV">West Virginia</option>
<option value="WI">Wisconsin</option>
<option value="WY">Wyoming</option>
</select>
<div class="invalid-feedback">
Please provide a valid state.
</div>
</div>
<div class="col-md-4 mb-3">
<label for="zip">Zip Code <span style={{ "color": "red" }}>*</span></label>
<input type="text" class="form-control" onChange={event=> dispatch(setZipCode(event.target.value))} id="zip" placeholder="Zip Code"  required></input>
<span class="form-text small text-muted">
Zip must contain five  digits
</span>
<div class="invalid-feedback">
Zip code .
</div>
</div>
</div>
<div class="mb-3">
<div class="row">
<div class="col-md-6">

<label for="username">Birth date <span style={{ "color": "red" }}>*</span></label>
<div class="input-group">
<div class="input-group-prepend">
<span class="input-group-text" id="basic-addon2"><i class="fa fa-birthday-cake" aria-hidden="true"></i></span>
</div>
<input type="date"  onChange={event=> (setBirthDate1(event.target.value))} class="form-control" id="date" required  ></input>
{/* <DatePicker type="date" id ="birthDate"  onChange={event=> dispatch(setBirthDate(event.target.value))}  placeholder="Bith Date"/> */}

</div>
</div>
<div class="col-md-6">
<label for="inputEducationLevel">Education level <span class="text-muted">  (Optional)</span></label>
<div class="input-group">
<div class="input-group-prepend">
<span class="input-group-text" id="basic-addon2"><i class="fas fa-user-graduate" aria-hidden="true"></i></span>
</div>
<select id="inputEducation" name="Education" class="form-control" onChange={(event) => dispatch(setEducationLevel(event.target.value))} placeholder="Education">
<option></option>
<option>High School</option>
<option>College</option>
<option>Graduate Study</option>
<option>PHD</option>
</select>  
</div>           
</div>

</div>
</div>

<div class="mb-3">
<label for="inputHeight">Height<span class="text-muted">  (Optional)</span>  </label> 
<div class="row">
<div class="col-md-6">

<input type="number"  min="1" class="form-control" placeholder="Feet"   onChange={event=> dispatch(setFeet(event.target.value))} id="inputFeet"></input>

</div>
<div class="col-md-6">
<input type="number"  min="0" class="form-control" placeholder="Inches" 
onChange={event=> dispatch(setInches(event.target.value))} id="inputInches"></input>
</div>
</div>
</div>

<div class="mb-3">
<label for="phoneNumber">Phone number <span style={{ "color": "red" }}>*</span></label>
<div class="input-group">
<div class="input-group-prepend">
<span class="input-group-text" id="basic-addon2"><i class="fa fa-phone fa-flip-horizontal" aria-hidden="true"></i></span>
</div>
<input type="number" name="Phone" pattern = "^\d{7}$" id="inputPhone" class="form-control" onChange={(event) => dispatch(setPhoneNumber(event.target.value))} placeholder="Phone number" required></input>

</div>
<span class="form-text small text-muted">
Phone Number  must contain seven positive digits .
</span>
</div>
<div class="mb-3">
<label for="email">Email address <span style={{ "color": "red" }}>*</span></label>
<div class="input-group">
<div class="input-group-prepend">
<span class="input-group-text" id="basic-addon2"><i class="fa fa-envelope" aria-hidden="true"></i></span>
</div>
<input type="text" name="email" id="inputPhone" class="form-control" onChange={(event) => dispatch(setEmail(event.target.value))} placeholder="Email Address" required></input>

</div>
</div>

<div class="mb-3">

<label for="email">Confirm email address <span style={{ "color": "red" }}>*</span></label>
<div class="input-group">
<div class="input-group-prepend">
<span class="input-group-text" id="basic-addon2"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></span>
</div>
<input type="text" name="email" id="inputConfirmEmail" class="form-control" onChange={(event) => (setConfirmEmail(event.target.value))} placeholder="Confirm Email Address" required></input>

</div>
{ !errorMessage && (<span class="form-text small text-muted">
Make sure two emails are identical
</span> )}
<span class="text-danger"> {errorMessage}</span>

</div>

<div class="form-group">
<div class="form-check">
<input class="form-check-input" type="checkbox" id="gridCheck" required></input>
<label class="form-check-label" for="gridCheck">
I Agree to Terms & Conditions<span style={{ "color": "red" }}>*</span>
</label>
</div>
</div>

<div className="form-group">
<ReCaptcha
sitekey="6LdA7GMUAAAAANYVPP-site-keyyjMtYp5yE3MGGw"
/>
</div>
<span class="text-danger"> {errorMessage2}</span>

<button class="btn btn-info btn-lg btn-block" type="submit" id="submit" onClick={handleSubmit}>Submit</button>

<br/>
</form></div>

</div>
</div>
</div></div>

)
};
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
export default connect(mapStateToProps) (SurveyForm);