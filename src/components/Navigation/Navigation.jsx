import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
export class Navigation extends Component {
  render() {
    return (
      <div>
        <ul className={styles["nav-bar"]}>
          <li className={styles["nav-links"]}>
            <NavLink to="/home" className={styles["link"]}>
              Home
            </NavLink>
          </li>
          <li className={styles["nav-links"]}>
            <NavLink to="/todolist" className={styles["link"]}>
              Todo
            </NavLink>
          </li>
          <li className={styles["nav-links"]}>
            <NavLink to="/" className={styles["link"]}>
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
