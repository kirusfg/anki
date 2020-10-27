import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Learn from "./Learn";
import Create from "./Create";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Learn />
        </Route>
        <Route path="/new/">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
