import React from 'react';
import { MainList, Show } from '@semapps/archipelago-layout';
import {SimpleList, TextField} from 'react-admin';
import { MarkdownField } from '@semapps/markdown-components';
import TaskTitle from './TaskTitle';
import { makeStyles } from '@material-ui/core';
import { ImageField, ReferenceArrayField } from '@semapps/semantic-data-provider';
import {
  BreadcrumbsItem,
  BreadcrumbsItemFinal
} from '../../common/BreadCrump'
import CustomMapField from './CustomMapField';
import AccountBoxIcon from '@material-ui/icons/AccountBox';


const mainImage = makeStyles({
  image: {
    objectFit: 'cover',
    width: '100%',
    maxHeight :'100%',
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
    fontSize: "25px"
  },
  item:{
    fontSize: "20px"
  }
})

const TaskShow = props => {
  const mainImageStyles = mainImage();
  const classes = text();

  return <Show title={<TaskTitle />} {...props}>
    <>
      <BreadcrumbsItem to='/Task'>Sites</BreadcrumbsItem>
      <BreadcrumbsItemFinal/>
      <MainList>
        <TextField source="pair:comment" addLabel={false} className={classes.comment} />
        <ImageField source="image" classes={mainImageStyles}/>
        <MarkdownField label="description" source="pair:description" addLabel={false} />
        <MarkdownField label="graph" source="prats:graphic" addLabel={false} />   
        <TextField label="Propriétaire" source="prats:owner" className={classes.item} />             
        <ReferenceArrayField label="Portraits affilié au site" source="pair:hasPortrait" reference="Portrait">
          <SimpleList
            primaryText={record => record && record['pair:label']}
            leftIcon={() => <AccountBoxIcon />}
            linkType="show"
          />         
        </ReferenceArrayField>
        <TextField label="Energie" source='prats:powerEnergy' className={classes.item} />      
        <CustomMapField />
        <TextField label="Latitude" source="prats:lat" fullWidth />
        <TextField label="Longitude" source="prats:lng" fullWidth />
      </MainList>
    </>
  </Show>
}

export default TaskShow;
