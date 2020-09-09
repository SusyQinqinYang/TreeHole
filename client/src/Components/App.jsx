import React from "react";
import HomeContainer from "../containers/homeNewWordsContainer";
import Memo from "./Memo.jsx"
import {
  // HashRouter as Router,
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  Redirect,
} from "react-router-dom";

const App = (props) => {
  return (
    <Router>
      <div style={{ "text-align": "center"}}>
        <div className="Header">
          <h1 className="page-title" style={{"paddingTop": "100px"}}>Tree Hole </h1>
          <div className="nav" style={{"paddingBottom": "20px"}}>
            <NavLink to="/" className="nav-home" style={{"paddingRight": "20px"}}>
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
