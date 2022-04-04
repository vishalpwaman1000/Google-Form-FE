import React, { Component } from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Button } from '@material-ui/core'

export default class FinalFindEmailMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: props.location.email,
    }
  }

  handleRedirect = () => {
    this.props.history.push({
        pathname: '/SignInEmail',
        email: this.state.email,
      })
  }

  render() {
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
                <div className="forgetEmail_Inner">Finally Done</div>
              </div>
              <div className="sub_Header">
                <div className="sub_Inner" style={{ margin: '50px 0 0 0' }}>
                  Please Check {this.state.email} Recovery Account. We Send Your
                  Searching Email ID on {this.state.email} Recovery Account.
                </div>
                <div className="sub_Inner_Suggestion"></div>
                <div
                  className="forgetEmail_Body"
                  style={{ fontSize: '30px', fontFamily: 'Roboto' }}
                >
                  Thank You
                </div>
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
                      onClick={this.handleRedirect}
                    >
                      Back To Login
                    </Button>
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
