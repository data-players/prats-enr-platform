import React from 'react';
import { ImageInput, SimpleForm, TextInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import { MarkdownInput } from '@semapps/markdown-components';
import PortraitTitle from './PortraitTitle';
import { ImageField } from '@semapps/semantic-data-provider';

export const PortraitEdit = props => (
  <Edit title={<PortraitTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <TextInput label="Commentaire" source="pair:comment" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <ImageInput source="image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <ImageInput label="logo" source="pair:logo" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <TextInput label="Site internet" source="pair:homePage" fullWidth/>
      <TextInput label="Ordre dans la liste : choisir un chiffre, 1 sera le premier à afficher" source='prats:listOrder' fullWidth />
    </SimpleForm>
  </Edit>
);

export default PortraitEdit;
