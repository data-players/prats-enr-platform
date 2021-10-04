import { default as React, cloneElement} from 'react';
import { Avatar } from "@material-ui/core";
import { Column, ColumnShowLayout, MarkdownField } from '@semapps/archipelago-layout';
import { Show, Toolbar,  CreateButton, List, SimpleList} from 'react-admin';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import {
  BreadcrumbsItem,
} from '../../common/BreadCrump'
import { makeStyles } from '@material-ui/core/styles';



const useStylesWideToolbar= makeStyles({
    toolbar: {
        flex : 1,
        justifyContent :"space-between",
        alignItems : "flex-start",
        backgroundColor : "white"
    }
});


const rowStyle = (record, index) => ({
    borderBottomStyle: "solid",
    borderTopStyle: index==0?"solid":"none",
    borderWidth:"1px"
});

const showStyle = makeStyles({
    card: {
        // backgroundColor : "red",
        boxShadow: "none"
    }
});


const config = {
  basePath: '/Page',
  id: process.env.REACT_APP_MIDDLEWARE_URL + 'pages/actus',
  resource: 'Page'
};



const ListActions = ({...props}) => {
    const classesWideToolbar = useStylesWideToolbar();
    const showClasses = showStyle();
    return (
      <Toolbar classes={classesWideToolbar}>
        <div>
          <h1 style={{
            marginLeft: 40
          }}>Actualités</h1>
          <Show title={<></>} hasEdit={false} hasList={false} {...config} classes={showClasses}>
            <MarkdownField source="semapps:content" addLabel={false} />
          </Show>
        </div>
        <CreateButton/>
      </Toolbar>
    )
}


const PageList = ({...props}) => {
    return <>
        <BreadcrumbsItem style={{'text-decoration': 'none', 'color':'black'}} to='/News'>Actualités</BreadcrumbsItem>
        <List {...props} actions={<ListActions />}  >
          <SimpleList primaryText={record => record['semapps:title']} leftAvatar={() => <Avatar width="100%"><AnnouncementIcon /></Avatar>} linkType="show" rowStyle={rowStyle}/>
        </List>
    </>
};



export default PageList;
