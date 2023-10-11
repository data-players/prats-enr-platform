import React from 'react';
import { Avatar } from "@material-ui/core";
import List from '../../layout/list/List';
import SimpleList from '../../common/lists/SimpleList';
import DescriptionIcon from '@material-ui/icons/Description';
import { BreadcrumbsItem } from '../../common/BreadCrump';


const ResourceList = props => {
  const isAuthicate = localStorage.getItem('token') !== null

  return (
    <>
      <BreadcrumbsItem style={{'text-decoration': 'none', 'color':'black'}} to='/Ressource'>Ressources</BreadcrumbsItem>
      <List actions={isAuthicate ? undefined : false} {...props} sort={{ field: 'prats:listOrder', order:'ASC' }} >
        <SimpleList primaryText={record => record['pair:label']} leftAvatar={() => <Avatar width="100%"><DescriptionIcon /></Avatar>} linkType="show" />
      </List>
    </>
  )
};

export default ResourceList;
