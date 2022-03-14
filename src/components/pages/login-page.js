import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, onLogin }) => {
  
  const navigate = useNavigate();
  
  return (
    <div className="jumbotron">
      <p>Login to see secret page!</p>
      <button
        className="btn btn-primary"
        onClick = {(e) => {onLogin();
                 navigate ('/');}}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
