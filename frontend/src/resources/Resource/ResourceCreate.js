import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { Create } from '@semapps/archipelago-layout';

const ResourceCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="pair:label" validate={required()} fullWidth />
      <TextInput label="Ordre dans la liste : choisir un chiffre, 000001 sera le premier à afficher" source='prats:listOrder' defaultValue={"999999"} validate={required()} fullWidth />
    </SimpleForm>
  </Create>
);

export default ResourceCreate;
