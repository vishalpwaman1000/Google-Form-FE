import React, { Component } from 'react'
import './ForgetEmail.scss'
import { TextField, Button } from '@material-ui/core'

import CloseIcon from '@material-ui/icons/Close'
import ErrorIcon from '@material-ui/icons/Error'
import IconButton from '@material-ui/core/IconButton'
import Snackbar from '@material-ui/core/Snackbar'

import GoogleFormServices from '../../../Services/GoogleFormServices'

const googleServices = new GoogleFormServices()

export class ForgetEmail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      email: '',
      errors: {
        email: '',
      },
      errorStatus: {
        email: false,
      },
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
    let state = this.state
    if (state.email === '') {
      state.errorStatus.email = true
      state.errors.email = 'Enter an email or phone number'
    } else {
      state.errorStatus.email = false
      let data = {
        userInput: this.state.email,
      }
      googleServices
        .EmailIDAvailability(data)
        .then((data) => {
          console.log('Data : ', data)
          if (data.data.isSuccess) {
            //
            // setTimeout(function () {
            //   this.setState({ open: true })
            //   this.setState({ message: data.data.message })
            // }, 2000)
            //
            this.props.history.push({
              pathname: '/FindFLName',
              email: this.state.email,
            })
          } else {
            this.setState({ open: true })
            this.setState({ message: data.data.message })
          }
        })
        .catch((error) => {
          console.log('Error : ', error)
        })
    }
    this.setState({ state })
  }

  handleChange = (event) => {
    event.preventDefault()

    this.setState({ email: event.target.value })
  }

  render() {
    let state = this.state
    let error = this.state.errors
    console.log(this.state)
    return (
      <div className="forgetEmail_Container">
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
                <div className="forgetEmail_Inner">Find your email</div>
              </div>
              <div className="sub_Header">
                <div className="sub_Inner">
                  Enter your phone number or recovery email
                </div>
              </div>
              <div className="forgetEmail_Body">
                <div className="input_Field">
                  <TextField
                    error={state.errorStatus.email ? true : false}
                    className="Em_InputField"
                    label="Phone number or email"
                    variant="outlined"
                    value={state.email}
                    onChange={this.handleChange}
                  />
                </div>
                {state.errorStatus.email && (
                  <div className="errorMessage">
                    <ErrorIcon fontSize="small" />
                    <div className="errorText">{error.email}</div>
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
      </div>
    )
  }
}

export default ForgetEmail
