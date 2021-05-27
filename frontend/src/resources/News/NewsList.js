import React from 'react';
import { Avatar } from "@material-ui/core";
import { List, SimpleList } from '@semapps/archipelago-layout';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import { TextField } from 'ra-ui-materialui';
import { ShowContextProvider, useShowController } from 'ra-core';
import PageShow from '../Page/PageShow';

const config = {
  basePath: '/Page',
  id: process.env.REACT_APP_MIDDLEWARE_URL + 'pages/actu',
  resource: 'Page'
};

const PageList = props => (
  <>
    <ShowContextProvider value={useShowController(config)}>
      <PageShow {...config} />
    </ShowContextProvider>    
    <List {...props}>
      <SimpleList primaryText={record => record['semapps:title']} leftAvatar={() => <Avatar width="100%"><AnnouncementIcon /></Avatar>} linkType="edit" />
    </List>
  </>
);

export default PageList;
