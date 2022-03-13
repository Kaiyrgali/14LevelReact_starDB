import React from 'react';
import { StarshipList } from '../sw-components';

const StarshipsPage = (props) => {
  console.log(props);
    return (
      <div>
        <StarshipList 
         onItemSelected={(itemId) => {}} />
      </div>
    );
};

// export default withRouter(StarshipsPage);
export default StarshipsPage;