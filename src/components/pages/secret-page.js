import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SecretPage({ isLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      return navigate('/');
    }
  });

  return (
    <div className="jumbotron text-center">
      <h3>This page is full of secrets!!!</h3>
    </div>
  );
}

export default SecretPage;
