import React from 'react';
import { Avatar } from "@material-ui/core";
import { List, SimpleList } from '@semapps/archipelago-layout';
import DescriptionIcon from '@material-ui/icons/Description';
import { BreadcrumbsItem } from '../../common/BreadCrump';

const ResourceList = props => (
  <>
    <BreadcrumbsItem style={{'text-decoration': 'none', 'color':'black'}} to='/Ressource'>Ressources</BreadcrumbsItem>
    <List {...props} sort={{ field: 'prats:listOrder', order:'ASC' }} >
      <SimpleList primaryText={record => record['pair:label']} leftAvatar={() => <Avatar width="100%"><DescriptionIcon /></Avatar>} linkType="show" />
    </List>
  </>
);

export default ResourceList;
