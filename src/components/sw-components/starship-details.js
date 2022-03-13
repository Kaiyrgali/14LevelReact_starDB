import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';
import { useParams } from 'react-router-dom';

const StarshipDetails = (props) => {
  const params = useParams();
  // console.log (params);
  const prodId = params.id;
  // const prodName = params.name;

  // console.log (prodId, prodName);

  return (
    <ItemDetails {...props}>
    {/* <ItemDetails {'6'}> */}
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
};

export default withSwapiService(mapMethodsToProps) (StarshipDetails);
