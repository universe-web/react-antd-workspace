import React, { Component, Fragment } from "react";
import Login from "./login";
import { connect } from "react-redux";

const mapState = (state) => {
  return {
    own: state.own.own,
  };
};

const needLogin = (WrappedComponent) => {
  class HOC extends Component {
    render() {
      return (
        <Fragment>
          {this.props.own ? <WrappedComponent {...this.props} /> : <Login />}
        </Fragment>
      );
    }
  }

  return connect(mapState)(HOC);
};

export default needLogin;
