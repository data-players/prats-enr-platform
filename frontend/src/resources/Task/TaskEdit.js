import React from 'react';
import { ImageInput, SimpleForm, TextInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import { MarkdownInput } from '@semapps/markdown-components';
import TaskTitle from './TaskTitle';
import { ImageField, ReferenceInput } from '@semapps/semantic-data-provider';
import LocationInput from '../../common/LocationInput';

export const TaskEdit = props => (
  <Edit title={<TaskTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <TextInput label="Energie" source='pair:powerEnergy' fullWidth />
      <ImageInput source="image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <TextInput label="Legende Photo" source='pair:legend' fullWidth />
      <TextInput label="Commentaire" source="pair:comment" fullWidth />
      <TextInput label="Propriétaire" source="prats:owner" fullWidth />
      <TextInput label="Bénéficiaire/Exploitant" source="prats:user" fullWidth />
      <TextInput label="Gestionnaire" source="prats:administrator" fullWidth />
      <LocationInput label="Address" source="pair:hasLocation" fullWidth />
      {/* <ReferenceInput label="Personnes liés au chantier" reference="Person" source="pair:hasPerson">
        <SelectInput optionText="pair:label" />
      </ReferenceInput> */}
    </SimpleForm>
  </Edit>
);

export default TaskEdit;
