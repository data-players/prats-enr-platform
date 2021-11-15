import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';
import { MainList, Show} from '@semapps/archipelago-layout';
import {MarkdownField} from "@semapps/markdown-components";
import NewsTitle from './NewsTitle';
import {
  BreadcrumbsItem,
  BreadcrumbsItemFinal
} from '../../common/BreadCrump'

const Title = ({record,source}) => {
  // console.log(record,source);
  return<Typography variant="h1">{record[source]}</Typography>
}

const useMdStyles= makeStyles({
  root: {
      backgroundColor : "red",
  }
});

const NewsShow = props => {
  const mdStyle = useMdStyles();
  return (
    <Show title={<NewsTitle />} {...props}>
      <>
        <BreadcrumbsItem to='/News'>Actualités</BreadcrumbsItem>
        <BreadcrumbsItemFinal/>
        <MainList classes={mdStyle} id="myList" >
          <MarkdownField id="myMarkdown" class="markdownClass" source="semapps:content" addLabel={false} />
        </MainList>
      </>
    </Show>
  )
};

export default NewsShow;
