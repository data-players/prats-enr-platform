import React from 'react';
import { Admin, Resource } from 'react-admin';
import { createBrowserHistory } from 'history';
import { LoginPage, LogoutButton } from '@semapps/auth-provider';


import i18nProvider from './config/i18nProvider';
import dataProvider from './config/dataProvider';
import authProvider from './config/authProvider';
import * as resources from './resources';

import Layout from './layout/Layout';
import theme from './layout/theme';
import HomePage from './pages/HomePage';
 
import {
  BreadcrumbsProvider,
} from 'react-breadcrumbs-dynamic'

const history = createBrowserHistory();

const App = () => (
  <BreadcrumbsProvider>
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      layout={Layout}
      theme={theme}
      history={history}
      dashboard={HomePage}
      logoutButton={LogoutButton}
      loginPage={LoginPage}
    >
      {Object.entries(resources).map(([key, resource]) => (
        <Resource key={key} name={key} {...resource.config} />
      ))}
    </Admin>
  </BreadcrumbsProvider>
);

export default App;
