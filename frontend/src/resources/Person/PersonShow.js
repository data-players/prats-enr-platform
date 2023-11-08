import React from 'react';
import Show from "../../layout/show/Show";
import PersonTitle from "./PersonTitle";
import {  useRecordContext } from 'react-admin';
import MarkdownField from '../../markdown/MarkdownField';

const PersonShow = props => (
    <Show title={<PersonTitle />} {...props}>
        <>
            <MarkdownField source="pair:description"/>
        </>
    </Show>
);

export default PersonShow;