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

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/EnterPassword" component={EnterPassword} />
          <Route exact path="/ResetPassword" component={ResetPassword} />
          <Route exact path="/ForgetEmail" component={ForgetEmail} />
          <Route exact path="/FindFLName" component={FindFLName} />
          <Route exact path="/SendVCCode" component={SendVCCode} />
          <Route exact path="/EnterVCCode" component={EnterVCCode} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
