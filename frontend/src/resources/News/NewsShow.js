import React from 'react';
import  MainList  from "../../common/lists/MainList/MainList";
import  Show  from "../../layout/show/Show";
import {MarkdownField} from "@semapps/markdown-components";
import NewsTitle from './NewsTitle';
import {
  BreadcrumbsItem,
  BreadcrumbsItemFinal
} from '../../common/BreadCrump'
import {  SimpleList, UrlField, useRecordContext } from 'react-admin';
import { ReferenceArrayField } from '@semapps/field-components';
import { makeStyles } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { format } from 'date-fns'
import { fr } from 'date-fns/locale';

const text = makeStyles({
  legend: {
    paddingLeft: '25px',
  },
  comment: {
    fontSize: "23px",
  },
  time: {
    fontSize: "30px"
  }
})

const StartEndDateComponent = ({ createdAt, endedAt, css}) => {
  const record = useRecordContext();
  if (!record) return null;

  return (
    record[createdAt] && record[endedAt] ?
      <div style={{fontSize: "30px" }}> Du {format(new Date(record[createdAt]), 'dd MMMM yyyy',  { locale: fr })} au {format(new Date(record[endedAt]), 'dd MMMM yyyy',  { locale: fr })} </div> 
    : 
      <div style={{fontSize: "30px" }}> {format(new Date(record[createdAt]), 'dd MMMM yyyy',  { locale: fr })}</div>
  )
}

const NewsShow = props => {
  const classes = text();
  return (
    <Show title={<NewsTitle />} {...props}>
      <>
        <BreadcrumbsItem to='/News'>Actualités</BreadcrumbsItem>
        <BreadcrumbsItemFinal/>
        <StartEndDateComponent createdAt="pair:createdAt" endedAt="pair:endedAt" css={classes.time}/>
        <MainList  >
          <MarkdownField overrides={{
          }} source="pair:description" label="Description" addLabel={false} />
          <UrlField label="Lien extérieur" source="prats:link" />
          <ReferenceArrayField label="Portraits Liés" source="pair:hasPortrait" reference="Portrait">
            <SimpleList
                primaryText={record => record && record['pair:label']}
                leftIcon={() => <AccountBoxIcon />}
                linkType="show"
              />          
          </ReferenceArrayField>
          <ReferenceArrayField label="Ressources Liés" source="pair:hasResource" reference="Resource">
            <SimpleList
                primaryText={record => record && record['pair:label']}
                leftIcon={() => <DescriptionIcon />}
                linkType="show"
              />          
          </ReferenceArrayField>
        </MainList>
      </>
    </Show>
  )
};

export default NewsShow;
