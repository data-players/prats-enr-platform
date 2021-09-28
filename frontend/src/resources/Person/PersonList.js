import React from 'react';
import { List, SimpleList, ListActions, MarkdownField } from '@semapps/archipelago-layout';
import PersonFilterSidebar from "./PersonFilterSidebar";
import { Avatar, Box, Paper } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';
import { Show } from 'react-admin';

const config = {
  basePath: '/Page',
  id: process.env.REACT_APP_MIDDLEWARE_URL + 'pages/person',
  resource: 'Page'
};

const PersonList = ({...props}) => (

        
    
      <List
        aside={<PersonFilterSidebar />}
        sort={{ field: "pair:label", order: "DESC" }}
        perPage={100}
        pagination={false}
        actions={<ListActions exporter={false}/>}
        {...props}
      >
        

        <SimpleList
          primaryText={(record) => record["pair:label"]}
          leftAvatar={() => (
            <Avatar width="100%">
              <PersonIcon />
            </Avatar>
            
          )}
          linkType="show"
        />
      </List>

);

export default PersonList;
