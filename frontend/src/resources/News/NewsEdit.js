import React from 'react';
import { SimpleForm, TextInput, DateInput, ReferenceArrayInput, AutocompleteArrayInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import MarkdownInput from '../../markdown/MarkdownInput'
import NewsTitle from './NewsTitle';
import {
  BreadcrumbsItem,
  BreadcrumbsItemFinal
} from '../../common/BreadCrump'
import { DateTimeInput } from '@semapps/date-components';

export const NewsEdit = props => (
  <Edit title={<NewsTitle />} {...props}>
    <SimpleForm redirect="show">
      <BreadcrumbsItem to='/News'>Actualités</BreadcrumbsItem>
      <BreadcrumbsItemFinal/>

      <TextInput label="Titre" source="pair:label" fullWidth />
      <DateTimeInput label="Horaire" source="pair:createdAt" />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <ReferenceArrayInput label="Ressources liés" reference="Resource" source="pair:hasResource">
        <AutocompleteArrayInput optionText="pair:label" fullWidth/>
      </ReferenceArrayInput> 
    </SimpleForm>
  </Edit>
);

export default NewsEdit;
