import React from 'react';
import {Typography, Box, makeStyles} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { MainList, Show } from '@semapps/archipelago-layout';
import MarkdownField from "../../markdown/MarkdownField";
import NewsTitle from './NewsTitle';



const NewsShow = props => (
  <Show title={<NewsTitle />} {...props}>
    <MarkdownField source="semapps:content" />
  </Show>
);

export default NewsShow;
