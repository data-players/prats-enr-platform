import React from 'react';
import { SimpleList } from '@semapps/archipelago-layout';
import { List } from '@semapps/archipelago-layout';
import VisibilityIcon from '@material-ui/icons/Visibility';

const WorksiteList = props => (
  <List {...props}>
    <SimpleList
      primaryText={record => record['pair:label']}
      leftAvatar={() => <VisibilityIcon />}
      linkType="show"
    />
  </List>
);

export default WorksiteList;
