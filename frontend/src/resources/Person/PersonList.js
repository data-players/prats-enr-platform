import React from 'react';
import { List, SimpleList } from "react-admin";
import HomeIcon from '@material-ui/icons/Build';
import { Avatar } from "@material-ui/core";

const PersonList = props => (
    <List  {...props}>
        <SimpleList primaryText={record => record['pair:label']} leftAvatar={() => <Avatar width="100%"><HomeIcon /></Avatar>} linkType="show" />
    </List>
)

export default PersonList;