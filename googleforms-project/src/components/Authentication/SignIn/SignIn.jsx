import React, { Component } from "react";
import "./SignIn.scss";
import { TextField, Button } from "@material-ui/core";

import ErrorIcon from "@material-ui/icons/Error";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      errors: {
        emailStatus: false,
        email: "",
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let state = this.state;
    if (state.email === "") {
      state.errors.emailStatus = true;
      state.errors.email = "Enter an email or phone number";
    } else {
      state.errors.emailStatus = false;
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
      <div className="signIn_Container">
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
              <div className="signIn_Header">
                <div className="signIn_Inner">Sign in</div>
              </div>
              <div className="sub_Header">
                <div className="sub_Inner">Use your Google Account</div>
              </div>
              <div className="signIn_Body">
                <div className="input_Field">
                  <TextField
                    error={state.errors.emailStatus ? true : false}
                    className="Em_InputField"
                    label="Email or phone"
                    variant="outlined"
                    value={state.email}
                    onChange={this.handleChange}
                  />
                </div>
                {state.errors.emailStatus && (
                  <div className="errorMessage">
                    <ErrorIcon fontSize="small" />
                    <div className="errorText">{error.email}</div>
                  </div>
                )}
                <div className="forget_email">
                  <Button color="primary" className="f_email" href="">
                    Forgot email?
                  </Button>
                </div>
                <div className="suggestion_Text">
                  Not your computer? Use Guest mode to sign in privately.
                </div>
                <div className="learnmore_Button">
                  <Button color="primary" className="lm_Button">
                    Learn more
                  </Button>
                </div>
                <div className="bottons">
                  <div className="create_Account">
                    <Button color="primary" className="ca_Button">
                      Create account
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
            <div className="button_Container"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
