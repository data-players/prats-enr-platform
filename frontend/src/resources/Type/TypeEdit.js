import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import  Edit from '../../layout/edit/Edit';
import TypeTitle from './TypeTitle';

export const ThemeEdit = props => (
  <Edit title={<TypeTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
    </SimpleForm>
  </Edit>
);

export default ThemeEdit;
