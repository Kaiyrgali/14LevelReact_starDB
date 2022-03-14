import React from 'react';
import { PersonDetails, PersonList } from '../sw-components';
import Row from '../row';
import { useNavigate, useParams } from 'react-router-dom';

const PeoplePage =() => {

  const params = useParams();
  const prodId = params.id;
  const navigate = useNavigate();
  
    return (
      <Row
        left={<PersonList onItemSelected={(e) => navigate(`/people/${e}`)} />}
        right={<PersonDetails  itemId = {prodId} />} />
    );
  }

export default PeoplePage;
