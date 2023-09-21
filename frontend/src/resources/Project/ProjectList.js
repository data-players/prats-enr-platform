import React from 'react';
import { List } from '@semapps/archipelago-layout';
import TaskAddonList from '../../addons/TaskAddonList';
import { Toolbar,  CreateButton, Show } from 'react-admin';
import CustomMasonryList from '../../addons/CustomMasonryList';
import {
  BreadcrumbsItem,
} from '../../common/BreadCrump'
import { makeStyles } from '@material-ui/core/styles';
import ProjectFilterSidebar from './ProjectFilterSidebar';
import MarkdownField from '../../markdown/MarkdownField';


const useStylesWideToolbar= makeStyles({
    toolbar: {
        flex : 1,
        justifyContent :"space-between",
        alignItems : "flex-start",
        backgroundColor : "white"
    }
});

const ListActions = ({...props}) => {
    const classesWideToolbar = useStylesWideToolbar();
    return (
      <Toolbar classes={classesWideToolbar}>
        <div>
          <h1 style={{
            marginLeft: 40
          }}>Projets</h1>
        </div>
        <CreateButton/>
      </Toolbar>
    )
}

const ProjectList = ({...props}) => {
  const config = {
    basePath: '/Page',
    id: process.env.REACT_APP_MIDDLEWARE_URL + 'pages/accueil-actions',
    resource: 'Page'
  };

    return <>
        <BreadcrumbsItem style={{'text-decoration': 'none', 'color':'black'}} to='/Project'>Projets</BreadcrumbsItem>
        <Show hasEdit={false} hasList={false} {...config}>
          <MarkdownField source="semapps:content" addLabel={false} />
        </Show>
        <List aside={<ProjectFilterSidebar />} title={<></>} {...props} sort={{ order: 'ASC' }} actions={<ListActions />} >
          <CustomMasonryList
            image={record => Array.isArray(record?.["pair:logo"]) ? record?.["pair:logo"]?.[0] : record?.["pair:logo"]}
            content={record => <TaskAddonList record={record} />}
            breakpointCols={{ default: 3, 1200: 3, 1000: 2, 700: 1 }}
            linkType="show"
          />
        </List>
    </>
};

export default ProjectList;
