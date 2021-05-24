import React from "react";
import {
  SimpleForm,
  TextInput,
  SelectInput,
  CheckboxGroupInput,
  Toolbar,
  required,
} from "react-admin";
import { LargeLabel } from "@semapps/archipelago-layout";
import { ReferenceInput } from "@semapps/semantic-data-provider";
import ReferenceQuickCreateInput from "../../pair/ReferenceQuickCreateInput";
import { validatePlaceForm, PlaceFields } from "../Place/PlaceForm";

export const PersonForm = ({ mode, ...rest }) => (
  <SimpleForm
    {...rest}
    redirect="show"
    toolbar={<Toolbar alwaysEnableSaveButton />} // Always enable save as there are problems with ReferenceQuickCreateInput
  >
    <TextInput source="pair:label" validate={required()} fullWidth />
    <ReferenceInput
      reference="Type"
      source="pair:hasType"
      filter={{ a: "pair:AgentType" }}
    >
      <SelectInput optionText="pair:label" />
    </ReferenceInput>
    <LargeLabel>Page web</LargeLabel>
    <TextInput source="pair:webPage" fullWidth />
    <LargeLabel>Contact</LargeLabel>
      <TextInput
        source="pair:e-mail"
        fullWidth
      />
    <TextInput source="pair:aboutPage" fullWidth />
  </SimpleForm>
);

export default PersonForm;
