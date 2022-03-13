import React from 'react';
import { StarshipList } from '../sw-components';
import { useNavigate } from 'react-router-dom';

const StarshipsPage = (props) => {
    return (
      <div>
        <StarshipList 
         onItemSelected={useNavigate()} />
      </div>
    );
};

export default StarshipsPage;