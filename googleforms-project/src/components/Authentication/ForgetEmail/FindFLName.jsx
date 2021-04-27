import React, { Component } from "react";
import "./ForgetEmail.scss";
import { TextField, Button } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";

const validForm = (errorStatus) => {
  let valid = true;
  Object.values(errorStatus).forEach((val) => {
    val === true && (valid = false);
  });
  return valid;
};

export class FindFLName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      errors: {
        Name: "",
      },
      errorStatus: {
        firstName: false,
        lastName: false,
      },
    };
  }

  checkNullity = (event) => {
    event.preventDefault();
    let state = this.state;
    if (state.firstName === "") {
      state.errorStatus.firstName = true;
      state.errors.Name = "Enter a first name";
    }
    if (state.lastName === "") {
      state.errorStatus.lastName = true;
      state.errors.Name = "Enter a last name";
    }
    if (state.firstName === "" && state.lastName === "") {
      state.errorStatus.firstName = true;
      state.errorStatus.lastName = true;
      state.errors.Name = "Enter a first & last name";
    }
    this.setState({ state });
  };

  checkInvalidNullity = (event) => {
    event.preventDefault();
    let state = this.state;
    if (state.firstName !== "") {
      state.errorStatus.firstName = false;
    }
    if (state.lastName !== "") {
      state.errorStatus.lastName = false;
    }
    this.setState({ state });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.checkNullity(event);
    this.checkInvalidNullity(event);
    let state = this.state;
    if (validForm(state.errorStatus)) {
      console.log("Acceptable");
    } else {
      console.log("Not Acceptable");
    }
  };

  handleChange = (event) => {
    event.preventDefault();
    let state = this.state;
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
        state.firstName = value;
        break;
      case "lastName":
        state.lastName = value;
        break;
      default:
        break;
    }
    this.setState({ state });
  };

  render() {
    let state = this.state;
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
                <div className="forgetEmail_Inner">What's your name?</div>
              </div>
              <div className="sub_Header">
                <div className="sub_Inner">
                  Enter the name on your Google Account
                </div>
              </div>
              <div className="forgetEmail_Body">
                <div className="input_Field">
                  <TextField
                    error={state.errorStatus.firstName ? true : false}
                    autoComplete="off"
                    className="Em_InputField"
                    label="First Name"
                    variant="outlined"
                    name="firstName"
                    value={state.firstName}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input_Field">
                  <TextField
                    error={state.errorStatus.lastName ? true : false}
                    autoComplete="off"
                    className="Em_InputField"
                    label="Last Name"
                    variant="outlined"
                    name="lastName"
                    value={state.lastName}
                    onChange={this.handleChange}
                  />
                </div>
                {(state.errorStatus.firstName ||
                  state.errorStatus.lastName) && (
                  <div className="errorMessage">
                    <ErrorIcon fontSize="small" />
                    <div className="errorText">{state.errors.Name}</div>
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

export default FindFLName;
