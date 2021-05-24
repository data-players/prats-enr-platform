import React from 'react';
import { Avatar } from "@material-ui/core";
import { List, SimpleList } from '@semapps/archipelago-layout';
import BuildIcon from '@material-ui/icons/Build';

const PageList = props => (
  <List {...props}>
    <SimpleList primaryText={record => record['pair:label']} leftAvatar={() => <Avatar width="100%"><BuildIcon /></Avatar>} linkType="edit" />
  </List>
);

export default PageList;
