import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AddToDo from "./Todolist/components/AddToDo";
import { Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "../src/components/ProtectedRoutes/ProtectedRoutes";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";
export let history = createBrowserHistory();

function App(props) {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Login} />
          <ProtectedRoute exact path="/home" {...props} component={Home} />
          <ProtectedRoute
            exact
            path="/todolist"
            {...props}
            component={AddToDo}
          />
        </Switch>
      </Router>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    token: state.login.token,
  };
};

export default connect(mapStateToProps)(App);
