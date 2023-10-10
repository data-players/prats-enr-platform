import React from 'react';
import List from '../../layout/list/List';
import SimpleList from '../../common/lists/SimpleList';
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
