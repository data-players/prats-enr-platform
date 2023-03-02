import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import WorksiteTitle from './WorksiteTitle';
import MarkdownInput from '../../markdown/MarkdownInput'

export const ThemeEdit = props => (
  <Edit title={<WorksiteTitle />} {...props}>
    <SimpleForm>
      <TextInput source="pair:label" fullWidth />
      <TextInput source="pair:comment" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
    </SimpleForm>
  </Edit>
);

export default ThemeEdit;
