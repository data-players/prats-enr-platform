import React from 'react';
import { List } from '@semapps/archipelago-layout';
import TaskAddonList from '../../addons/TaskAddonList';
import { Toolbar,  CreateButton} from 'react-admin';
import CustomMasonryList from '../../addons/CustomMasonryList';
import {
  BreadcrumbsItem,
} from '../../common/BreadCrump'
import { makeStyles } from '@material-ui/core/styles';
import ProjectFilterSidebar from './ProjectFilterSidebar';


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
    return <>
        <BreadcrumbsItem style={{'text-decoration': 'none', 'color':'black'}} to='/Project'>Projets</BreadcrumbsItem>
        <List aside={<ProjectFilterSidebar />} title={<></>} {...props} sort={{ order: 'ASC' }} actions={<ListActions />} >
          <CustomMasonryList
            image={record => Array.isArray(record?.image) ? record?.image?.[0] : record?.image}
            content={record => <TaskAddonList record={record} />}
            breakpointCols={{ default: 3, 1200: 3, 1000: 2, 700: 1 }}
            linkType="show"
          />
        </List>
    </>
};

export default ProjectList;
