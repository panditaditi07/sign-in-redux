// import { Component } from "react";
// import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Navigation from "../Navigation/Navigation";

function Home(props) {
  console.log(props);
  return (
    <>
      <Navigation />

      <div>
        <h1>Welcome {props.name}</h1>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.login.isLoggedIn,
    token: state.login.token,
    name: state.login.name,
  };
};
export default connect(mapStateToProps)(Home);
// export default Home;
