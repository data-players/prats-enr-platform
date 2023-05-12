import React from 'react';
import { ImageInput, SelectInput, SimpleForm, TextInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import { MarkdownInput } from '@semapps/markdown-components';
import TaskTitle from './TaskTitle';
import { ImageField, ReferenceInput } from '@semapps/semantic-data-provider';

export const TaskEdit = props => (
  <Edit title={<TaskTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <TextInput label="Courte Description" source="pair:comment" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <MarkdownInput label="Insérez ici vos graphiques d'énergies" multiline source="prats:graphic" fullWidth />
      <TextInput label="Energie" source='prats:powerEnergy' fullWidth />
      <TextInput label="Propriétaire" source="prats:owner" fullWidth />
      <ReferenceInput label="Gestionnaire" reference="Portrait" source="prats:hasManager">
        <SelectInput optionText="pair:label" fullWidth/>
      </ReferenceInput> 
      <ReferenceInput label="Exploitant" reference="Portrait" source="prats:hasOperator">
        <SelectInput optionText="pair:label" fullWidth/>
      </ReferenceInput> 
      <ReferenceInput label="Bénéficiaire" reference="Portrait" source="prats:hasBeneficiary">
        <SelectInput optionText="pair:label" fullWidth/>
      </ReferenceInput> 
      <ImageInput source="image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      <ImageInput source="pair:logo" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      {/* <LocationInput ti="Addresse" source="pair:hasLocation" fullWidth /> */}
      <TextInput label="Latitude" source="prats:lat" fullWidth />
      <TextInput label="Longitude" source="prats:lng" fullWidth />
    </SimpleForm>
  </Edit>
);

export default TaskEdit;
