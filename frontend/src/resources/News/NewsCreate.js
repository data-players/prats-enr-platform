import React from 'react';
import { SimpleForm, TextInput, required } from 'react-admin';
import { DateInput } from '@semapps/date-components';
import  Create  from '../../layout/create/Create';

const NewsCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="pair:label" validate={[required()]} fullWidth />
      <DateInput label="Horaire" source="pair:createdAt" validate={[required()]} />
      <DateInput label="Horaire de fin" source="pair:endedAt" />
      <div style={{fontSize: "12px", color: "grey", fontStyle:"italic"}}>* Doivent être remplit</div>
    </SimpleForm>
  </Create>
);

export default NewsCreate;
