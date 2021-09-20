import React from 'react';
import { ListBase } from 'react-admin';
import { Column, ColumnShowLayout, MasonryList } from '@semapps/archipelago-layout';
import TaskAddonList from '../../addons/TaskAddonList';

const TaskList = () => (

    <ColumnShowLayout >
      <Column xs={12} sm={2} showLabel>
        <a href="" >A Venir</a>
        <a href="" >En Cours</a>
        <a href="" >Terminé</a>
      </Column>
      <Column xs={12} sm={10} showLabel>
        <ListBase resource="Task" basePath="/Task"  sort={{ order: 'ASC' }}>
          <MasonryList
            image={record => Array.isArray(record?.image) ? record?.image?.[0] : record?.image}
            content={record => <TaskAddonList record={record} />}
            breakpointCols={{ default: 4, 1200: 3, 1000: 2, 700: 1 }}
            linkType="show"
          />
        </ListBase>
      </Column>
    </ColumnShowLayout >
);

export default TaskList;