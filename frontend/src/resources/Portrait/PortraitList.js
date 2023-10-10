import React from 'react';
import List from '../../layout/list/List';
import TaskAddonList from '../../addons/TaskAddonList';
import CustomMasonryList from '../../addons/CustomMasonryList';
import {
  BreadcrumbsItem,
} from '../../common/BreadCrump'

const PortraitList = ({...props}) => {
  const isAuthicate = localStorage.getItem('token') !== null

    return <>
        <BreadcrumbsItem style={{'text-decoration': 'none', 'color':'black'}} to='/Portrait'>Portrait</BreadcrumbsItem>
        <List /*aside={<Aside />}*/ title={<></>} {...props} sort={{ field: 'prats:listOrder', order:'ASC' }} actions={isAuthicate ? undefined : false} >
          <CustomMasonryList
            image={record => Array.isArray(record?.["pair:logo"]) ? record?.["pair:logo"]?.[0] : record?.["pair:logo"]}
            content={record => <TaskAddonList record={record} />}
            breakpointCols={{ default: 3, 1200: 3, 1000: 2, 700: 1 }}
            linkType="show"
          />
        </List>
    </>
};

export default PortraitList;
