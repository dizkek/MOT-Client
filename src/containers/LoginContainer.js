import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { renderSingUp, closeSingUp } from '../actions';
import { requestSignUp, requestLogIn } from '../thunks';
import Login from '../components/Login';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const { isSigning, isLoading } = useSelector(state => state.render);
  
  const onClickLogIn = (data) => {
    dispatch(requestLogIn(data));
  };

  const singUp = (data) => {
    dispatch(requestSignUp(data));
  };

  const onClickRenderSignUp = () => {
    dispatch(renderSingUp());
  };

  const onClickCloseSignUp = () => {
    console.log(555555)
    dispatch(closeSingUp());
  };

  return (
    <Login 
      onClickLogIn={onClickLogIn} 
      onCLickSingUp={singUp} 
      isSigning={isSigning} 
      onClickRenderSignUp={onClickRenderSignUp}
      onClickCloseSignUp={onClickCloseSignUp}
      isLoading={isLoading}
    />
  );
};

export default LoginContainer;
