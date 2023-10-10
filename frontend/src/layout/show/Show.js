import React from 'react';
import { ShowBase } from 'react-admin';
import { ShowActionsWithPermissions } from "@semapps/auth-provider";
import ShowView from "./ShowView";

const isIframe = window !== window.top;

const Show = ({ title, actions, children, ...rest }) => (
  <ShowBase {...rest}>
    <ShowView title={title} actions={isIframe ? null : actions}>
      {children}
    </ShowView>
  </ShowBase>
);

Show.defaultProps = {
  actions: <ShowActionsWithPermissions />
};

export default Show;
