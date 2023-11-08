import React from 'react';
import { ImageInput, SimpleForm, TextInput } from 'react-admin';
import Edit from "../../layout/edit/Edit";
import MarkdownInput from '../../markdown/MarkdownInput'
import ResourceTitle from './ResourceTitle';
import CustomImageField from '../../common/CustomImagefield';

export const ResourceEdit = props => (
  <Edit title={<ResourceTitle />} {...props}>
    <SimpleForm redirect="show">
    <TextInput source="pair:label" fullWidth />
      <TextInput label="Commentaire" source="pair:comment" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <ImageInput source="image" accept="image/*">
        <CustomImageField source="src" />
      </ImageInput>
      <TextInput label="Lien Externe" source="pair:homePage" fullWidth/>
      <TextInput label="Ordre dans la liste : choisir un chiffre, 000001 sera le premier à afficher" source='prats:listOrder' fullWidth />
    </SimpleForm>
  </Edit>
);

export default ResourceEdit;
