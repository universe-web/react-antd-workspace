import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { changePartOne } from "@root/actions";

const stateSelector = props => {
  return createSelector(
    state => state.part.partone,
    data => data
  );
};

function One(props) {
  const data = useSelector(stateSelector(props));
  const dispatch = useDispatch();

  const handleChangePartOne = () => {
    dispatch(changePartOne({ name: "one changed" }));
  };

  const handleWinOpen = () => {
    window.open("https://www.baidu.com");
  };
  console.log(props);

  return (
    <div>
      <p>module: partone</p>
      <p>name: {data.name}</p>
      <button onClick={handleChangePartOne}>changePartOne</button>
      <br />
      <button onClick={handleWinOpen}>window.open</button>
    </div>
  );
}

export default withRouter(One);
