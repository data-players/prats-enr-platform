import React from 'react';
import { ImageInput, SimpleForm, TextInput, AutocompleteArrayInput, ImageField } from 'react-admin';
import  Edit from '../../layout/edit/Edit';
import { MarkdownInput } from '@semapps/markdown-components';
import ProjectTitle from './ProjectTitle';
import { ReferenceArrayInput } from '@semapps/input-components';

export const ProjectEdit = props => (
  <Edit title={<ProjectTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <TextInput label="Courte description" source="pair:comment" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <ImageInput source="image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <ImageInput source="pair:logo" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <TextInput label="Site internet" source="pair:homePage" fullWidth />
      <TextInput label="Lien extérieur" source="prats:link" fullWidth />
      <ReferenceArrayInput label="Portraits liés" reference="Portrait" source="pair:hasPortrait">
        <AutocompleteArrayInput optionText="pair:label" fullWidth/>
      </ReferenceArrayInput>
      <ReferenceArrayInput label="Actualitées liées" reference="News" source="pair:hasNews">
        <AutocompleteArrayInput optionText="pair:label" fullWidth/>
      </ReferenceArrayInput> 
      <ReferenceArrayInput label="Ressources liées" reference="Resource" source="pair:hasResource">
        <AutocompleteArrayInput optionText="pair:label" fullWidth/>
      </ReferenceArrayInput> 
    </SimpleForm>
  </Edit>
);

export default ProjectEdit;
