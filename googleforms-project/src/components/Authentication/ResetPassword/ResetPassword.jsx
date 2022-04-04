import React, { Component } from 'react'
import './ResetPassword.scss'
import { Redirect } from 'react-router-dom'
import { TextField, Checkbox, Button } from '@material-ui/core'
import ErrorIcon from '@material-ui/icons/Error'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'

import GoogleFormServices from '../../../Services/GoogleFormServices'

const googleServices = new GoogleFormServices()

const validateForm = (errorStatus) => {
  let valid = true
  Object.values(errorStatus).forEach((val) => {
    val === true && (valid = false)
  })
  return valid
}

export class ResetPassword extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      email: props.location.email,
      password: '',
      confirmPassword: '',
      showPassword: false,
      error: {
        password: '',
        confirmPassword: '',
      },
      errorStatus: {
        password: false,
        confirmPassword: false,
      },
    }
  }

  checkNullity = (event) => {
    event.preventDefault()
    let state = this.state
    if (state.password === '' && state.confirmPassword === '') {
      state.errorStatus.password = true
      state.error.password = 'Enter a password'
    }
    if (
      state.password.length > 0 &&
      state.password.length < 8 &&
      state.confirmPassword === ''
    ) {
      state.errorStatus.password = true
      state.error.password = 'Use 8 characters or more for your password'
    }
    if (state.password.length > 7 && state.confirmPassword === '') {
      state.errorStatus.Password = true
      state.errorStatus.confirmPassword = true
      state.error.password = 'Enter a confirm Password'
    }
    if (
      state.password.length > 7 &&
      state.confirmPassword.length > 0 &&
      state.password !== state.confirmPassword
    ) {
      state.errorStatus.password = true
      state.error.password = 'Password not match'
    }
    this.setState({ state })
  }

  checkInvalidNullity = (event) => {
    event.preventDefault()
    let state = this.state
    if (
      state.password === state.confirmPassword &&
      state.password.length > 7 &&
      state.password.length > 7
    ) {
      state.errorStatus.password = false
      state.errorStatus.confirmPassword = false
    }
    this.setState({ state })
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.setState({ open: false })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.checkNullity(event)
    this.checkInvalidNullity(event)
    let state = this.state
    if (validateForm(state.errorStatus)) {
      console.log('Acceptable')

      let data = {
        emailID: this.state.email,
        password: this.state.password,
      }

      googleServices
        .ResetPassword(data)
        .then((data) => {
          console.log('Data : ', data)
          if (data.data.isSuccess) {
            this.setState({ open: true })
            this.setState({ message: data.data.message })
            setTimeout(function () {
              //   this.props.history.push({
              //   pathname: '/SignInEmail',
              //   //state: data_you_need_to_pass
              // })
              window.location.replace('http://localhost:4200/SignInEmail');
              // <Redirect to="/SignInEmail" />
            }, 2000)
          } else {
            console.log('Error : ', data.data.message)
            this.setState({ open: true })
            this.setState({ message: data.data.message })
          }
        })
        .catch((error) => {
          console.log('Error : ', error)
          this.setState({ open: true })
          this.setState({ message: error })
        })
    } else {
      console.log('Not Acceptable')
    }
  }

  handleChange = (event) => {
    let state = this.state
    const { name, value } = event.target
    switch (name) {
      case 'password':
        state.password = value
        break
      case 'confirmPassword':
        state.confirmPassword = value
        break
      case 'showPassword':
        state.showPassword = !state.showPassword
        break
      default:
        break
    }
    this.setState({ state })
  }

  render() {
    let state = this.state
    console.log(this.state)
    return (
      <div className="resetPassword_Container">
        <div className="sub_Container">
          <div className="inner_Container">
            <div className="google_Header">
              <span className="G">VCoder</span>
              {/* <span className="o1">o</span>
              <span className="o2">o</span>
              <span className="g">g</span>
              <span className="l">l</span>
              <span className="e">e</span> */}
            </div>
            <div className="body">
              <div className="resetPassword_Header">
                <div className="resetPassword_Inner">Change password</div>
              </div>
              <div className="sub_Header">
                <div className="sub_Inner">{state.email}</div>
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
                    autoComplete="off"
                    error={state.errorStatus.password ? true : false}
                    className="Em_InputField"
                    label="Create password"
                    variant="outlined"
                    name="password"
                    type={state.showPassword ? 'text' : 'password'}
                    value={state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input_Field2">
                  <TextField
                    autoComplete="off"
                    error={state.errorStatus.confirmPassword ? true : false}
                    className="Em_InputField"
                    label="Confirm"
                    variant="outlined"
                    helperText={
                      state.errorStatus.password ? '' : 'At least 8 characters'
                    }
                    name="confirmPassword"
                    type={state.showPassword ? 'text' : 'password'}
                    value={state.confirmPassword}
                    onChange={this.handleChange}
                  />
                </div>
                {(state.errorStatus.password ||
                  state.errorStatus.confirmPassword) && (
                  <div className="errorMessage">
                    <ErrorIcon fontSize="small" />
                    <div className="errorText">{state.error.password}</div>
                  </div>
                )}
                <div className="show_password">
                  <Checkbox
                    color="primary"
                    className="check_Point"
                    name="showPassword"
                    checked={state.showPassword}
                    onClick={this.handleChange}
                  />
                  <div className="s_passwordText">Show password</div>
                </div>
                <div className="bottons">
                  <div className="next_Button">
                    <Button
                      variant="contained"
                      color="primary"
                      className="n_Button"
                      onClick={this.handleSubmit}
                    >
                      Save password
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

export default ResetPassword
