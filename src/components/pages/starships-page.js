import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StarshipList } from '../sw-components';

function StarshipsPage(props) {
  return (
    <div>
      <StarshipList
        onItemSelected={useNavigate()}
      />
    </div>
  );
}

export default StarshipsPage;
