import React, { Component } from 'react'
import './ForgetEmail.scss'
import Image from './../../../Asserts/FindEmailSendVCCode.png'
import { Button } from '@material-ui/core'
import GoogleFormServices from '../../../Services/GoogleFormServices'
import CloseIcon from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
const googleServices = new GoogleFormServices()

export class FindFLName extends Component {
  constructor(props) {
    super()
    this.state = {
      email: props.location.email,
      open: false,
      openProgress: false,
    }
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.setState({ open: false })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.email !== undefined) {
      console.log('Acceptable')
      this.setState({ openProgress: true })
      let data = {
        emailID: this.state.email,
      }

      googleServices
        .SendVerificationCodeOnEmail(data)
        .then((data) => {
          console.log('Data : ', data)
          if (data.data.isSuccess) {
            this.setState({ open: true, openProgress: false })
            this.setState({ message: data.data.isSuccess })
            this.props.history.push({
              pathname: '/EnterVCCode',
              email: this.state.email,
            })
          } else {
            this.setState({ open: true, openProgress: false })
            this.setState({ message: data.data.isSuccess })
          }
        })
        .catch((error) => {
          console.log('Error : ', error)
        })
    } else {
      console.log('Not Acceptable')
      this.setState({ open: true })
      this.setState({ message: 'Something Went Wrong' })
    }
  }

  handleProgressClose = () => {
    this.setState({})
  }

  render() {
    console.log('Status : ', this.state)
    return (
      <div className="forgetEmail_Container">
        <div className="sub_Container" style={{ width: '442px' }}>
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
              <div className="forgetEmail_Header">
                <div className="forgetEmail_Inner">Get a verification code</div>
                {/* <div className='forgetEmail_SubInner'>To help keep your account safe, Google wants to make sure it???s really you trying to sign in</div> */}
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
                <div className="suggestionText">
                  <div
                    className="text"
                    style={{
                      width: '70%',
                      textAlign: 'left',
                      fontSize: '14px',
                      fontFamily: 'roboto',
                      lineHeight: '20.0004px',
                      fontWeight: 500,
                    }}
                  >
                    Google will send a verification code to&nbsp;
                    {this.state.email}
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
          onClick={this.handleProgressClose}
          style={{ zIndex: '1', color: 'white' }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    )
  }
}

export default FindFLName
