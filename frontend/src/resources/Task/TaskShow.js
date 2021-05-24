import React from 'react';
import {Typography, Box, makeStyles} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { MainList, Show } from '@semapps/archipelago-layout';
import MarkdownField from "../../markdown/MarkdownField";
import TaskTitle from './TaskTitle';



const TaskShow = props => (
  <Show title={<TaskTitle />} {...props}>
    <MarkdownField source="pair:description" />
  </Show>
);

export default TaskShow;
