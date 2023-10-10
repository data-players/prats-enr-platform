import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import  Edit from '../../layout/edit/Edit';
import MarkdownInput from '../../markdown/MarkdownInput'
import PageTitle from './PageTitle';

export const PageEdit = props => (
  <Edit title={<PageTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="semapps:title" fullWidth />
      <MarkdownInput multiline source="semapps:content" fullWidth />
    </SimpleForm>
  </Edit>
);

export default PageEdit;
