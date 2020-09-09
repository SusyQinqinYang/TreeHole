import React from "react";
import HomeContainer from "../containers/homeNewWordsContainer";
import Memo from "./Memo.jsx"
import {
  HashRouter as Router,
  //   BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  Redirect,
} from "react-router-dom";

const App = (props) => {
  return (
    <Router>
      <div>
        <div className="Header">
          <h1 className="page-title">Tree Hole </h1>
          <div className="nav">
            <NavLink to="/" className="nav-home">
              Home
            </NavLink>
            <NavLink to="/memo" className="nav-memo">
              Memo
            </NavLink>
          </div>
        </div>

        <div className="page-body">
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/memo" component={Memo} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
