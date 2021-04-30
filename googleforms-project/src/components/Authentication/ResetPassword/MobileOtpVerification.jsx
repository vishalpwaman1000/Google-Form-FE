import React, { Component } from "react";
import "./OtpVerification.scss";
import { Button, TextField, InputAdornment } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";

export class MobileOtpVerification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      errors: {
        password: "",
      },
      errorsStatus: {
        password: false,
      },
    };
  }

  handleNulity = (event) => {
    event.preventDefault();
    let state = this.state;
    if (state.password === "") {
      state.errorsStatus.password = true;
      state.errors.password = "Enter a code";
    }
    this.setState({ state });
  };

  handleInvalidNulity = (event) => {
    event.preventDefault();
    let state = this.state;
    if (state.password !== "") {
      state.errorsStatus.password = false;
    }
    this.setState({ state });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.handleNulity(event);
    this.handleInvalidNulity(event);
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    let state = this.state;
    console.log(this.state);
    return (
      <div className="otpVerification_Container">
        <div
          className="sub_Container"
          style={{ width: "442px", height: "500px" }}
        >
          <div
            className="inner_Container"
            style={{ height: "400px", width: "400px" }}
          >
            <div className="google_Header">
              <span className="G">G</span>
              <span className="o1">o</span>
              <span className="o2">o</span>
              <span className="g">g</span>
              <span className="l">l</span>
              <span className="e">e</span>
            </div>
            <div className="body">
              <div className="otpVerification_Header">
                <div className="otpVerification_Inner">Account Recovery</div>
                <div
                  className="sub_Inner_Suggestion"
                  style={{ width: "380px" }}
                >
                  This helps show that this account really belongs to you
                  <div className="sub_Header">
                    <div className="sub_Inner"></div>
                  </div>
                </div>
              </div>
              <div
                className="otpVerification_Body"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  margin: "10px 0 0 0",
                }}
              >
                <div class="suggestion" style={{ height: "180px" }}>
                  <div className="suggestionText">
                    <div
                      className="text"
                      style={{
                        width: "100%",
                        textAlign: "left",
                        fontSize: "15px",
                        fontFamily:
                          "roboto, Noto Sans Myanmar UI, arial, sans-serif",
                        lineHeight: "20.0004px",
                        margin: "20px 0 0 0",
                      }}
                    >
                      <div class="subsuggestionText">
                        A text message with a 6-digit verification code was just
                        sent to •••••• •••22
                      </div>
                      <div
                        className="Input-Field"
                        style={{ width: "100%", margin: "30px 0 0 0" }}
                      >
                        <TextField
                          error={
                            this.state.errors.passwordStatus ? true : false
                          }
                          autoFocus={true}
                          className="Em_InputField"
                          label="Enter the code"
                          variant="outlined"
                          name="password"
                          type="text"
                          style={{ width: "100%" }}
                          value={state.password}
                          onChange={this.handleChange}
                          //   InputLabelProps={{ style: {  } }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                G-
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>
                      <div className="error">
                        {state.errorsStatus.password && (
                          <div className="errorMessage">
                            <ErrorIcon fontSize="small" />
                            <div className="errorText">
                              {state.errors.password}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bottons"
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
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

export default MobileOtpVerification;
