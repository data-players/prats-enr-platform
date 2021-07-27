import React from 'react';
import {Typography, Box, makeStyles} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { MainList, Show} from '@semapps/archipelago-layout';
import { TextField} from 'react-admin';
import MarkdownField from "../../markdown/MarkdownField";
import NewsTitle from './NewsTitle';
import {
  BreadcrumbsItem
} from 'react-breadcrumbs-dynamic'

const Title = ({record,source}) => {
  console.log(record,source);
  return<Typography variant="h1">{record[source]}</Typography>
}

const NewsShow = props => (
  <>
    <BreadcrumbsItem style={{'text-decoration': 'none', 'color':'black'}} to='/News'>Actualités</BreadcrumbsItem>
    <Show title={<NewsTitle />} {...props}>
      <MainList>
        <Title source="semapps:title"/>
        <MarkdownField source="semapps:content" addLabel={false}/>
      </MainList>
    </Show>
  </>

);

export default NewsShow;
