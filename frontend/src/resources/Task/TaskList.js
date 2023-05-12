import React from 'react';
import TaskAddonList from '../../addons/TaskAddonList';
import { List, ImageField, ShowButton,TextField } from 'react-admin';
import { Avatar, Box, makeStyles, Typography } from '@material-ui/core';
import CustomMasonryList from '../../addons/CustomMasonryList';
import { MapList } from '@semapps/geo-components';
import {
  BreadcrumbsItem,
} from '../../common/BreadCrump'
import MapIcon from '@material-ui/icons/Map';
import ListIcon from '@material-ui/icons/List';
import { MultiViewsList } from '@semapps/archipelago-layout';

const useStyles = makeStyles(theme => ({
  popupImageContainer: {
    textAlign: 'center'
  },
  popupTitle: {
    fontWeight: 600,
    textTransform: 'capitalize'
  },
  popupTextContainer: {
    marginBottom: theme.spacing(1)
  },
}));

const TaskList = props => {
  const classes = useStyles();

  return (
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
                latitude={record => record['prats:lat']}
                longitude={record => record['prats:lng']}
                label={record => record['pair:label']}
                description={record => record['pair:comment']}
                scrollWheelZoom
                popupContent={({ record, basePath }) => (
                  <>
                    <Box className={classes.popupImageContainer}>
                      <ImageField record={record} source="image" className={classes.popupImage} />
                    </Box>
                    <Box className={classes.popupTextContainer}>
                      <Typography component="h3">
                        <TextField record={record} source="pair:label" className={classes.popupTitle} />
                      </Typography>
                      <TextField record={record['pair:hasLocation']} source="pair:label" />
                    </Box>
                    <ShowButton record={record} basePath={basePath} label ={"+ d'infos"}/>
                  </>
                )}

              />
            )
          }
        }}
        {...props}
      />
    </>
  );
}

export default TaskList;
