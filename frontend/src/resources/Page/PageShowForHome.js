import React from 'react';
import {makeStyles} from '@material-ui/core';
import { Show } from 'react-admin';
import { MainList } from '@semapps/archipelago-layout';
import MarkdownField from "../../markdown/MarkdownField";
import PageTitle from './PageTitle';


const useStyles = makeStyles(() => ({
  card: {
    paddingTop: 10,
    boxShadow : 'none'
  },
  main: {
    marginTop: 0,
  }
}));

const PageShow = props => {
  // const history = useHistory();
  const classes = useStyles();
  // const [refCallback] = useDoubleClick(() => {
  //   if( props.hasEdit ) history.push(props.basePath + '/' + encodeURIComponent(props.id) + '/edit');
  // });
  const resourceId = props.id.startsWith(process.env.REACT_APP_MIDDLEWARE_URL) ? props.id : process.env.REACT_APP_MIDDLEWARE_URL + 'pages/' + props.id;
  return (
    <>

      <Show title={<PageTitle />} classes={classes} {...props} hasEdit={false} hasList={false}>
        <MainList>
          <MarkdownField source="semapps:content" addLabel={false} />
        </MainList>
      </Show>
    </>
  );
}

export default PageShow;
