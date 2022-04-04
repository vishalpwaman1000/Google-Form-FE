import React, { Component } from 'react'
import './OtpVerification.scss'
import Image from './../../../Asserts/MobileOtp.png'
import { Button } from '@material-ui/core'
import GoogleFormServices from '../../../Services/GoogleFormServices'

import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'

import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

const googleService = new GoogleFormServices()

export class MobileOtpSend extends Component {
  constructor(props) {
    super()
    this.state = {
      email:
        props.location.email === undefined
          ? '[email id]'
          : props.location.email,
      mobileNumber:
        props.location.mobileNumber === undefined
          ? '[Mobile Number]'
          : props.location.mobileNumber,
      message: '',
      recoveryEmail: props.location.recoveryEmail,
      open: false,
      openProgress: false,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.mobileNumber !== '[Mobile Number]') {
      this.setState({ openProgress: true })
      console.log('Acceptable')
      let data = {
        emailID: this.state.mobileNumber,
      }
      console.log('SendVerificationCodeOnEmail Request Body', data)
      googleService
        .SendVerificationCodeOnEmail(data)
        .then((data) => {
          console.log('Data : ', data)
          this.setState({ openProgress: false })
          if (data.data.isSuccess) {
            this.props.history.push({
              pathname: '/MobileOtpVerification',
              recoveryAccount: this.state.mobileNumber,
              email: this.state.email,
            })
          } else {
            this.setState({ open: true, message: data.data.message })
          }
        })
        .catch((error) => {
          console.log('Error : ', error)
          this.setState({ openProgress: false })
        })
    } else {
      console.log('Not Acceptable')
      this.setState({ open: true, message: 'Something Went Wrong' })
    }
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.setState({ open: false })
  }

  handleOtpEmailVerification = (e) => {
    this.props.history.push({
      pathname: '/OtpEmailVerification',
      mobileNumber: this.state.mobileNumber,
      email: this.state.email,
      recoveryEmail: this.state.recoveryEmail,
    })
  }

  render() {
    console.log('State : ', this.state)
    return (
      <div className="otpVerification_Container">
        <div className="sub_Container" style={{ width: '442px' }}>
          <div className="inner_Container">
            <div className="google_Header">
              <span className="G">VCoder</span>
            </div>
            <div className="body">
              <div className="otpVerification_Header">
                <div className="otpVerification_Inner">Account Recovery</div>
                <div className="sub_Inner_Suggestion">
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
                <div className="image">
                  <img src={Image} className="image" alt="" />
                </div>
                <div class="suggestion">
                  <div className="SuggestionText1">Check your mobile Inbox</div>
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
                      }}
                    >
                      Google will send a verification code to your{' '}
                      <b>{this.state.mobileNumber}</b>&nbsp; standard rate apply
                    </div>
                  </div>
                </div>
                <div className="bottons" style={{ width: '100%' }}>
                  <div className="tryAnotherButton">
                    {this.state.recoveryEmail !== undefined &&
                    this.state.recoveryEmail !== '' ? (
                      <Button
                        color="primary"
                        className="ca_Button"
                        onClick={this.handleOtpEmailVerification}
                      >
                        Try another way
                      </Button>
                    ) : (
                      <div className="ca_Button"></div>
                    )}
                  </div>
                  <div
                    className="next_Button"
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      className="n_Button"
                      onClick={this.handleSubmit}
                    >
                      Send
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
        <Backdrop
          className="Progress"
          open={this.state.openProgress}
          // onClick={this.handleProgressClose}
          style={{ zIndex: '1', color: 'white' }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    )
  }
}

export default MobileOtpSend
