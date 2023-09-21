import React from 'react';
import { SimpleForm, TextInput, required } from 'react-admin';
import { Create } from '@semapps/archipelago-layout';
import { DateTimeInput } from '@semapps/date-components';

const NewsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="pair:label" validate={[required()]} fullWidth />
      <DateTimeInput label="Horaire" source="pair:createdAt" validate={[required()]} />
      <DateTimeInput label="Horaire de fin" source="pair:endedAt" />
      <div style={{fontSize: "12px", color: "grey", fontStyle:"italic"}}>* Doivent être remplit</div>
    </SimpleForm>
  </Create>
);

export default NewsCreate;
