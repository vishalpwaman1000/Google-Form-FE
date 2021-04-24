import React, { Component } from "react";
import "./ResetPassword.scss";
import { TextField, Checkbox } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export class ResetPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="resetPassword_Container">
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
              <div className="resetPassword_Header">
                <div className="resetPassword_Inner">Change password</div>
              </div>
              <div className="sub_Header">
                <div className="sub_Inner"></div>
              </div>
              <div className="sub_TextHeader">
                <div className="sub_Inner">Create a strong password</div>
                <div className="sub_TextInner">
                  Create a new, strong password that you don't use for other
                  websites
                </div>
              </div>
              <div className="resetPassword_Body">
                <div className="input_Field1">
                  <TextField
                    className="Em_InputField"
                    label="Create password"
                    variant="outlined"
                    //   value={}
                    //   onChange={}
                  />
                </div>
                <div className="input_Field2">
                  <TextField
                    className="Em_InputField"
                    label="Confirm"
                    variant="outlined"
                    helperText="At least 8 characters"
                    //   value={}
                    //   onChange={}
                  />
                </div>
                <div className="show_password">
                  <Checkbox color="primary" className="check_Point" />
                  <div className="s_passwordText">Show password</div>
                </div>
                <div className="bottons">
                  <div className="next_Button">
                    <Button
                      variant="contained"
                      color="primary"
                      className="n_Button"
                    >
                      Save password
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

export default ResetPassword;
