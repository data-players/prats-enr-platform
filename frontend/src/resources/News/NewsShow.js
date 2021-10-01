import React from 'react';
import {Typography} from '@material-ui/core';
import { MainList, Show} from '@semapps/archipelago-layout';
import MarkdownField from "../../markdown/MarkdownField";
import NewsTitle from './NewsTitle';
import {
  BreadcrumbsItem,
  BreadcrumbsItemFinal
} from '../../common/BreadCrump'

const Title = ({record,source}) => {
  // console.log(record,source);
  return<Typography variant="h1">{record[source]}</Typography>
}




const NewsShow = props => (
  <Show title={<NewsTitle />} {...props}>
    <>
      <BreadcrumbsItem to='/News'>Actualités</BreadcrumbsItem>
      <BreadcrumbsItemFinal/>
      <MainList>
        <MarkdownField source="semapps:content" addLabel={false}/>
      </MainList>
    </>
  </Show>
);

export default NewsShow;
