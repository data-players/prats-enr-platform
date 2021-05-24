import React from 'react';
import { SimpleForm, TextInput } from 'react-admin';
import { Edit } from '@semapps/archipelago-layout';
import MarkdownInput from '../../markdown/MarkdownInput'
import TaskTitle from './TaskTitle';

export const TaskEdit = props => (
  <Edit title={<TaskTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextInput source="pair:label" fullWidth />
      <MarkdownInput multiline source="pair:description" fullWidth />
    </SimpleForm>
  </Edit>
);

export default TaskEdit;
