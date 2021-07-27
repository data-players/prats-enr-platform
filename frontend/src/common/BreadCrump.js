import React from 'react';
import { BreadcrumbsItem as BreadcrumbsItemNativ} from 'react-breadcrumbs-dynamic'
import {useShowContext,useEditContext} from 'react-admin';

const ShowContextLayout = ({children, ...otherProps}) => {
  let showProps = useShowContext();
  let editProps = useEditContext();
  console.log("showProps",showProps);
  console.log("editProps",editProps);

  const basePath = showProps.basePath!=null?showProps.basePath:editProps.basePath;
  const loaded = showProps.loaded!=null?showProps.loaded:editProps.loaded;
  const record = showProps.record!=null?showProps.record:editProps.record;
  const resource = showProps.resource!=null?showProps.resource:editProps.resource;

   console.log('record',record);

  return React.Children.map(children, layout =>
    layout && React.cloneElement(layout, {
      resource,
      record,
      basePath
    })
  )
}

export const BreadcrumbsItem = ({children,to,...otherProps}) => {
  return (
    <BreadcrumbsItemNativ style={{'text-decoration': 'none', 'color':'black'}} to={to}>{children}</BreadcrumbsItemNativ>
  )
}

const BreadcrumbsItemFinalInside = ({children, ...otherProps}) => {

  // console.log('ShowContextLayout record',otherProps.record);

  return (
    <BreadcrumbsItem style={{'text-decoration': 'none', 'color':'black'}} to={'./'+otherProps?.record?.['semapps:id']}>
      {otherProps?.record?.['semapps:title']}
    </BreadcrumbsItem>
  )
}

export const BreadcrumbsItemFinal = ({children, ...otherProps}) => {

  // console.log('ShowContextLayout record',otherProps.record);

  return (
    <ShowContextLayout>
      <BreadcrumbsItemFinalInside></BreadcrumbsItemFinalInside>
    </ShowContextLayout>
  )
}
