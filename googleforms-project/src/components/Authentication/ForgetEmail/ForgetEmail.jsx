import React, { Component } from "react";
import "./ForgetEmail.scss";
import { TextField, Button } from "@material-ui/core";

import ErrorIcon from "@material-ui/icons/Error";

export class ForgetEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      errors: {
        email: "",
      },
      errorStatus: {
        email: false,
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let state = this.state;
    if (state.email === "") {
      state.errorStatus.email = true;
      state.errors.email = "Enter an email or phone number";
    } else {
      state.errorStatus.email = false;
    }
    this.setState({ state });
  };

  handleChange = (event) => {
    event.preventDefault();

    this.setState({ email: event.target.value });
  };

  render() {
    let state = this.state;
    let error = this.state.errors;
    console.log(this.state);
    return (
      <div className="forgetEmail_Container">
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
              <div className="forgetEmail_Header">
                <div className="forgetEmail_Inner">Find your email</div>
              </div>
              <div className="sub_Header">
                <div className="sub_Inner">
                  Enter your phone number or recovery email
                </div>
              </div>
              <div className="forgetEmail_Body">
                <div className="input_Field">
                  <TextField
                    error={state.errorStatus.email ? true : false}
                    className="Em_InputField"
                    label="Phone number or email"
                    variant="outlined"
                    value={state.email}
                    onChange={this.handleChange}
                  />
                </div>
                {state.errorStatus.email && (
                  <div className="errorMessage">
                    <ErrorIcon fontSize="small" />
                    <div className="errorText">{error.email}</div>
                  </div>
                )}
                <div className="bottons">
                  <div className="next_Button">
                    <Button
                      variant="contained"
                      color="primary"
                      className="n_Button"
                      onClick={this.handleSubmit}
                    >
                      Next
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

export default ForgetEmail;
