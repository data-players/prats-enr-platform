import React from 'react';
import TaskAddonList from '../../addons/TaskAddonList';
import { List} from 'react-admin';
import CustomMasonryList from '../../addons/CustomMasonryList';
import { MapList } from '@semapps/geo-components';
import {
  BreadcrumbsItem,
} from '../../common/BreadCrump'
import MapIcon from '@material-ui/icons/Map';
import ListIcon from '@material-ui/icons/List';
import { MultiViewsList } from '@semapps/archipelago-layout';

const TaskList = props => (
  <>
    <BreadcrumbsItem style={{'text-decoration': 'none', 'color':'black'}} to='/Task'>Sites</BreadcrumbsItem>
    <MultiViewsList
      ListComponent={List}
      views={{
        list: {
          label: 'Liste',
          icon: ListIcon,
          sort: { field: 'pair:label', order: 'ASC' },
          perPage: 25,
          list: (
            <CustomMasonryList
              image={record => Array.isArray(record?.["pair:logo"]) ? record?.["pair:logo"]?.[0] : record?.["pair:logo"]}
              content={record => <TaskAddonList record={record} />}
              breakpointCols={{ default: 3, 1200: 3, 1000: 2, 700: 1 }}
              linkType="show"
            />
          )
        },
        map: {
          label: 'Carte',
          icon: MapIcon,
          perPage: 500,
          pagination: false,
          list: (
            <MapList
              latitude={record => record['prats:lat']}
              longitude={record => record['prats:lng']}
              label={record => record['pair:label']}
              description={record => record['pair:comment']}
              scrollWheelZoom
            />
          )
        }
      }}
      {...props}
    />
  </>
);

export default TaskList;
