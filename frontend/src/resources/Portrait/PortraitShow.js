import React from 'react';
import MainList from '../../common/lists/MainList/MainList';
import Show from '../../layout/show/Show';
import { SimpleList, TextField, UrlField, ImageField} from 'react-admin';
import { MarkdownField } from '@semapps/markdown-components';
import PortraitTitle from './PortraitTitle';
import { makeStyles } from '@material-ui/core';
import { ReferenceArrayField } from '@semapps/field-components';
import {
  BreadcrumbsItem,
  BreadcrumbsItemFinal
} from '../../common/BreadCrump'
import WorkIcon from '@material-ui/icons/Work';
import DescriptionIcon from '@material-ui/icons/Description';
import AnnouncementIcon from '@material-ui/icons/Announcement';

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

const PortraitShow = props => {
  const mainImageStyles = mainImage();
  const textStyles = text();

  return <Show title={<PortraitTitle />} {...props}>
    <>        
      <BreadcrumbsItem to='/Portrait'>Portraits</BreadcrumbsItem>
      <BreadcrumbsItemFinal/>
      
      <MainList>
        <TextField source="pair:comment" addLabel={false} className={textStyles.comment} />
        <MarkdownField label="Description" source="pair:description" addLabel={false} />
        <ImageField source="image" classes={mainImageStyles}/>
        <UrlField label="Site internet" source='pair:homePage' />
        <ReferenceArrayField label="Ressources Liées" source="pair:hasResource" reference="Resource">
          <SimpleList
            primaryText={record => record && record['pair:label']}
            leftIcon={() => <DescriptionIcon />}
            linkType="show"
          />         
        </ReferenceArrayField>
        <ReferenceArrayField label="Projets Liées" source="pair:hasProject" reference="Project">
          <SimpleList
            primaryText={record => record && record['pair:label']}
            leftIcon={() => <WorkIcon />}
            linkType="show"
          />         
        </ReferenceArrayField>
        <ReferenceArrayField label="Actualitées Liées" source="pair:hasNews" reference="News">
          <SimpleList
            primaryText={record => record && record['pair:label']}
            leftIcon={() => <AnnouncementIcon />}
            linkType="show"
          />         
        </ReferenceArrayField>
      </MainList>
    </>
  </Show>
}

export default PortraitShow;
