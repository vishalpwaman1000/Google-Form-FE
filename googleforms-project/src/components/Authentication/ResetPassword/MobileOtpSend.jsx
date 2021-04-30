import React, { Component } from "react";
import "./OtpVerification.scss";
import Image from "./../../../Asserts/MobileOtp.png";
import { Button } from "@material-ui/core";

export class MobileOtpSend extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="otpVerification_Container">
        <div className="sub_Container" style={{ width: "442px" }}>
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
              <div className="otpVerification_Header">
                <div className="otpVerification_Inner">Account Recovery</div>
                <div className="sub_Inner_Suggestion">
                  This helps show that this account really belongs to you
                  <div className="sub_Header">
                    <div className="sub_Inner"></div>
                  </div>
                </div>
              </div>
              <div
                className="otpVerification_Body"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  margin: "10px 0 0 0",
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
                        width: "100%",
                        textAlign: "left",
                        fontSize: "15px",
                        fontFamily:
                          "roboto, Noto Sans Myanmar UI, arial, sans-serif",
                        lineHeight: "20.0004px",
                      }}
                    >
                      Google will send a verification code to your ***** *9722
                      standard rate apply
                    </div>
                  </div>
                </div>
                <div className="bottons" style={{ width: "100%" }}>
                  <div className="tryAnotherButton">
                    <Button color="primary" className="ca_Button">
                      Try another way
                    </Button>
                  </div>
                  <div
                    className="next_Button"
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
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
      </div>
    );
  }
}

export default MobileOtpSend;
