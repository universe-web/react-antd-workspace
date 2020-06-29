import React from "react";
import needLogin from "@root/views/common/needLogin";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { changePartOne } from "@root/actions";
import { fetchApi } from "public-js";

const stateSelector = (props) => {
  return createSelector(
    (state) => state.part.partone,
    (data) => data
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

  const handleGetRequest = async () => {
    const option = {
      url: "/list",
      body: {
        size: 6,
      },
    };

    const list = await fetchApi(option);
    console.log(list);
  };

  const handlePostRequest = async () => {
    const option = {
      url: "/user/detail",
      method: "post",
      body: {
        uid: "u002",
      },
    };

    const userInfo = await fetchApi(option);
    console.log(userInfo);
  };

  console.log(props);

  return (
    <div>
      <p>module: partone</p>
      <p>name: {data.name}</p>
      <button onClick={handleChangePartOne}>changePartOne</button>
      <br />
      <button onClick={handleWinOpen}>window.open</button>
      <br />
      <span onClick={handleGetRequest}>Get请求</span>
      <br />
      <span onClick={handlePostRequest}>Post请求</span>
    </div>
  );
}

export default needLogin(One);
