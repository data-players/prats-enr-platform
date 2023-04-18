import React from 'react';
import { Avatar } from "@material-ui/core";
import { List, SimpleList } from '@semapps/archipelago-layout';
import DescriptionIcon from '@material-ui/icons/Description';

const ResourceList = props => (
  <List {...props}>
    <SimpleList primaryText={record => record['pair:label']} leftAvatar={() => <Avatar width="100%"><DescriptionIcon /></Avatar>} linkType="edit" />
  </List>
);

export default ResourceList;
