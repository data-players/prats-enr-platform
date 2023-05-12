import React from 'react';
import { ImageInput, SimpleForm, TextInput, AutocompleteArrayInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import { MarkdownInput } from '@semapps/markdown-components';
import ProjectTitle from './ProjectTitle';
import { ImageField, ReferenceArrayInput } from '@semapps/semantic-data-provider';

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
      <ReferenceArrayInput label="Portrait lié" reference="Portrait" source="pair:hasPortrait">
        <AutocompleteArrayInput optionText="pair:label" fullWidth/>
      </ReferenceArrayInput> 
    </SimpleForm>
  </Edit>
);

export default ProjectEdit;
