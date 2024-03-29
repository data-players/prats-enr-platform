import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import  Edit from '../../layout/edit/Edit';
import StatusTitle from './StatusTitle';

export const ThemeEdit = props => (
  <Edit title={<StatusTitle />} {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
    </SimpleForm>
  </Edit>
);

export default ThemeEdit;
