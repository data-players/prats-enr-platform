import React from 'react';
import { MainList, Show} from '@semapps/archipelago-layout';
import {MarkdownField} from "@semapps/markdown-components";
import NewsTitle from './NewsTitle';
import {
  BreadcrumbsItem,
  BreadcrumbsItemFinal
} from '../../common/BreadCrump'

const imgMD = ({children,src,...props}) => {
  return (<>
    <div {...props}>
      <img src={src} alt="" style={{width:"100%"}}></img>
    </div>
  </>)
}

const NewsShow = props => {
  return (
    <Show title={<NewsTitle />} {...props}>
      <>
        <BreadcrumbsItem to='/News'>Actualités</BreadcrumbsItem>
        <BreadcrumbsItemFinal/>
        <MainList  >
          <MarkdownField overrides={{
              img: imgMD,
          }} source="semapps:content" addLabel={false} />
        </MainList>
      </>
    </Show>
  )
};

export default NewsShow;
