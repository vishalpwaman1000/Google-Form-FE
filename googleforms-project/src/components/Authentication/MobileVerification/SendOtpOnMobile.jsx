import React, { Component } from "react";
import "./SendOtpOnMobile.scss";
import { TextField, Checkbox, Button } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";

export class SendOtpOnMobile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileNumber: "",
      error: {
        mobileNumber: "",
      },
      errorStatus: {
        mobileNumber: false,
      },
    };
  }

  checkNullity = (event) => {
    event.preventDefault();
    let state = this.state;
    console.log("Length ", state.mobileNumber.length);
    if (state.mobileNumber === "") {
      state.errorStatus.mobileNumber = true;
      state.error.mobileNumber = "Enter a mobile Number";
    } else if (state.mobileNumber.length !== 10) {
      state.errorStatus.mobileNumber = true;
      state.error.mobileNumber = "mobile Number must be 10 digit";
    }
    this.setState({ state });
  };

  checkInvalidNullity = (event) => {
    event.preventDefault();
    let state = this.state;
    if (state.mobileNumber !== "" && state.mobileNumber.length === 10) {
      state.errorStatus.mobileNumber = false;
    }
    this.setState({ state });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.checkNullity(event);
    this.checkInvalidNullity(event);
    let state = this.state;
    // if (validateForm(state.errorStatus)) {
    //   console.log("Acceptable");
    // } else {
    //   console.log("Not Acceptable");
    // }
  };

  handleChange = (event) => {
    let state = this.state;
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    let state = this.state;
    console.log(this.state);
    return (
      <div className="sendOtpOnMobile_Container">
        <div className="sub_Container">
          <div className="inner_Container">
            <div className="google_Header">
              <span className="G">G</span>
              <span className="o1">o</span>
              <span className="o2">o</span>
              <span className="g">g</span>
              <span className="l">l</span>
              <span className="e">e</span>
            </div>
            <div className="body">
              <div className="sendOtpOnMobile_Header">
                <div className="sendOtpOnMobile_Inner">
                  Verify Mobile Number
                </div>
              </div>
              <div className="sub_Header">
                <div className="sub_Inner"></div>
              </div>
              <div className="sub_TextHeader">
                <div className="sub_Inner">Enter your mobile number</div>
                <div className="sub_TextInner">
                  Create a new, strong password that you don't use for other
                  websites
                </div>
              </div>
              <div className="sendOtpOnMobile_Body">
                <div className="input_Field1">
                  <TextField
                    autoComplete="off"
                    error={state.errorStatus.mobileNumber ? true : false}
                    className="Em_InputField"
                    label="Enter Mobile Number"
                    variant="outlined"
                    name="mobileNumber"
                    type="text"
                    value={state.mobileNumber}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="error">
                  {(state.errorStatus.mobileNumber ||
                    state.errorStatus.mobileNumber) && (
                    <div className="errorMessage">
                      <ErrorIcon fontSize="small" />
                      <div className="errorText">
                        {state.error.mobileNumber}
                      </div>
                    </div>
                  )}
                </div>
                <div className="bottons">
                  <div className="skipButton">
                    <Button color="primary" className="ca_Button">
                      Skip
                    </Button>
                  </div>
                  <div className="next_Button">
                    <Button
                      variant="contained"
                      color="primary"
                      className="n_Button"
                      onClick={this.handleSubmit}
                    >
                      Send
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SendOtpOnMobile;
