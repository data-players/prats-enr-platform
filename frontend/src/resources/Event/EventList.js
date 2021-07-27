import React from 'react';
import { ReferenceField, TextField } from 'react-admin';
import { Avatar } from '@material-ui/core';
import { List, SimpleList, ListActions } from '@semapps/archipelago-layout';
import EventIcon from '@material-ui/icons/Event';
import EventFilterSidebar from './EventFilterSidebar';
import isSameDay from 'date-fns/isSameDay';
import format from 'date-fns/format';
import {
  BreadcrumbsItem
} from 'react-breadcrumbs-dynamic'

const EventList = props => (
  <>
    <BreadcrumbsItem to='/'>Acceuil </BreadcrumbsItem>
    <List
      title="Calendrier"
      sort={{ field: "pair:startDate", order: "DESC" }}
      actions={<ListActions exporter={false} />}
      {...props}
    >
      <SimpleList
        primaryText={record => record["pair:label"]}
        leftAvatar={() => (
          <Avatar width="100%">
            <EventIcon />
          </Avatar>
        )}
        linkType="show"
      />
    </List>
  </>

);

export default EventList;
