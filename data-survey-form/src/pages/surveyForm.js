import React from 'react';
// import { FormGroup,ControlLabel,HelpBlock } from 'react-datepicker';
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {setAddressLine,setCity,setEducationLevel,setEmail,setFeet,SetLastName,
  setFirstName,setInches,setState,setZipCode,setBirthDate,setPhoneNumber}
from '../redux/actions/userActions';
import { Redirect } from "react-router-dom";

import DatePicker from "react-datepicker";



const SurveyForm= ({dispatch,email})=>{
  const [birthDate1, setBirthDate1] = React.useState(new Date());
  const [validatePage ,setValidatePage]=React.useState(false);
  const[confirmEmail,setConfirmEmail]=React.useState(null);
  const[errorMessage,setErrorMessage]=React.useState(null);
  
  const handleSubmit = () => {
    console.log(email);
    console.log(confirmEmail);
    dispatch(setBirthDate(birthDate1))
    if(email!=confirmEmail){
      setErrorMessage("Email ids dont match. Please reenter");
    }
    else{
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
  {/* <div class="py-5 text-center">
      <h2>Data Survey Form</h2>
    </div> */}
    
    {/* <div class="col-md-4">
      <img src="https://source.unsplash.com/WEQbe2jBg40/414x512" class="card-img" alt="..."></img>
    </div> */}
      <div class="col-md-8 mx-auto">

       <form  novalidate>
          <br/>
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
              <div class="invalid-feedback">
                Valid last name is .
              </div>
            </div>
          </div>


          <div class="mb-3">
            <label for="address">Address <span style={{ "color": "red" }}>*</span></label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" maxlength="40"  onChange={(event) => dispatch(setAddressLine(event.target.value))} pattern="[0-9]+[A-Za-z\s]+[A-Za-z\s]"></input>
            <div class="invalid-feedback">
              Please enter your  address.
            </div>
          </div>

          <div class="row">
            <div class="col-md-4 mb-3">
              <label for="city">City <span style={{ "color": "red" }}>*</span></label>
              <input type="text" class="form-control" onChange={(event) => dispatch(setCity(event.target.value))} id="inputCity"></input>
             <div class="valid-feedback">
                Looks good!
             </div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="state">State <span style={{ "color": "red" }}>*</span></label>
              <select id="inputState" class="form-control" onChange={(event) => dispatch(setState(event.target.value))}>
                  <option selected>Choose...</option>
                  <option value=""></option>
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
              <label for="zip">Zipcode <span style={{ "color": "red" }}>*</span></label>
              <input type="text" class="form-control" onChange={event=> dispatch(setZipCode(event.target.value))} id="zip" placeholder="ZipCode" ></input>
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
            
                <input type="date"  onChange={event=> (setBirthDate1(event.target.value))} class="form-control" id="date"  ></input>
                {/* <DatePicker type="date" id ="birthDate"  onChange={event=> dispatch(setBirthDate(event.target.value))}  placeholder="Bith Date"/> */}
            
            </div>
            </div>
            <div class="col-md-6">
            <label for="inputEducationLevel">Education level <span class="text-muted">  (Optional)</span></label>
            <div class="input-group">
            
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
           
            <input type="text" name="Phone" pattern = "^\d{7}$"id="inputPhone" class="form-control" onChange={(event) => dispatch(setPhoneNumber(event.target.value))} placeholder="Phone number" required></input>
              <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2"><i class="fa fa-phone" aria-hidden="true"></i></span>
  </div>
            </div>
            <span class="form-text small text-muted">
       Phone Number  must contain seven positive digits .
       </span>
          </div>
          <div class="mb-3">
            <label for="email">Email address <span style={{ "color": "red" }}>*</span></label>
            <div class="input-group">
            
            <input type="text" name="email" id="inputPhone" class="form-control" onChange={(event) => dispatch(setEmail(event.target.value))} placeholder="Email Address" required></input>
              <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2"><i class="fa fa-envelope" aria-hidden="true"></i></span>
  </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="email">Confirm email address <span style={{ "color": "red" }}>*</span></label>
            <div class="input-group">
            
            <input type="text" name="email" id="inputPhone" class="form-control" onChange={(event) => (setConfirmEmail(event.target.value))} placeholder="Confirm Email Address" required></input>
              {/* <span class="form-text small text-muted">
       Make sure two emails are
       </span> */}
            <div class="input-group-append">
    <span class="input-group-text" id="basic-addon2"><i class="fa fa-envelope" aria-hidden="true"></i></span>
  </div></div>
  <span class="form-text small text-muted">
      Make Sure two emails are identical
       </span>
          </div>

          <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" required></input>
      <label class="form-check-label" for="gridCheck">
      I Agree to Terms & Conditions<span style={{ "color": "red" }}>*</span>
            </label>
    </div>
  </div>
  <div class="form-group">
                            <div class="g-recaptcha" data-sitekey="6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                            <input class="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha" />
                            <div class="help-block with-errors"></div>
    </div>
          <button class="btn btn-info btn-lg btn-block" type="submit" onClick={handleSubmit}>Submit</button>

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