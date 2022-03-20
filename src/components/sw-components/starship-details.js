import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetails, { Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

function StarshipDetails(props) {
  const params = useParams();
  const prodId = params.id;

  return (
    <ItemDetails
      itemId={prodId}
      {...props}
    >
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
}

const mapMethodsToProps = (swapiService) => ({
  getData: swapiService.getStarship,
  getImageUrl: swapiService.getStarshipImage,
});

export default withSwapiService(mapMethodsToProps)(StarshipDetails);
