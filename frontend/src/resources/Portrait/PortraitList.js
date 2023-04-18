import React from 'react';
import { List, MarkdownField } from '@semapps/archipelago-layout';
import TaskAddonList from '../../addons/TaskAddonList';
import { Show ,Toolbar,  CreateButton} from 'react-admin';
import CustomMasonryList from '../../addons/CustomMasonryList';
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

const config = {
  basePath: '/Page',
  id: process.env.REACT_APP_MIDDLEWARE_URL + 'pages/chantiers',
  resource: 'Page'
};

const showStyle = makeStyles({
    card: {
        // backgroundColor : "red",
        boxShadow: "none"
    }
});

const ListActions = ({...props}) => {
    const classesWideToolbar = useStylesWideToolbar();
    const showClasses = showStyle();
    return (
      <Toolbar classes={classesWideToolbar}>
        <div>
          <h1 style={{
            marginLeft: 40
          }}>Portraits</h1>
        </div>
        <CreateButton/>
      </Toolbar>
    )
}

const PortraitList = ({...props}) => {
    return <>
        <BreadcrumbsItem style={{'text-decoration': 'none', 'color':'black'}} to='/Portrait'>Portrait</BreadcrumbsItem>
        <List /*aside={<Aside />}*/ title={<></>} {...props} sort={{ order: 'ASC' }} actions={<ListActions />} >
          <CustomMasonryList
            image={record => Array.isArray(record?.image) ? record?.image?.[0] : record?.image}
            content={record => <TaskAddonList record={record} />}
            breakpointCols={{ default: 3, 1200: 3, 1000: 2, 700: 1 }}
            linkType="show"
          />
        </List>

    </>
};

export default PortraitList;
