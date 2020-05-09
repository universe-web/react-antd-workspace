import React from "react";
import { useDispatch } from "react-redux";
import { login } from "@root/actions";

function Login(props) {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return <button onClick={handleLogin}>Login</button>;
}

export default Login;
