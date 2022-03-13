import React from 'react';
import { StarshipList } from '../sw-components';
import { withRouter, Outlet } from 'react-router-dom';

const StarshipsPage = ({history}) => {
  
    return (
      <div>
        <StarshipList
         onItemSelected={(itemId) => {
           history.push(`starships/${itemId}`);

         }} />
      </div>
    );
};

export default withRouter(StarshipsPage);
