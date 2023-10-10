import React from 'react';
import { Avatar } from "@material-ui/core";
import SimpleList from '../../common/lists/SimpleList'
import List from '../../layout/list/List'
import DescriptionIcon from '@material-ui/icons/Description';

const PageList = props => (
  <List {...props}>
    <SimpleList primaryText={record => record['semapps:title']} leftAvatar={() => <Avatar width="100%"><DescriptionIcon /></Avatar>} linkType="edit" />
  </List>
);

export default PageList;
