import React, { Component } from "react";
import "./SignUp.scss";
import Registerlogo from "../../Asserts/logoRegister.svg";
import {
  TextField,
  OutlinedInput,
  InputAdornment,
  InputLabel,
  FormControl,
  FormHelperText,
  Button,
  Checkbox,
} from "@material-ui/core";

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="signUp_Container">
        <div className="sub_Container">
          <div className="input_Container">
            <div className="google_Font">
              <span className="G">G</span>
              <span className="o1">o</span>
              <span className="o2">o</span>
              <span className="g">g</span>
              <span className="l">l</span>
              <span className="e">e</span>
            </div>
            <div className="main_headerText">Create your Google Account</div>
            <div className="input_Field1">
              <div className="input1">
                <div className="input11">
                  <TextField
                    className="input1_TextField"
                    label="First name"
                    variant="outlined"
                    size="small"
                    // value={}
                    // onChange={}
                  />
                </div>
                <div className="input12">
                  <TextField
                    className="input2_TextField"
                    label="Last name"
                    variant="outlined"
                    size="small"
                    // value={}
                    // onChange={}
                  />
                </div>
              </div>
              <div className="input2">
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Username
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    variant="outlined"
                    className="input2_Textfield"
                    style={{
                      height: "58%",
                      width: "129%",
                    }}
                    endAdornment={
                      <InputAdornment position="end">@gmail.com</InputAdornment>
                    }
                    labelWidth={60}
                  />
                  <FormHelperText
                    id="outlined-weight-helper-text"
                    className="gmail_HelperText"
                  >
                    You can use letters, numbers & periods
                  </FormHelperText>
                </FormControl>
              </div>
              <div className="suggestion_Button">
                <Button color="primary" className="s_Button">
                  Use my current email address instead
                </Button>
              </div>
              <div className="passwordField">
                <div className="p_field">
                  <div className="password">
                    <TextField
                      className="input1_TextField"
                      label="password"
                      variant="outlined"
                      size="small"
                      // value={}
                      // onChange={}
                    />
                  </div>
                  <div className="confirmPassword">
                    <TextField
                      className="input2_TextField"
                      label="Confirm password"
                      variant="outlined"
                      size="small"
                      // value={}
                      // onChange={}
                    />
                  </div>
                </div>
                <FormHelperText
                  id="outlined-weight-helper-text"
                  className="password_HelperText"
                >
                  You 8 or more characters with a mix of letters, numbers &
                  symbols
                </FormHelperText>
              </div>
              <div className="show_password">
                <Checkbox color="primary" className="check_Point" />
                <div className="s_passwordText">Show password</div>
              </div>
            </div>
            <div className="bottom_Button">
              <div className="signIn_Button">
                <Button color="primary" className="s_Button">
                  Sign in instead
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
          <div className="image_Container">
            <div className="image_Subcontainer">
              <div className="image_Field">
                <img src={Registerlogo} alt="" className="image" />
              </div>
              <div className="image_Text">
                One account. All of Google working for you
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
