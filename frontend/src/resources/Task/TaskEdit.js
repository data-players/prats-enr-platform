import React from 'react';
import { AutocompleteArrayInput, ImageInput, NumberInput, SimpleForm, TextInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import { MarkdownInput } from '@semapps/markdown-components';
import TaskTitle from './TaskTitle';
import { ImageField, ReferenceArrayInput, ReferenceInput } from '@semapps/semantic-data-provider';

export const TaskEdit = props => (
  <Edit title={<TaskTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <TextInput label="Courte Description" source="pair:comment" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
      <MarkdownInput label="Insérez ici vos graphiques d'énergies" multiline source="prats:graphic" fullWidth />
      <TextInput label="Energie" source='prats:powerEnergy' fullWidth />
      <TextInput label="Propriétaire" source="prats:owner" fullWidth />
      <ReferenceArrayInput label="Portrait affilié" reference="Portrait" source="pair:hasPortrait">
        <AutocompleteArrayInput optionText="pair:label" fullWidth/>
      </ReferenceArrayInput> 
      <ImageInput source="image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
      {/* <LocationInput ti="Addresse" source="pair:hasLocation" fullWidth /> */}
      <TextInput label="Latitude" source="prats:lat" fullWidth />
      <TextInput label="Longitude" source="prats:lng" fullWidth />
      <TextInput label="Identidiant webdyn" source="prats:webdynID" fullWidth />
      <NumberInput label="Facteur de production" source="prats:productionFactor" fullWidth />
      <TextInput label="Id du graphique journalié" source="prats:dailyGraphiqueID" fullWidth />
    </SimpleForm>
  </Edit>
);

export default TaskEdit;
