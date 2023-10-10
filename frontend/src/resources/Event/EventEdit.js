import React from 'react';
import  Edit from '../../layout/edit/Edit';
import EventTitle from './EventTitle';
import EventForm from "./EventForm";

const EventEdit = props => (
  <Edit title={<EventTitle />} {...props}>
    <EventForm />
  </Edit>
);

export default EventEdit;
