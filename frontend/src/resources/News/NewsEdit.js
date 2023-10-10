import React from 'react';
import { SimpleForm, TextInput, DateInput, AutocompleteArrayInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import MarkdownInput from '../../markdown/MarkdownInput'
import NewsTitle from './NewsTitle';
import {
  BreadcrumbsItem,
  BreadcrumbsItemFinal
} from '../../common/BreadCrump'
import { ReferenceArrayInput } from '@semapps/input-components';

export const NewsEdit = props => (
  <Edit title={<NewsTitle />} {...props}>
    <SimpleForm redirect="show">
      <BreadcrumbsItem to='/News'>Actualités</BreadcrumbsItem>
      <BreadcrumbsItemFinal/>
      <TextInput label="Titre" source="pair:label" fullWidth />
      <DateInput label="Horaire" source="pair:createdAt" />
      <DateInput label="Horaire de fin" source="pair:endedAt" />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <TextInput label="Lien extérieur" source="prats:link" fullWidth />
      <ReferenceArrayInput label="Portraits liés" reference="Portrait" source="pair:hasPortrait">
        <AutocompleteArrayInput optionText="pair:label" fullWidth/>
      </ReferenceArrayInput>
      <ReferenceArrayInput label="Ressources liés" reference="Resource" source="pair:hasResource">
        <AutocompleteArrayInput optionText="pair:label" fullWidth/>
      </ReferenceArrayInput> 
    </SimpleForm>
  </Edit>
);

export default NewsEdit;
