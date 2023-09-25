import React from 'react';
import { MainList, Show } from '@semapps/archipelago-layout';
import {TextField, UrlField} from 'react-admin';
import { MarkdownField } from '@semapps/markdown-components';
import ResourceTitle from './ResourceTitle';
import { makeStyles } from '@material-ui/core';
import { ImageField } from '@semapps/semantic-data-provider';
import {
  BreadcrumbsItem,
  BreadcrumbsItemFinal
} from '../../common/BreadCrump'

const mainImage = makeStyles({
  image: {
    objectFit: 'cover',
    width: '100%',
    maxHeight :'30em'
  }
});

const text = makeStyles({
  legend: {
    paddingLeft: '25px',
  },
  comment: {
    fontSize: "23px",
  },
  owner: {
    fontSize: "40px"
  }
})

const ResourceShow = props => {
  const mainImageStyles = mainImage();
  const textStyles = text();

  return <Show title={<ResourceTitle />} {...props}>
    <>        
      <BreadcrumbsItem to='/Resource'>Ressources</BreadcrumbsItem>
      <BreadcrumbsItemFinal/>
      
      <MainList>
        <TextField source="pair:comment" addLabel={false} className={textStyles.comment} />
        <MarkdownField label="Description" source="pair:description" addLabel={false} />
        <ImageField source="image" classes={mainImageStyles}/>
        <UrlField label="Lien Externe" source='pair:homePage' />
      </MainList>
    </>
  </Show>
}

export default ResourceShow;
