import React from 'react';
import { AutocompleteArrayInput, ImageInput, NumberInput, SimpleForm, TextInput, ImageField } from 'react-admin';
import Edit from "../../layout/edit/Edit";
import { MarkdownInput } from '@semapps/markdown-components';
import TaskTitle from './TaskTitle';
import { ReferenceArrayInput } from '@semapps/input-components';
import CustomImageField from '../../common/CustomImagefield';


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
        <CustomImageField />
      </ImageInput>
      <ReferenceArrayInput label="Ressources liées" reference="Resource" source="pair:hasResource">
        <AutocompleteArrayInput optionText="pair:label" fullWidth/>
      </ReferenceArrayInput> 
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
