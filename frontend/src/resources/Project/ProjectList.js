import React from 'react';
import List from '../../layout/list/List';
import TaskAddonList from '../../addons/TaskAddonList';
import { Show } from 'react-admin';
import CustomMasonryList from '../../addons/CustomMasonryList';
import {
  BreadcrumbsItem,
} from '../../common/BreadCrump'
import ProjectFilterSidebar from './ProjectFilterSidebar';
import MarkdownField from '../../markdown/MarkdownField';

const ProjectList = ({...props}) => {
  const config = {
    basePath: '/Page',
    id: process.env.REACT_APP_MIDDLEWARE_URL + 'pages/accueil-actions',
    resource: 'Page'
  };

  const isAuthicate = localStorage.getItem('token') !== null

    return <>
        <BreadcrumbsItem style={{'text-decoration': 'none', 'color':'black'}} to='/Project'>Projets</BreadcrumbsItem>
        <Show hasEdit={false} hasList={false} {...config}>
          <MarkdownField source="semapps:content" addLabel={false} />
        </Show>
        <List aside={<ProjectFilterSidebar />} title={<></>} {...props} sort={{ order: 'ASC' }} actions={isAuthicate ? undefined : false} >
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
