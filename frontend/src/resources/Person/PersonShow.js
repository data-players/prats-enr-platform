import React from 'react';
import { SingleFieldList } from 'react-admin';
import { Hero, Show, ColumnShowLayout, Column, AvatarField, MarkdownField } from '@semapps/archipelago-layout';
import { ReferenceField, ReferenceArrayField } from '@semapps/semantic-data-provider';
import PersonTitle from './PersonTitle';
import { ChipField, ImageField } from 'ra-ui-materialui';
import { makeStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';

const mainImage = makeStyles({
  image: {
    borderRadius: '50%',
    objectFit: 'cover',
    maxWidth: '20em',
    maxHeight :'20em'
  }
});

const PersonShow = props => {
  const mainImageStyles = mainImage();

  return <Show title={<PersonTitle />} {...props}>
    <ColumnShowLayout>
      <Column xs={12} sm={7} showLabe={false}>
        <MarkdownField  source="pair:description" />
      </Column>
      <Column xs={12} sm={2} showLabel>
      </Column>
      <Column xs={12} sm={3} showLabel={false}>
        <ImageField source="image" classes={mainImageStyles}/>
      </Column>
    </ColumnShowLayout>
  </Show>
}

export default PersonShow;
