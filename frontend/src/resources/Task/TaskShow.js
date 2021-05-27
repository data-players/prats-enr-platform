import React, { Fragment } from 'react';
import { MainList, Show } from '@semapps/archipelago-layout';
import MarkdownField from "../../markdown/MarkdownField";
import TaskTitle from './TaskTitle';
import { MapField } from '@semapps/geo-components';

const TaskShow = props => (
  <Show title={<TaskTitle />} {...props}>
    <MainList>
      <MarkdownField source="pair:description" />
      <MapField
              source="pair:hasLocation"
              address={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:label']}
              latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
              longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
      />
    </MainList>
  </Show>
);

export default TaskShow;
