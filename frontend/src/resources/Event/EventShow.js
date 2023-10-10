import React from 'react';
import { UrlField, DateField, TextField } from 'react-admin';
import { ReferenceField } from '@semapps/semantic-data-provider';
import MainList from '../../common/lists/MainList/MainList';
import Show from '../../layout/show/Show';
import MarkdownField from '../../markdown/MarkdownField';
import Hero from '../../common/lists/Hero/Hero'
import EventTitle from './EventTitle';
import {
  BreadcrumbsItem
} from 'react-breadcrumbs-dynamic'

const EventShow = props => (
  <Show title={<EventTitle />} {...props}>
    <>
      <BreadcrumbsItem to='/'>Event</BreadcrumbsItem>
      <Hero>
        <DateField source="pair:startDate" showTime />
        <DateField source="pair:endDate" showTime />
        <ReferenceField
          reference="Organization"
          source="pair:operatedBy"
          linkType="show"
        >
          <TextField source="pair:label" />
        </ReferenceField>
        <UrlField source="cd:registrationPage" />
        <UrlField source="cd:meetingPage" />
      </Hero>
      <MainList>
        <MarkdownField source="pair:description" />
      </MainList>
    </>
  </Show>
);

export default EventShow;
