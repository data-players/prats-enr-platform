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
import { teachingLevel, structureType } from "../../constants";
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
    <LargeLabel>Pratique</LargeLabel>
    <ReferenceQuickCreateInput
      reference="Place"
      source="pair:hasLocation"
      selectOptionText="pair:label"
      perPage={1000}
      validate={validatePlaceForm}
    >
      <PlaceFields />
    </ReferenceQuickCreateInput>
    <LargeLabel>Communauté</LargeLabel>
    <TextInput source="pair:webPage" fullWidth />
    <LargeLabel>Contact</LargeLabel>
    {mode === "create" && (
      <TextInput
        source="pair:e-mail"
        helperText="Votre adresse mail n'apparaîtra pas publiquement. On pourra vous écrire via un formulaire de contact."
        fullWidth
      />
    )}
    <TextInput source="pair:aboutPage" fullWidth />
  </SimpleForm>
);

export default PersonForm;
