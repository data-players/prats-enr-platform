import React from 'react';
import  Edit from '../../layout/edit/Edit';
import PlaceTitle from './PlaceTitle';
import PlaceForm from "./PlaceForm";

export const PlaceEdit = props => (
  <Edit title={<PlaceTitle />} {...props}>
    <PlaceForm mode="edit" />
  </Edit>
);

export default PlaceEdit;
