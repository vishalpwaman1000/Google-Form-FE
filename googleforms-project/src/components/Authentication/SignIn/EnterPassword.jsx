import React, { Component } from 'react'
import './EnterPassword.scss'
import { TextField, Checkbox, Button } from '@material-ui/core'
import ErrorIcon from '@material-ui/icons/Error'
import GoogleFormServices from '../../../Services/GoogleFormServices'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'

const googleservices = new GoogleFormServices()

export class EnterPassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      email:
        props.location.email === undefined
          ? '[email id]'
          : props.location.email,
      firstName:
        props.location.firstName === undefined
          ? '[first name]'
          : props.location.firstName,
      lastName:
        props.location.lastName === undefined
          ? '[last name]'
          : props.location.lastName,
      mobileNumber:
        props.location.mobileNumber === undefined
          ? '[Mobile Number]'
          : props.location.mobileNumber,
      recoveryEmail: props.location.recoveryEmail,
      password: '',
      showPassword: false,
      errors: {
        passwordStatus: false,
        password: '',
      },
    }
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.setState({ open: false })
  }

  checkNullity = (event) => {
    event.preventDefault()
    let state = this.state
    if (state.password === '') {
      state.errors.passwordStatus = true
      state.errors.password = 'Enter a password'
      this.setState({ state })
      return false
    }
    return true
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.checkNullity(event)) {
      console.log('Accepted')

      let data = {
        userName: this.state.email,
        password: this.state.password,
      }

      googleservices
        .SignIn(data)
        .then((data) => {
          console.log('Data : ', data)
          if (data.data.isSuccess) {
            this.props.history.push({
              pathname: '/Dashboard',
              //state: data_you_need_to_pass
            })
          } else {
            console.log('Error : ', data.data.message)
            this.setState({ open: true })
            this.setState({ message: data.data.message })
          }
        })
        .catch((error) => {})
    } else {
      console.log('Not Accepted')
    }
  }

  handleChange = (event) => {
    let state = this.state
    const { name, value } = event.target
    switch (name) {
      case 'password':
        state.password = value
        break
      case 'showPassword':
        state.showPassword = !state.showPassword
        break
      default:
        break
    }

    this.setState({ state })
  }

  handleForgetPassword = (e) => {
    this.props.history.push({
      pathname: '/MobileOtpSend',
      email: this.state.email,
      mobileNumber: this.state.mobileNumber,
      recoveryEmail: this.state.recoveryEmail,
    })
  }

  render() {
    let state = this.state
    let errors = this.state.errors
    console.log('Enter Password State : ', this.state)
    return (
      <div className="enterPassword_Container">
        <div className="sub_Container">
          <div className="inner_Container">
            <div className="google_Header">
              <span className="G">VCoder</span>
            </div>
            <div className="body">
              <div className="enterPassword_Header">
                <div className="enterPassword_Inner">
                  {this.state.firstName}&nbsp;{this.state.lastName}
                </div>
              </div>
              <div className="sub_Header">
                <div className="sub_Inner">{this.state.email}</div>
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
                    type={state.showPassword ? 'text' : 'password'}
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
                      onClick={this.handleForgetPassword}
                      // href="/MobileOtpSend"
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
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message={this.state.message}
          action={
            <React.Fragment>
              <Button color="secondary" size="small" onClick={this.handleClose}>
                UNDO
              </Button>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={this.handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
    )
  }
}

export default EnterPassword
