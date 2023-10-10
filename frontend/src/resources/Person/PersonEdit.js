import React from 'react';
import { SaveButton, SimpleForm, TextInput } from "ra-ui-materialui";
import Edit from "../../layout/edit/Edit";
import { Toolbar, Link } from 'react-admin';
import PersonTitle from './PersonTitle';
import MarkdownInput from '../../markdown/MarkdownInput'

const NoDeleteToolBar = props => (
  <Toolbar {...props} >
    <SaveButton redirect="list" />
  </Toolbar>
)

export const PersonEdit = props => (
  <Edit title={<PersonTitle />} {...props} >
    <SimpleForm toolbar={<NoDeleteToolBar />}  redirect="list" >
      <TextInput label="Nom complet" source="pair:label" fullWidth />
      <MarkdownInput label="Description" multiline source="pair:description" fullWidth />
      <TextInput label="Id Openbadge" source="prats:openbadgeId" helperText="" fullWidth />
      <Link to="/Page/http%3A%2F%2Flocalhost%3A3000%2Fpages%2F6477503ccb5ef78fc07f2833/show" style={{color: "grey", fontSize: "12px" }} >Besoin d'aide pour trouver votre ID openbadge?</Link>
    </SimpleForm>
  </Edit>
)

export default PersonEdit;
