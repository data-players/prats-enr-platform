import React from 'react';
import {Typography, Box, makeStyles} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { MainList, Show } from '@semapps/archipelago-layout';
import MarkdownField from "../../markdown/MarkdownField";
import PageTitle from './PageTitle';
import useDoubleClick from "../../layout/useDoubleClick";

const useStyles = makeStyles(() => ({
  card: {
    paddingTop: 0
  }
}));

const PageShow = props => {
  const history = useHistory();
  const classes = useStyles();
  const [refCallback] = useDoubleClick(() => {
    if( props.hasEdit ) history.push(props.basePath + '/' + encodeURIComponent(props.id) + '/edit');
  });
  const resourceId = props.id.startsWith(process.env.REACT_APP_MIDDLEWARE_URL) ? props.id : process.env.REACT_APP_MIDDLEWARE_URL + 'pages/' + props.id;
  return (
    <Show title={<PageTitle />} classes={{ card: classes.card }} {...props} id={resourceId} hasEdit={false} hasList={false}>
      <MainList>
        <MarkdownField source="semapps:content" addLabel={false} />
      </MainList>
    </Show>
  );
}

export default PageShow;
