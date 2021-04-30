import React, { Component } from "react";
import "./EnterPassword.scss";
import { TextField, Checkbox, Button } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";

export class EnterPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      showPassword: false,
      errors: {
        passwordStatus: false,
        password: "",
      },
    };
  }

  checkNullity = (event) => {
    event.preventDefault();
    let state = this.state;
    if (state.password === "") {
      state.errors.passwordStatus = true;
      state.errors.password = "Enter a password";
      this.setState({ state });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.checkNullity(event)) {
      console.log("Accepted");
    } else {
      console.log("Not Accepted");
    }
  };

  handleChange = (event) => {
    let state = this.state;
    const { name, value } = event.target;
    switch (name) {
      case "password":
        state.password = value;
        break;
      case "showPassword":
        state.showPassword = !state.showPassword;
        break;
      default:
        break;
    }

    this.setState({ state });
  };

  render() {
    let state = this.state;
    let errors = this.state.errors;
    console.log(this.state);
    return (
      <div className="enterPassword_Container">
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
              <div className="enterPassword_Header">
                <div className="enterPassword_Inner"></div>
              </div>
              <div className="sub_Header">
                <div className="sub_Inner"></div>
              </div>
              <div className="enterPassword_Body">
                <div className="input_Field">
                  <TextField
                    error={state.errors.passwordStatus ? true : false}
                    autoFocus={true}
                    className="Em_InputField"
                    label="Enter your password"
                    variant="outlined"
                    name="password"
                    type={state.showPassword ? "text" : "password"}
                    value={state.password}
                    onChange={this.handleChange}
                  />
                </div>
                {state.errors.passwordStatus && (
                  <div className="errorMessage">
                    <ErrorIcon fontSize="small" />
                    <div className="errorText">{errors.password}</div>
                  </div>
                )}
                <div className="show_password">
                  <Checkbox
                    color="primary"
                    className="check_Point"
                    name="showPassword"
                    onChange={this.handleChange}
                    checked={this.state.showPassword}
                  />
                  <div className="s_passwordText">Show password</div>
                </div>
                <div className="bottons">
                  <div className="create_Account">
                    <Button
                      color="primary"
                      className="ca_Button"
                      href="/MobileOtpSend"
                    >
                      Forget password?
                    </Button>
                  </div>
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

export default EnterPassword;
