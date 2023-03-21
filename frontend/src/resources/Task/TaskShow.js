import React from 'react';
import { MainList, Show } from '@semapps/archipelago-layout';
import {TextField} from 'react-admin';
import { MarkdownField } from '@semapps/markdown-components';
import TaskTitle from './TaskTitle';
import { makeStyles, Chip } from '@material-ui/core';
import { ImageField, ReferenceField } from '@semapps/semantic-data-provider';
import { MapField } from '@semapps/geo-components';
import {
  BreadcrumbsItem,
  BreadcrumbsItemFinal
} from '../../common/BreadCrump'
import TextFieldWithTitle from '../../common/TextFieldWithTitile';

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

const TaskShow = props => {
  const mainImageStyles = mainImage();
  const textStyles = text();

  return <Show title={<TaskTitle />} {...props}>
    <>        
      <BreadcrumbsItem to='/Task'>Chantiers</BreadcrumbsItem>
      <BreadcrumbsItemFinal/>
      
      <MainList>
        {/* <ReferenceField addLabel={false} source="pair:taskStatus" reference="Status">
          <Chip source="pair:label" />
        </ReferenceField> */}
        <TextField source="pair:comment" addLabel={false} className={textStyles.comment} />
        <ImageField source="image" classes={mainImageStyles}/>
        <TextField label="Courte description" source="pair:legend" className={textStyles.legend} addLabel={false} />
        <MarkdownField source="pair:description" addLabel={false} />
        <TextFieldWithTitle className={textStyles.owner} source="prats:owner" title="Propiétaire" padding={true} />
        <TextFieldWithTitle source="prats:user" title="Bénéficiaire/Exploitant" />
        <TextFieldWithTitle source="prats:administrator" title="Géstionnaire" />
        <MapField
          source="pair:hasLocation"
          address={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:label']}
          latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
          longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
        />
      </MainList>
    </>
  </Show>
}

export default TaskShow;
