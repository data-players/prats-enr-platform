import React from 'react';
import  Show  from "../../layout/show/Show";
import OrganizationTitle from "./OrganizationTitle";
import MarkdownField from "../../markdown/MarkdownField";

const OrganizationShow = props => (
    <Show title={<OrganizationTitle />} {...props}>
        <MarkdownField source="pair:description" />
    </Show>
);

export default OrganizationShow;