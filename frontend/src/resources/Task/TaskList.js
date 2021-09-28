import React from 'react';
import { Column, ColumnShowLayout, MasonryList, List, MarkdownField } from '@semapps/archipelago-layout';
import TaskAddonList from '../../addons/TaskAddonList';
import { Show } from 'react-admin';
import CustomMasonryList from '../../addons/CustomMasonryList';

const config = {
  basePath: '/Page',
  id: process.env.REACT_APP_MIDDLEWARE_URL + 'pages/chantiers',
  resource: 'Page'
};

const TaskList = ({...props}) => {
    return <ColumnShowLayout  >
    <h1 style={{
      marginLeft: 40,
      marginTop: 30
    }}>Chantiers</h1>
      <Column xs={12} sm={12} title={<></>} showLabel >
        <Show title={<></>} hasEdit={false} hasList={false} {...config}>
          <MarkdownField source="semapps:content" addLabel={false} />
        </Show>
      </Column>

      <Column xs={12} sm={3} showLabel style={{
        marginLeft: 20,
        marginTop: 90
      }}>
        <div>Status</div>
        <br/>
        <div>▶︎ À venir</div>
        <br/>
        <div>● En cours</div>
        <br/>
        <div>■ Terminé</div>
      </Column>
      <Column xs={12} sm={8} showLabel>
        <List title={<></>} {...props} sort={{ order: 'ASC' }} >

          <CustomMasonryList 
            image={record => Array.isArray(record?.image) ? record?.image?.[0] : record?.image}
            content={record => <TaskAddonList record={record} />}
            breakpointCols={{ default: 3, 1200: 3, 1000: 2, 700: 1 }}
            linkType="show"
          />
        </List>
      </Column>
    </ColumnShowLayout >
};

export default TaskList;