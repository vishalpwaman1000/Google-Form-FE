import React, { Component } from 'react'
import './EnterVCCode.scss'
import { TextField, Button } from '@material-ui/core'
import GoogleFormServices from '../../../Services/GoogleFormServices'
import CloseIcon from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
const googleServices = new GoogleFormServices()

export class EnterVCCode extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: props.location.email,
      openProgress: false,
      message: '',
      code: '',
      errors: {
        code: '',
      },
      errorStatus: {
        code: false,
      },
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let state = this.state
    if (state.code === '' && state.email === undefined) {
      console.log('Not Acceptable')
      state.errorStatus.code = true
      state.errors.code = 'Enter a code'
    } else {
      console.log('Acceptable')
      state.errorStatus.code = false
      //
      this.setState({ openProgress: true })
      //
      let data = {
        emailID: this.state.email,
        verificationCode: Number(this.state.code),
      }
      //
      console.log('Request Body : ', data)
      //
      googleServices
        .VerifyEmailVerificationCode(data)
        .then((data) => {
          //
          //
          if (data.data.isSuccess) {
            //
            //
            data = {
              userRecoveryAccount: data.data.emailID,
              emailID: this.state.email,
            }
            //
            console.log('VerifyEmailVerificationCode Request Body: ', data)
            //
            googleServices
              .SendEmailIdOnRecoveryAccount(data)
              .then((data) => {
                //
                //
                console.log('SendEmailIdOnRecoveryAccount Data : ', data)
                //
                this.setState({ openProgress: false })
                //
                this.props.history.push({
                  pathname: '/FinalFindEmailMessage',
                  email: this.state.email,
                })
                //
              })
              .catch((error) => {
                //
                console.log('Error : ', error)
                //
                this.setState({ openProgress: false })
              })
          } else {
            this.setState({
              open: true,
              openProgress: false,
              message: data.data.message,
            })
            // this.setState({ message: data.data.message })
          }
        })
        .catch((error) => {
          console.log('Error : ', error)
          this.setState({ open: true, openProgress: false, message: 'Error' })
          // this.setState({ message: 'Error' })
        })
    }
    this.setState({ state })
  }

  handleChange = (event) => {
    event.preventDefault()

    this.setState({ code: event.target.value })
  }

  render() {
    let state = this.state
    let error = this.state.errors
    console.log(this.state)
    return (
      <div className="enterVCCode_Container">
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
              <div className="forgetEmail_Header">
                <div className="forgetEmail_Inner">Enter the code</div>
              </div>
              <div className="sub_Header">
                <div className="sub_Inner">
                  Please provide additional information to aid in the recovery
                  process.
                </div>
                <div className="sub_Inner_Suggestion">
                  An email with a verification code was just sent to&nbsp;
                  {this.state.email}
                </div>
              </div>
              <div className="forgetEmail_Body">
                <div className="input_Field">
                  <TextField
                    error={state.errorStatus.code ? true : false}
                    className="Em_InputField"
                    label="Enter code"
                    variant="outlined"
                    value={state.code}
                    onChange={this.handleChange}
                  />
                </div>
                {state.errorStatus.code && (
                  <div className="errorMessage">
                    <ErrorIcon fontSize="small" />
                    <div className="errorText">{error.code}</div>
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

export default EnterVCCode
