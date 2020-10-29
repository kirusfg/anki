import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Learn from "./Learn";
import Create from "./Create";
import Edit from "./Edit";

import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Learn />
          </Route>
          <Route path="/new/">
            <Create />
          </Route>
          <Route path="/edit/">
            <Edit />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
