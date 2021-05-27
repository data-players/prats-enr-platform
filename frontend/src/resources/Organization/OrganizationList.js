import React from 'react';
import { List, SimpleList } from "@semapps/archipelago-layout";
import HomeIcon from '@material-ui/icons/Build';
import { Avatar } from "@material-ui/core";

const OrganizationList = props => (
    <List  {...props}>
        <SimpleList primaryText={record => record['pair:label']} leftAvatar={() => <Avatar width="100%"><HomeIcon /></Avatar>} linkType="edit" />
    </List>
)

export default OrganizationList;