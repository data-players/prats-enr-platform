import React from 'react';
import { Column, ColumnShowLayout, MasonryList, List } from '@semapps/archipelago-layout';
import TaskAddonList from '../../addons/TaskAddonList';

const TaskList = ({...props}) => (

    <ColumnShowLayout >
      <Column xs={12} sm={3} showLabel style={{
        marginLeft: 20,
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
        <List {...props} sort={{ order: 'ASC' }} >

          <MasonryList
            image={record => Array.isArray(record?.image) ? record?.image?.[0] : record?.image}
            content={record => <TaskAddonList record={record} />}
            breakpointCols={{ default: 3, 1200: 3, 1000: 2, 700: 1 }}
            linkType="show"
          />
        </List>
      </Column>
    </ColumnShowLayout >
);

export default TaskList;