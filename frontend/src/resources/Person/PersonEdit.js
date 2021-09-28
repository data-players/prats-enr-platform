import React from 'react';
import { Edit } from '@semapps/archipelago-layout';
import PersonTitle from './PersonTitle';
import { ImageField, ImageInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'ra-ui-materialui';
import MarkdownInput from '../../markdown/MarkdownInput';

export const PersonEdit = props => (
  <Edit title={<PersonTitle />} {...props}>
    <SimpleForm mode="edit" >
      <TextInput source="pair:label" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <ImageInput source="image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <ReferenceInput label="Organisation" reference="Organization" source="pair:hasOrganization">
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export default PersonEdit;
