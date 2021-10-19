import React from 'react';
import { SimpleList } from '@semapps/archipelago-layout';
import { List } from '@semapps/archipelago-layout';
import VisibilityIcon from '@material-ui/icons/Visibility';

const StatusList = props => (
  <List {...props}>
    <SimpleList
      primaryText={record => record['pair:label']}
      leftAvatar={() => <VisibilityIcon />}
    />
  </List>
);

export default StatusList;
