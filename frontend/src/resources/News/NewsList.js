import React from 'react';
import { Avatar } from "@material-ui/core";
import { List, SimpleList } from '@semapps/archipelago-layout';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import {
  BreadcrumbsItem,
} from '../../common/BreadCrump'

const config = {
  basePath: '/Page',
  id: process.env.REACT_APP_MIDDLEWARE_URL + 'News',
  resource: 'Page'
};

const PageList = props => (
  <>
    <BreadcrumbsItem style={{'text-decoration': 'none', 'color':'black'}} to='/News'>Actualités</BreadcrumbsItem>

    <List {...props}>
      <SimpleList primaryText={record => record['semapps:title']} leftAvatar={() => <Avatar width="100%"><AnnouncementIcon /></Avatar>} linkType="show" />
    </List>
  </>
);

export default PageList;
