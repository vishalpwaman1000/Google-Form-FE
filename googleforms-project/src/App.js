import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/Authentication/SignUp/SignUp.jsx";
import SignIn from "./components/Authentication/SignIn/SignIn.jsx";
import EnterPassword from "./components/Authentication/SignIn/EnterPassword.jsx";
import ResetPassword from "./components/Authentication/ResetPassword/ResetPassword.jsx";
import ForgetEmail from "./components/Authentication/ForgetEmail/ForgetEmail.jsx";
import FindFLName from "./components/Authentication/ForgetEmail/FindFLName.jsx";
import SendVCCode from "./components/Authentication/ForgetEmail/SendVCCode.jsx";
import EnterVCCode from "./components/Authentication/ForgetEmail/EnterVCCode.jsx";
import MobileOtpSend from "./components/Authentication/ResetPassword/MobileOtpSend.jsx";
import MobileOtpVerification from "./components/Authentication/ResetPassword/MobileOtpVerification.jsx";
import OtpEmailVerification from "./components/Authentication/ResetPassword/OtpEmailVerification.jsx";
import SendOtpOnMobile from "./components/Authentication/MobileVerification/SendOtpOnMobile.jsx";
import MOtpVerification from "./components/Authentication/MobileVerification/MOtpVerification.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/SignInEmail" component={SignIn} />
          <Route exact path="/SignInEnterPassword" component={EnterPassword} />
          <Route exact path="/ResetPassword" component={ResetPassword} />
          <Route exact path="/ForgetEmail" component={ForgetEmail} />
          <Route exact path="/FindFLName" component={FindFLName} />
          <Route exact path="/SendVCCode" component={SendVCCode} />
          <Route exact path="/EnterVCCode" component={EnterVCCode} />
          <Route exact path="/MobileOtpSend" component={MobileOtpSend} />
          <Route
            exact
            path="/OtpEmailVerification"
            component={OtpEmailVerification}
          />
          <Route
            exact
            path="/MobileOtpVerification"
            component={MobileOtpVerification}
          />
          <Route exact path="/SendOtpOnMobile" component={SendOtpOnMobile} />
          <Route exact path="/MOtpVerification" component={MOtpVerification} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
