import React from 'react';
import { Show } from "@semapps/archipelago-layout";
import WorksiteTitle from "./WorksiteTitle";
import MarkdownField from "../../markdown/MarkdownField";

const WorksiteShow = props => (
    <Show title={<WorksiteTitle />} {...props}>
        <MarkdownField source="pair:description" />
    </Show>
);

export default WorksiteShow;