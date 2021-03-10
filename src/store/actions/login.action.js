// const history = require("history/createBrowserHistory");
// require("history").createBrowserHistory;
// history / createBrowserHistory;

export const LOGIN = "LOGIN";
export const login = (username) => {
  return {
    type: LOGIN,
    username,
  };
};
export const checkLogin = (username, email, password) => {
  return async (dispatch) => {
    try {
      if (
        email === "aditi@gmail.com" ||
        (email === "aditipandit81@gmail.com" && password === "1234")
      ) {
        await new Promise((resolve, reject) =>
          setTimeout(() => resolve(), 500)
        );
        dispatch(login(username));

        return Promise.resolve(true);
      } else {
        await new Promise((resolve, reject) =>
          setTimeout(() => resolve(), 500)
        );
        alert("Incorrect email or password");
        return Promise.resolve(false);
      }
    } catch (err) {
      console.log("error", err);
      return Promise.reject();
    }
  };
};
