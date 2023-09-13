import React from 'react';
import { MainList, Show } from '@semapps/archipelago-layout';
import { SimpleList, TextField, UrlField} from 'react-admin';
import { MarkdownField } from '@semapps/markdown-components';
import ProjectTitle from './ProjectTitle';
import { makeStyles } from '@material-ui/core';
import { ImageField, ReferenceArrayField } from '@semapps/semantic-data-provider';
import {
  BreadcrumbsItem,
  BreadcrumbsItemFinal
} from '../../common/BreadCrump'
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const mainImage = makeStyles({
  image: {
    objectFit: 'cover',
    width: '100%',
    maxHeight :'100%'
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

const ProjectShow = props => {
  const mainImageStyles = mainImage();
  const textStyles = text();

  return <Show title={<ProjectTitle />} {...props}>
    <>        
      <BreadcrumbsItem to='/Project'>Projets</BreadcrumbsItem>
      <BreadcrumbsItemFinal/>
    
      <MainList>
        <ImageField source="image" classes={mainImageStyles}/>
        <TextField source="pair:comment" addLabel={false} className={textStyles.comment} />
        <MarkdownField addLabel={false} source="pair:description" />
        <UrlField label="Site internet" source="pair:homePage" />
        <UrlField label="Site internet" source="prats:link" />
        <ReferenceArrayField label="Portraits Liés Au Projet" source="pair:hasPortrait" reference="Portrait">
          <SimpleList
            primaryText={record => record && record['pair:label']}
            leftIcon={() => <AccountBoxIcon />}
            linkType="show"
          />         
        </ReferenceArrayField>
        <ReferenceArrayField label="Ressources Liées Au Projet" source="pair:hasResource" reference="Resource">
          <SimpleList
            primaryText={record => record && record['pair:label']}
            leftIcon={() => <AccountBoxIcon />}
            linkType="show"
          />         
        </ReferenceArrayField>
      </MainList>
    </>
  </Show>
}

export default ProjectShow;
