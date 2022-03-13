import React from 'react';
import { StarshipList } from '../sw-components';
// import { withRouter, Outlet } from 'react-router-dom';

const StarshipsPage = (props) => {
  // const {some} = this.state.props;
  // console.log (some);
  // const newPath = (itemNew) => {
  // this.props.updateUrl(itemNew);
  // }
  // props.updateUrl(itemId);
  console.log(props);
    return (
      <div>
        {/* console.log (this.props); */}
        <StarshipList 
         onItemSelected={(itemId) => {
           console.log (props.updateUrl)
           props.updateUrl(itemId);
          //  newPath(itemId);
          //  console.log (newPath);
           console.log ('itemId - ', itemId);
          //  return 
          // const pageUrl = itemId;
          // this.state.updateUrl(itemId);

         }} />
      </div>
    );
};

// export default withRouter(StarshipsPage);
export default StarshipsPage;