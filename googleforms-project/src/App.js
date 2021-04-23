import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
