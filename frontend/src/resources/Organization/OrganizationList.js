import React from 'react';
import SimpleList from '../../common/lists/SimpleList'
import List from '../../layout/list/List'
import HomeIcon from '@material-ui/icons/Build';
import { Avatar } from "@material-ui/core";

const OrganizationList = props => (
    <List  {...props}>
        <SimpleList primaryText={record => record['pair:label']} leftAvatar={() => <Avatar width="100%"><HomeIcon /></Avatar>} linkType="edit" />
    </List>
)

export default OrganizationList;