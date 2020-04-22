import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendLoginRequest, requestSignUp } from '../actions';
import Login from '../components/Login';

const LoginContainer = () => {
  const dispatch = useDispatch();

  const logIn = (response) => {
    dispatch(sendLoginRequest(response))
  };

  const singUp = (data) => {
    dispatch(requestSignUp(data));
  };

  return (
    <Login dispatch={dispatch} logIn={logIn} singUp={singUp}/>
  );
};

export default LoginContainer;
