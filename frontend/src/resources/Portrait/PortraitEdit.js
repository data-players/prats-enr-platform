import React from 'react';
import { ImageInput, SimpleForm, TextInput, AutocompleteArrayInput, ImageField } from 'react-admin';
import Edit from '../../layout/edit/Edit';
import MarkdownInput from '../../markdown/MarkdownInput';
import PortraitTitle from './PortraitTitle';
import { ReferenceArrayInput } from '@semapps/input-components';

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
      <ReferenceArrayInput label="Ressources liées" reference="Resource" source="pair:hasResource">
        <AutocompleteArrayInput optionText="pair:label" fullWidth/>
      </ReferenceArrayInput> 
      <ReferenceArrayInput label="Projets liées" reference="Project" source="pair:hasProject">
        <AutocompleteArrayInput optionText="pair:label" fullWidth/>
      </ReferenceArrayInput> 
      <ReferenceArrayInput label="Actualitées liées" reference="News" source="pair:hasNews">
        <AutocompleteArrayInput optionText="pair:label" fullWidth/>
      </ReferenceArrayInput> 
      <TextInput label="Ordre dans la liste : choisir un chiffre, 000001 sera le premier à afficher" source='prats:listOrder' fullWidth />
    </SimpleForm>
  </Edit>
);

export default PortraitEdit;
