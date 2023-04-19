import React from 'react';
import { ImageInput, SimpleForm, TextInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import MarkdownInput from '../../markdown/MarkdownInput'
import ResourceTitle from './ResourceTitle';
import { ImageField } from '@semapps/semantic-data-provider';

export const ResourceEdit = props => (
  <Edit title={<ResourceTitle />} {...props}>
    <SimpleForm redirect="show">
    <TextInput source="pair:label" fullWidth />
      <TextInput label="Commentaire" source="pair:comment" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <ImageInput source="image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <TextInput label="Lien Externe" source="pair:homePage" fullWidth/>
    </SimpleForm>
  </Edit>
);

export default ResourceEdit;
