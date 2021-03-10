const initialState = {
  token: "",
  isLoggedIn: false,
  name: "",
};

const reducer = (state = initialState, action) => {
  if (action.type === "LOGIN") {
    return {
      ...state,
      isLoggedIn: true,
      token: "todayisMonday",
      name: action.username,
    };
  }
  return state;
};
export default reducer;
