import React from 'react';
import { MainList, Show } from '@semapps/archipelago-layout';
import {SimpleList, TextField} from 'react-admin';
import { MarkdownField } from '@semapps/markdown-components';
import TaskTitle from './TaskTitle';
import { Grid, makeStyles } from '@material-ui/core';
import { ImageField, ReferenceArrayField, ReferenceField } from '@semapps/semantic-data-provider';
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

const Test = (props) => {
  console.log("props")
}

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
          <MarkdownField label="description" source="pair:description" addLabel={false} />
          <MarkdownField label="graph" source="prats:graphic" addLabel={false} />                
        </MainList>
      </Grid>

      <Grid item md={4} xs={4} >
        <MainList>
          <ReferenceArrayField label="Gestionnaire" source="prats:hasManager" reference="Portrait">
            <SimpleList
              primaryText={record => record && record['pair:label']}
              leftIcon={() => <AccountBoxIcon />}
              linkType="show"
            />         
          </ReferenceArrayField>  
        </MainList>      
      </Grid>

      <Grid item md={4} xs={4} >
        <MainList  >
          <ReferenceArrayField label="Exploitant" reference="Portrait" source="prats:hasOperator" >
            <SimpleList
              primaryText={record => record && record['pair:label']}
              leftIcon={() => <AccountBoxIcon />}
              linkType="show"
            />    
          </ReferenceArrayField>

        </MainList>
      </Grid>
      <Grid item md={4} xs={4} >
        <MainList>
          <ReferenceArrayField label="Bénéficiaire" reference="Portrait" source="prats:hasBeneficiary" >
            <SimpleList
                primaryText={record => record && record['pair:label']}
                leftIcon={() => <AccountBoxIcon />}
                linkType="show"
              />            
            </ReferenceArrayField>        
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
