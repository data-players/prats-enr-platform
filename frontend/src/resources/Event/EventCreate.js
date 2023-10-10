import React from 'react';
import Create from '../../layout/create/Create';
import EventForm from "./EventForm";

const EventCreate = props => (
  <Create {...props}>
    <EventForm />
  </Create>
);

export default EventCreate;
