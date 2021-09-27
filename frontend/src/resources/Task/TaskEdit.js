import React from 'react';
import { SelectInput, ImageInput, SimpleForm, TextInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import MarkdownInput from '../../markdown/MarkdownInput'
import TaskTitle from './TaskTitle';
import { ImageField, ReferenceInput } from '@semapps/semantic-data-provider';

export const TaskEdit = props => (
  <Edit title={<TaskTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <TextInput label="Energie" source='pair:powerEnergy' fullWidth />
      <ImageInput source="image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <TextInput label="Legende Photo" source='pair:legend' fullWidth />
      <TextInput source="pair:comment" fullWidth />
      <ReferenceInput label="Personnes liés au chantier" reference="Person" source="pair:hasPerson">
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <MarkdownInput multiline source="pair:description" fullWidth />
      <SelectInput source="pair:hasStatus" choices={[
          { id: 'Running', name: 'En Cours' },
          { id: 'Ended', name: 'Terminé' },
          { id: 'Coming', name: 'A Venir' },
      ]} />
    </SimpleForm>
  </Edit>
);

export default TaskEdit;
