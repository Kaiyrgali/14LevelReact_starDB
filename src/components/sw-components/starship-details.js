import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';
import { useParams } from 'react-router-dom';

const StarshipDetails = (props) => {
  // console.log (props);
  const params = useParams();
  console.log (params);
  const prodId = params.id;
  // const prodName = params.name;

  console.log (prodId);
  console.log (props);
  // props.itemId = 1;
  // console.log (props);
  // const itemId = prodId;

  // this.props.itemId = prodId
  return (
    <ItemDetails { ...props }>
{/* console.log(itemId); */}
    {/* <ItemDetails {'6'}> */}
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  // const params = useParams();
  // const prodId = params.id;
  // UseParams = useParams();
  // // console.log (params);
  // const prodId = params.id;
  // // const prodName = params.name;

  // console.log (prodId);
  // console.log (props);
  // const itemId = prodId;
  
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
};

export default withSwapiService(mapMethodsToProps) (StarshipDetails);
