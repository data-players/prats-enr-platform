import React from 'react';
import { SimpleForm, TextInput, DateInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import MarkdownInput from '../../markdown/MarkdownInput'
import NewsTitle from './NewsTitle';
import {
  BreadcrumbsItem,
  BreadcrumbsItemFinal
} from '../../common/BreadCrump'

export const NewsEdit = props => (
  <Edit title={<NewsTitle />} {...props}>
    <SimpleForm redirect="show">
      <BreadcrumbsItem to='/News'>Actualités</BreadcrumbsItem>
      <BreadcrumbsItemFinal/>
      <TextInput source="semapps:title" fullWidth />
      <MarkdownInput multiline source="semapps:content" fullWidth />
      <DateInput source="pair:createdAt" />
    </SimpleForm>
  </Edit>
);

export default NewsEdit;
