import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  withRouter
} from "react-router-dom";
import "./App.css";
import FakeAuthService from "./components/FakeAuthService";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

const Logout = withRouter(({ history }) => {
  if (FakeAuthService.isAuthenticated()) {
    return (
      <button
        onClick={() =>
          FakeAuthService.signout(() => {
            history.push("/");
          })
        }
      >
        Log out
      </button>
    );
  }
  return <></>;
});

const Protected = () => <h1>Protected</h1>;

const Public = () => <h1>Public</h1>;

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/public">Public</Link>
            </li>
            <li>
              <Link to="/protected">Protected</Link>
            </li>
          </ul>
          <Route path="/public" component={Public}></Route>
          <PrivateRoute path="/protected" component={Protected}></PrivateRoute>
          <Route path="/login" component={Login}></Route>
          <Route path="/logout" component={Logout}></Route>
        </div>
        <div>
          <Logout />
        </div>
      </Router>
    </div>
  );
}

export default App;
