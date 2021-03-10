import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../store/actions/login.action";
import { history } from "../../App";
import style from "./Login.module.css";
//email:aditi@gmail.com
//password:1234
//username:Aditi
function Login(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1>Please Login</h1>
      <div className={style["form"]}>
        <form
          name="form"
          onSubmit={(event) => {
            event.preventDefault();
            props.handleSubmit(username, email, password);
          }}
        >
          <div className={style["login-div"]}>
            <label htmlFor="name">Username:</label>
            <input
              className={style["input"]}
              type="text"
              name="username"
              placeholder="John Doe"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            />
          </div>
          <br />
          <div className={style["login-div"]}>
            <label htmlFor="email">Email:</label>
            <input
              className={style["input"]}
              type="text"
              name="email"
              placeholder="example@xmail.com"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>
          <br />
          <div className={style["login-div"]}>
            <label htmlFor="password">Password:</label>
            <input
              className={style["input"]}
              type="password"
              name="username"
              placeholder="example@1234"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>
          <br />
          <button className={style["button"]} type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    token: state.login.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (username, email, password) =>
      dispatch(actionCreator.checkLogin(username, email, password)).then(
        (success) => {
          if (success) {
            history.push({
              pathname: "/home",
            });
          }
        }
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

/* <div>
        <h1>User Login</h1>

        <form
          name="form"
          onSubmit={(event) => {
            event.preventDefault();
            props.handleSubmit(email, password);
            console.log(props.isLoggedIn);
           
              props.isLoggedIn &&
                props.history.push({
                  pathname: "/homepage",
                  state: {
                    isLoggedIn: props.isLoggedIn,
                    token: props.token,
                  },
                });
          }}
        >
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="example@xmail.com"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="username"
              placeholder="example@1234"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>
          <br />
          <button type="submit">Login</button>
        </form>
      </div> */
