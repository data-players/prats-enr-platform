import React from 'react';
import { SelectInput, ImageInput, SimpleForm, TextInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import MarkdownInput from '../../markdown/MarkdownInput'
import TaskTitle from './TaskTitle';
import { extractContext,LocationInput } from '@semapps/geo-components';
import { ImageField, ReferenceInput } from '@semapps/semantic-data-provider';

export const TaskEdit = props => (
  <Edit title={<TaskTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <TextInput source='pair:powerEnergy' fullWidth />
      <ReferenceInput reference="Organization" source="pair:hasOrganization" filter={{ a: 'pair:taskOrganization' }}>
        <SelectInput optionText="pair:label" />
      </ReferenceInput>
      <ImageInput source="image" accept="image/*">
            <ImageField source="src" />
          </ImageInput>
      <MarkdownInput multiline source="pair:description" fullWidth />
      <LocationInput
        mapboxConfig={{
          access_token: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
          types: ['place', 'address'],
          country: ['fr', 'be', 'ch']
        }}
        parse={value => ({
          type: 'pair:Place',
          'pair:label': value.place_name,
          'pair:longitude': value.center[0],
          'pair:latitude': value.center[1],
          'pair:hasPostalAddress': {
            type: 'pair:PostalAddress',
            'pair:addressLocality': value.place_type[0] === 'place' ? value.text : extractContext(value.context, 'place'),
            'pair:addressStreet': value.place_type[0] === 'address' ? [value.address, value.text].join(' ') : undefined,
            'pair:addressZipCode': extractContext(value.context, 'postcode'),
            'pair:addressCountry': extractContext(value.context, 'country')
          }
        })}
        optionText={resource => resource['pair:label']}
        source="pair:hasLocation" fullWidth
      />
    </SimpleForm>
  </Edit>
);

export default TaskEdit;
