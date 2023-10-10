import React from 'react';
import Create from '../../layout/create/Create';
import PlaceForm from './PlaceForm';

export const PlaceCreate = props => (
  <Create {...props}>
    <PlaceForm mode="create" />
  </Create>
);

export default PlaceCreate;