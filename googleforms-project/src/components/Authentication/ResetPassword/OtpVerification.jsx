import React, { Component } from 'react'
import './OtpVerification.scss'
import { Button, TextField, InputAdornment } from '@material-ui/core'
import ErrorIcon from '@material-ui/icons/Error'
import GoogleFormServices from '../../../Services/GoogleFormServices'

import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'

const googleService = new GoogleFormServices()

export class MobileOtpVerification extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recoveryAccount:
        props.location.recoveryAccount === undefined
          ? '[Recovery Account]'
          : props.location.recoveryAccount,
      email:
        props.location.email === undefined
          ? '[email Id]'
          : props.location.email,
      otp: '',
      message: '',
      open: false,
      errors: {
        otp: '',
      },
      errorsStatus: {
        otp: false,
      },
    }
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.setState({ open: false })
  }

  handleNulity = (event) => {
    event.preventDefault()
    let state = this.state
    if (state.otp === '') {
      state.errorsStatus.otp = true
      state.errors.otp = 'Enter a code'
    }
    this.setState({ state })
  }

  handleInvalidNulity = (event) => {
    event.preventDefault()
    let state = this.state
    if (state.otp !== '') {
      state.errorsStatus.otp = false
    }
    this.setState({ state })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.handleNulity(event)
    this.handleInvalidNulity(event)
    if (this.state.otp !== '') {
      console.log('Acceptable')
      let data = {
        emailID: this.state.recoveryAccount,
        verificationCode: Number(this.state.otp),
      }

      googleService
        .VerifyEmailVerificationCode(data)
        .then((data) => {
          console.log('data : ', data)
          if (data.data.isSuccess) {
            this.props.history.push({
              pathname: '/ResetPassword',
              mobileNumber: this.state.mobileNumber,
              email: this.state.email,
            })
          } else {
            this.setState({ open: true, message: data.data.message })
          }
        })
        .catch((error) => {
          console.log('Error : ', error)
          this.setState({ open: true, message: 'Something Went Wrong' })
        })
    } else {
      console.log('Not Acceptable')
      this.setState({ open: true, message: 'Some Field Empty.' })
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    let state = this.state
    console.log(this.state)
    return (
      <div className="otpVerification_Container">
        <div
          className="sub_Container"
          style={{ width: '442px', height: '500px' }}
        >
          <div
            className="inner_Container"
            style={{ height: '400px', width: '400px' }}
          >
            <div className="google_Header">
              <span className="G">VCoder</span>
            </div>
            <div className="body">
              <div className="otpVerification_Header">
                <div className="otpVerification_Inner">Account Recovery</div>
                <div
                  className="sub_Inner_Suggestion"
                  style={{ width: '380px' }}
                >
                  This helps show that this account really belongs to you
                  <div className="sub_Header">
                    <div className="sub_Inner">{this.state.email}</div>
                  </div>
                </div>
              </div>
              <div
                className="otpVerification_Body"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  margin: '10px 0 0 0',
                }}
              >
                <div class="suggestion" style={{ height: '180px' }}>
                  <div className="suggestionText">
                    <div
                      className="text"
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        fontSize: '15px',
                        fontFamily:
                          'roboto, Noto Sans Myanmar UI, arial, sans-serif',
                        lineHeight: '20.0004px',
                        margin: '20px 0 0 0',
                      }}
                    >
                      <div class="subsuggestionText">
                        A text message with a 6-digit verification code was just
                        sent to <b>{this.state.recoveryAccount}</b>
                      </div>
                      <div
                        className="Input-Field"
                        style={{ width: '100%', margin: '30px 0 0 0' }}
                      >
                        <TextField
                          error={this.state.errors.otp ? true : false}
                          autoFocus={true}
                          className="Em_InputField"
                          label="Enter the code"
                          variant="outlined"
                          name="otp"
                          type="text"
                          style={{ width: '100%' }}
                          value={state.otp}
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
                        {state.errorsStatus.otp && (
                          <div className="errorMessage">
                            <ErrorIcon fontSize="small" />
                            <div className="errorText">{state.errors.otp}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bottons"
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
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

export default MobileOtpVerification
