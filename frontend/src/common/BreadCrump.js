import React from 'react';
import { BreadcrumbsItem as BreadcrumbsItemNativ} from 'react-breadcrumbs-dynamic'
import {useShowContext,useEditContext} from 'react-admin';

const ShowContextLayout = ({children, ...otherProps}) => {
  let showProps = useShowContext();
  let editProps = useEditContext();

  const basePath = showProps.basePath!=null?showProps.basePath:editProps.basePath;
  const record = showProps.record!=null?showProps.record:editProps.record;
  const resource = showProps.resource!=null?showProps.resource:editProps.resource;

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

const BreadcrumbsItemFinalInside = ({children,record, ...otherProps}) => {
  return (
    <BreadcrumbsItem style={{'text-decoration': 'none', 'color':'black'}} to={'./'+otherProps?.record?.['semapps:id']}>
      {record?.['semapps:title']||record?.['pair:label']}
    </BreadcrumbsItem>
  )
}

export const BreadcrumbsItemFinal = ({children, ...otherProps}) => {
  return (
    <ShowContextLayout>
      <BreadcrumbsItemFinalInside></BreadcrumbsItemFinalInside>
    </ShowContextLayout>
  )
}
