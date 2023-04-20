import React from 'react';
import { DateInput, SimpleForm, TextInput, required } from 'react-admin';
import { Create } from '@semapps/archipelago-layout';
import { DateTimeInput } from '@semapps/date-components';

const NewsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="pair:label" validate={[required()]} fullWidth />
      <DateTimeInput label="Horaire" source="pair:createdAt" validate={[required()]} />
    </SimpleForm>
  </Create>
);

export default NewsCreate;
