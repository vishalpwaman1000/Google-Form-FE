import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/SignIn" component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
