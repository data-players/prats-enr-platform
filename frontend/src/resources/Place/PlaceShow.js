import React from 'react';
import MainList from '../../common/lists/MainList/MainList';
import SimpleList from '../../common/lists/SimpleList';
import MarkdownField from '../../markdown/MarkdownField';
import  Show  from "../../layout/show/Show";
import { Avatar, makeStyles } from '@material-ui/core';
import { MapField } from '@semapps/geo-components';
import { ReferenceArrayField } from '@semapps/field-components';
import PlaceTitle from './PlaceTitle';
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles(theme => ({
  card: {
    paddingTop: 0
  }
}));

const PlaceShow = props => {
  const classes = useStyles();
  return (
    <Show title={<PlaceTitle />} classes={{ card: classes.card }} {...props}>
      <MainList>
        <MarkdownField source="pair:description" addLabel />
        <ReferenceArrayField reference="Person" source="pair:locationOf">
          <SimpleList
            primaryText={record => record?.['pair:label']}
            leftAvatar={() => (
              <Avatar width="100%">
                <PersonIcon />
              </Avatar>
            )}
            linkType="show"
          />
        </ReferenceArrayField>
        <MapField
          source="pair:hasPostalAddress"
          address={record => record?.['pair:hasPostalAddress']?.['pair:label']}
          latitude={record => record?.['pair:hasPostalAddress']?.['pair:latitude']}
          longitude={record => record?.['pair:hasPostalAddress']?.['pair:longitude']}
        />
      </MainList>
    </Show>
  );
}

export default PlaceShow;
