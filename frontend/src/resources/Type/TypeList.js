import React from 'react';
import List from '../../layout/list/List';
import SimpleList from '../../common/lists/SimpleList';
import StyleIcon from '@material-ui/icons/Style';

const TypeList = props => (
  <List {...props}>
    <SimpleList
      primaryText={record => record['pair:label']}
      secondaryText={record => record.type}
      leftAvatar={() => <StyleIcon />}
    />
  </List>
);

export default TypeList;
