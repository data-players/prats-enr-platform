import React from 'react';
import { useShowController, ShowContextProvider } from 'react-admin';
import { useListController, ListContextProvider } from 'react-admin';
import { ListBase } from 'react-admin';
import { MasonryList, LargeLabel } from '@semapps/archipelago-layout';
import PageShow from "../resources/Page/PageShow";
import TaskList from "../resources/Task/TaskList";
import NewsList from "../resources/News/NewsList";

const HomePage = () => {
  const config = {
    basePath: '/Page',
    id: process.env.REACT_APP_MIDDLEWARE_URL + 'pages/accueil',
    resource: 'Page'
  };

  const config2 = {
    basePath: '/Task',
    resource: 'Task'
  };

  const config3 = {
    basePath: '/News',
    resource: 'News'
  };

  return(
    <>
      <ShowContextProvider value={useShowController(config)}>
        <PageShow {...config} />
      </ShowContextProvider>
      <LargeLabel>Les chantiers</LargeLabel>
      <ListBase resource="Task" basePath="/Task" perPage={4}>
        <MasonryList
          image={record => Array.isArray(record?.image) ? record?.image?.[0] : record?.image}
          content={record => <div>{record['pair:label']}</div>}
          breakpointCols={{ default: 4, 1200: 3, 1000: 2, 700: 1 }}
          linkType="show"
        />
      </ListBase>
      <LargeLabel>Les actualités</LargeLabel>
      <ListBase resource="News" basePath="/News" perPage={4}>
        <MasonryList
          image={record => Array.isArray(record?.image) ? record?.image?.[0] : record?.image}
          content={record => <div>{record['semapps:title']}</div>}
          breakpointCols={{ default: 4, 1200: 3, 1000: 2, 700: 1 }}
          linkType="show"
        />
      </ListBase>

    </>
  );
};

export default HomePage;
