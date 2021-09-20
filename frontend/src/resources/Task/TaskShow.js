import React, { cloneElement, Fragment } from 'react';
import { Column, ColumnShowLayout, MainList, Show } from '@semapps/archipelago-layout';
import {TextField} from 'react-admin';
import MarkdownField from "../../markdown/MarkdownField";
import TaskTitle from './TaskTitle';
import { MapField } from '@semapps/geo-components';
import { makeStyles } from '@material-ui/core';
import { ImageField } from '@semapps/semantic-data-provider';

const mainImage = makeStyles({
  image: {
    objectFit: 'cover',
    width: '100%',
    maxHeight :'20em'
  }
});

const text = makeStyles({
  legend: {
    paddingLeft: '25px',
  }
})

const TaskShow = props => {
  const mainImageStyles = mainImage();
  const textStyles = text();

  return <Show title={<TaskTitle />} {...props}>
    <ColumnShowLayout >
        <Column xs={12} sm={9}  >
          <MarkdownField source="pair:comment" addLabel={false} />
          <br/><br/>
          <ImageField source="image" classes={mainImageStyles}/>
          <TextField label="Courte description" source="pair:legend" className={textStyles.legend} addLabel={false} />
          <br/><br/>
          <MarkdownField source="pair:description" addLabel={false} />
          <MapField
            source="pair:hasLocation"
            address={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:label']}
            latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
            longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
          />
        </Column>
    </ColumnShowLayout>
  </Show>
}

export default TaskShow;
