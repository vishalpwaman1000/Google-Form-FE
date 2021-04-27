import React, { Component } from "react";
import "./EnterVCCode.scss";
import { TextField, Button } from "@material-ui/core";

import ErrorIcon from "@material-ui/icons/Error";

export class EnterVCCode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: "",
      errors: {
        code: "",
      },
      errorStatus: {
        code: false,
      },
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let state = this.state;
    if (state.code === "") {
      state.errorStatus.code = true;
      state.errors.code = "Enter a code";
    } else {
      state.errorStatus.code = false;
    }
    this.setState({ state });
  };

  handleChange = (event) => {
    event.preventDefault();

    this.setState({ code: event.target.value });
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
                <div className="forgetEmail_Inner">Enter the code</div>
              </div>
              <div className="sub_Header">
                <div className="sub_Inner">
                  Please provide additional information to aid in the recovery
                  process.
                </div>
                <div className="sub_Inner_Suggestion">
                  An email with a verification code was just sent to
                  vishalpwaman123@gmail.com
                </div>
              </div>
              <div className="forgetEmail_Body">
                <div className="input_Field">
                  <TextField
                    error={state.errorStatus.code ? true : false}
                    className="Em_InputField"
                    label="Enter code"
                    variant="outlined"
                    value={state.code}
                    onChange={this.handleChange}
                  />
                </div>
                {state.errorStatus.code && (
                  <div className="errorMessage">
                    <ErrorIcon fontSize="small" />
                    <div className="errorText">{error.code}</div>
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

export default EnterVCCode;
