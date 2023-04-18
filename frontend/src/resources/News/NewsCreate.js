import React from 'react';
import { DateInput, SimpleForm, TextInput, required } from 'react-admin';
import { Create } from '@semapps/archipelago-layout';

const NewsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="pair:label" validate={[required()]} fullWidth />
      <DateInput source="pair:createdAt" validate={[required()]} />
    </SimpleForm>
  </Create>
);

export default NewsCreate;
