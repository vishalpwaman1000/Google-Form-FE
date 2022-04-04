import React, { Component } from 'react'
import './../ForgetEmail/ForgetEmail.scss'
import Image from './../../../Asserts/FindEmailSendVCCode.png'
import { Button } from '@material-ui/core'
import GoogleFormServices from '../../../Services/GoogleFormServices'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

const googleService = new GoogleFormServices()

export class OtpEmailVerification extends Component {
  constructor(props) {
    super()
    this.state = {
      email:
        props.location.email === undefined
          ? '[email ID]'
          : props.location.email,
      recoveryEmail: props.location.recoveryEmail,
      openProgress: false,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.email !== '[email ID]') {
      this.setState({ openProgress: true })
      console.log('Acceptable')
      let data = {
        emailID: this.state.recoveryEmail,
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
              recoveryAccount: this.state.recoveryEmail,
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

  render() {
    return (
      <div className="forgetEmail_Container">
        <div className="sub_Container" style={{ width: '442px' }}>
          <div className="inner_Container">
            <div className="google_Header">
              <span className="G">VCoder</span>
            </div>
            <div className="body">
              <div className="forgetEmail_Header">
                <div className="forgetEmail_Inner">Get a verification Link</div>
              </div>
              <div
                className="forgetEmail_Body"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  margin: '20px 0 0 0',
                }}
              >
                <div className="image">
                  <img src={Image} className="image" alt="" />
                </div>
                <div className="suggestionText" style={{ width: '100%' }}>
                  <div
                    className="text"
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      fontSize: '14px',
                      fontFamily:
                        'roboto, Noto Sans Myanmar UI, arial, sans-serif',
                      lineHeight: '20.0004px',
                    }}
                  >
                    Vcoder will send a verification Code to&nbsp;
                    <b>{this.state.recoveryEmail}</b>
                  </div>
                </div>
                <div className="bottons" style={{ width: '100%' }}>
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
        <Backdrop
          className="Progress"
          open={this.state.openProgress}
          onClick={this.handleProgressClose}
          style={{ zIndex: '1', color: 'white' }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    )
  }
}

export default OtpEmailVerification
