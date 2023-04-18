import React from 'react';
import TaskAddonList from '../../addons/TaskAddonList';
import { List} from 'react-admin';
import CustomMasonryList from '../../addons/CustomMasonryList';
import { MapList } from '@semapps/geo-components';
import {
  BreadcrumbsItem,
} from '../../common/BreadCrump'
import { makeStyles } from '@material-ui/core/styles';
import MapIcon from '@material-ui/icons/Map';
import ListIcon from '@material-ui/icons/List';
import { MultiViewsList, SimpleList } from '@semapps/archipelago-layout';

const TaskList = props => (
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
            image={record => Array.isArray(record?.image) ? record?.image?.[0] : record?.image}
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
            latitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:latitude']}
            longitude={record => record['pair:hasLocation'] && record['pair:hasLocation']['pair:longitude']}
            label={record => record['pair:label']}
            description={record => record['pair:comment']}
            scrollWheelZoom
          />
        )
      }
    }}
    {...props}
  />
);

export default TaskList;
