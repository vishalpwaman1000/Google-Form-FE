import React, { Component } from "react";
import "./ForgetEmail.scss";
import Image from "./../../Asserts/FindEmailSendVCCode.png";
import { Button } from "@material-ui/core";

export class FindFLName extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="forgetEmail_Container">
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
              <div className="forgetEmail_Header">
                <div className="forgetEmail_Inner">Get a verification code</div>
              </div>
              <div
                className="forgetEmail_Body"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  margin: "20px 0 0 0",
                }}
              >
                <div className="image">
                  <img src={Image} className="image" alt="" />
                </div>
                <div className="suggestionText">
                  <div
                    className="text"
                    style={{
                      width: "70%",
                      textAlign: "left",
                      fontSize: "14px",
                      fontFamily:
                        "roboto, Noto Sans Myanmar UI, arial, sans-serif",
                      lineHeight: "20.0004px",
                    }}
                  >
                    Google will send a verification code to
                    vishalpwaman123@gmail.com
                  </div>
                </div>
                <div className="bottons" style={{ width: "100%" }}>
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
                      Next
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

export default FindFLName;
