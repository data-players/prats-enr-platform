import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import MarkdownInput from '../../markdown/MarkdownInput'
import NewsTitle from './NewsTitle';

export const NewsEdit = props => (
  <Edit title={<NewsTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="semapps:title" fullWidth />
      <MarkdownInput multiline source="semapps:content" fullWidth />
    </SimpleForm>
  </Edit>
);

export default NewsEdit;
