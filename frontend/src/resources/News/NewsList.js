import React from 'react';
import { Avatar } from "@material-ui/core";
import { List, SimpleList } from '@semapps/archipelago-layout';
import AnnouncementIcon from '@material-ui/icons/Announcement';

const PageList = props => (
  <List {...props}>
    <SimpleList primaryText={record => record['semapps:title']} leftAvatar={() => <Avatar width="100%"><AnnouncementIcon /></Avatar>} linkType="edit" />
  </List>
);

export default PageList;
