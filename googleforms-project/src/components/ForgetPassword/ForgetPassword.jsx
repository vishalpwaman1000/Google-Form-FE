import React, { Component } from "react";
import "./ForgetPassword.scss";
import { TextField, Checkbox } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export class ForgetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="forgetPassword_Container">
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
              <div className="forgetPassword_Header">
                <div className="forgetPassword_Inner"></div>
              </div>
              <div className="sub_Header">
                <div className="sub_Inner"></div>
              </div>
              <div className="forgetPassword_Body">
                <div className="input_Field">
                  <TextField
                    className="Em_InputField"
                    label="Enter your password"
                    variant="outlined"
                    //   value={}
                    //   onChange={}
                  />
                </div>
                <div className="show_password">
                  <Checkbox color="primary" className="check_Point" />
                  <div className="s_passwordText">Show password</div>
                </div>
                <div className="bottons">
                  <div className="create_Account">
                    <Button color="primary" className="ca_Button">
                      Forget password?
                    </Button>
                  </div>
                  <div className="next_Button">
                    <Button
                      variant="contained"
                      color="primary"
                      className="n_Button"
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

export default ForgetPassword;
