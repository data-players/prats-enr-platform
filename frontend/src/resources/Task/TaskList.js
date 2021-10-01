import React from 'react';
import { Column, ColumnShowLayout, MasonryList, List, MarkdownField } from '@semapps/archipelago-layout';
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
          }}>Chantiers</h1>
        <Show title={<></>} hasEdit={false} hasList={false} {...config} classes={showClasses}>
            <MarkdownField source="semapps:content" addLabel={false} />
          </Show>
        </div>
        <CreateButton/>
      </Toolbar>
    )
}

const asideStyle = makeStyles({
    root: {
        order : -1,
    }
});



const Aside = () => (
    <div style={{ width: "300px", order: -1, padding :"20px" }}>
      <div>
        <div>Status</div>
        <br/>
        <div>▶︎ À venir</div>
        <br/>
        <div>● En cours</div>
        <br/>
        <div>■ Terminé</div>
      </div>
    </div>
);

const TaskList = ({...props}) => {
    return <>
        <BreadcrumbsItem style={{'text-decoration': 'none', 'color':'black'}} to='/Task'>Chantiers</BreadcrumbsItem>
        <List aside={<Aside />} title={<></>} {...props} sort={{ order: 'ASC' }} actions={<ListActions />} >
          <CustomMasonryList
            image={record => Array.isArray(record?.image) ? record?.image?.[0] : record?.image}
            content={record => <TaskAddonList record={record} />}
            breakpointCols={{ default: 3, 1200: 3, 1000: 2, 700: 1 }}
            linkType="show"
          />
        </List>

    </>
};

export default TaskList;
