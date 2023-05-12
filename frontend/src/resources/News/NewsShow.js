import React from 'react';
import { MainList, Show} from '@semapps/archipelago-layout';
import {MarkdownField} from "@semapps/markdown-components";
import NewsTitle from './NewsTitle';
import {
  BreadcrumbsItem,
  BreadcrumbsItemFinal
} from '../../common/BreadCrump'
import { DateField, SimpleList } from 'react-admin';
import { ReferenceArrayField } from '@semapps/semantic-data-provider';
import { makeStyles } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';

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

const imgMD = ({children,src,...props}) => {
  return (<>
    <div {...props}>
      <img src={src} alt="" style={{width:"100%"}}></img>
    </div>
  </>)
}

const NewsShow = props => {
  const classes = text();
  return (
    <Show title={<NewsTitle />} {...props}>
      <>
        <BreadcrumbsItem to='/News'>Actualités</BreadcrumbsItem>
        <BreadcrumbsItemFinal/>

        <MainList  >
          <DateField source="pair:createdAt" label="Date" className={classes.time} />
          <MarkdownField overrides={{
              img: imgMD,
          }} source="pair:description" label="Description" addLabel={false} />
        <ReferenceArrayField label="Ressources Liés Au Projet" source="pair:hasResource" reference="Resource">
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
