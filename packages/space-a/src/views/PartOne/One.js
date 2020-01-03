import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { changePartOne } from "@root/actions/index";

function One(props) {
  const handleChangePartOne = () => {
    const { changePartOne } = props;
    changePartOne({ name: "one changed" });
  };

  console.log(props);

  return (
    <div>
      <p>module: partone</p>
      <p>name: {props.name}</p>

      <button onClick={handleChangePartOne}>changePartOne</button>
    </div>
  );
}

const mapStateToProps = state => {
  const { partone } = state.part;
  return {
    ...partone
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ changePartOne }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(One));
