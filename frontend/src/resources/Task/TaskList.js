import React from 'react';
import { ListBase, EditButton } from 'react-admin';
import { Column, ColumnShowLayout, MasonryList } from '@semapps/archipelago-layout';
import TaskAddonList from '../../addons/TaskAddonList';
import {SvgIcon, Typography} from '@material-ui/core';

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 1,
          width: "95%"
      }}
  />
);

const TaskList = ({record}) => (

    <ColumnShowLayout >
      <Column xs={12} sm={10} showLabel>
        <br/>
        <Typography variant="h4" style={{marginLeft: 20}} >Chantiers</Typography>
      </Column>
      <Column xs={12} sm={2} showLabel>
        <EditButton basePath="/Task/create" label="Créer" record={{record}}/>
      </Column>

      <Column xs={12} sm={12} showLabel>
      </Column>
      
      <Column xs={12} sm={12} showLabel>
        <ColoredLine color="grey" />
      </Column>

      <Column xs={12} sm={2} showLabel>
        <div style={{marginLeft: 20}}>Status</div>
      </Column>
      <Column xs={12} sm={1} showLabel >
        <hr
          style={{
              color: "grey",
              backgroundColor: "grey",
              height: 1,
              width: "30%",
          }}
        /> 
      </Column>
      <Column xs={12} sm={9} showLabel>
        <div style={{marginLeft: 20}}>{console.log({record})} Chantier</div>
      </Column>

      <Column xs={12} sm={3} showLabel style={{
        marginLeft: 20,
      }}>
        <div>Status</div>
        <br/>
        <div href="" >▶︎ À venir</div>
        <br/>
        <div href="" >● En cours</div>
        <br/>
        <div href="" >■ Terminé</div>
      </Column>
      <Column xs={12} sm={8} showLabel>
        <ListBase resource="Task" basePath="/Task"  sort={{ order: 'ASC' }}>

          <MasonryList
            image={record => Array.isArray(record?.image) ? record?.image?.[0] : record?.image}
            content={record => <TaskAddonList record={record} />}
            breakpointCols={{ default: 3, 1200: 3, 1000: 2, 700: 1 }}
            linkType="show"
          />
        </ListBase>
      </Column>
    </ColumnShowLayout >
);

export default TaskList;