import React from 'react';
import { MainList, Show } from '@semapps/archipelago-layout';
import {ChipField, TextField} from 'react-admin';
import { MarkdownField } from '@semapps/markdown-components';
import TaskTitle from './TaskTitle';
import { Grid, makeStyles } from '@material-ui/core';
import { ImageField, ReferenceField } from '@semapps/semantic-data-provider';
import {
  BreadcrumbsItem,
  BreadcrumbsItemFinal
} from '../../common/BreadCrump'
import CustomMapField from './CustomMapField';

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
    <Grid container spacing={2}>
      <BreadcrumbsItem to='/Task'>Sites</BreadcrumbsItem>
      <BreadcrumbsItemFinal/>

      <Grid item md={12} xs={12}>
        <TextField source="pair:comment" addLabel={false} className={classes.comment} />
        <ImageField source="image" classes={mainImageStyles}/>
        <MainList>
          <MarkdownField label="description" source="pair:description" />        
        </MainList>
      </Grid>

      <Grid item md={4} xs={4} >
        <MainList>
          <ReferenceField label="Gestionnaire" reference="Portrait" source="prats:hasManager" >
            <ChipField source="pair:label"  />
          </ReferenceField>        
        </MainList>      
      </Grid>
      <Grid item md={4} xs={4} >
        <MainList  >
          <ReferenceField label="Exploitant" reference="Portrait" source="prats:hasOperator" >
            <ChipField source="pair:label"  />
          </ReferenceField>        
        </MainList>
      </Grid>
      <Grid item md={4} xs={4} >
        <MainList>
          <ReferenceField label="Bénéficiaire" reference="Portrait" source="prats:hasBeneficiary" >
            <ChipField source="pair:label"  />
          </ReferenceField>        
        </MainList>      
      </Grid>

      <Grid item md={4} xs={4} >
        <MainList>
          <TextField label="Propriétaire" source="prats:owner" className={classes.item} />
        </MainList>
      </Grid>
      <Grid item md={4} xs={4} >
        <MainList>
          <TextField label="Energie" source='prats:powerEnergy' className={classes.item} />
        </MainList>      
      </Grid>

      <Grid item md={12} xs={12} >
          <CustomMapField />
      </Grid>
      <Grid item md={4} xs={4}>
        <MainList >
          <TextField label="Latitude" source="prats:lat" fullWidth />
        </MainList>
      </Grid>
      <Grid item md={4} xs={4}>
        <MainList >
          <TextField label="Longitude" source="prats:lng" fullWidth />
        </MainList>
      </Grid>
    </Grid>

     

  </Show>
}

export default TaskShow;
