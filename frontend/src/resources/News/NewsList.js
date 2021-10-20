import { default as React } from 'react';
import { MarkdownField } from '@semapps/archipelago-layout';
import { Show, Toolbar,  CreateButton, List, SimpleList} from 'react-admin';
import {
  BreadcrumbsItem,
} from '../../common/BreadCrump'
import { makeStyles } from '@material-ui/core/styles';


const useStylesWideToolbar= makeStyles({
    toolbar: {
        flex : 1,
        justifyContent :"space-between",
        alignItems : "flex-start",
        backgroundColor : "white"
    }
});


const rowStyle = (record, index) => ({
    borderBottomStyle: "solid",
    borderTopStyle: index==0?"solid":"none",
    borderWidth:"1px",
});

const showStyle = makeStyles({
    card: {
        // backgroundColor : "red",
        boxShadow: "none",
        fontStyle: "Arial",
        fontSize:"32px"
    }
});

const config = {
  basePath: '/Page',
  id: process.env.REACT_APP_MIDDLEWARE_URL + 'pages/actus',
  resource: 'Page'
};



const ListActions = ({...props}) => {
    const classesWideToolbar = useStylesWideToolbar();
    const showClasses = showStyle();

    return (
      <Toolbar classes={classesWideToolbar}>
        <div>
          <div style={{
            marginLeft: 25,
            fontStyle: "arial",
            fontSize: "48px",
            color:"#333333"
          }}>Actualités</div>
          <Show hasEdit={false} hasList={false} {...config} classes={showClasses}>
            <MarkdownField source="semapps:content" addLabel={false} />
          </Show>
        </div>
        <CreateButton/>
      </Toolbar>
    )
}

const NewsList = ({source}) => {
  let options = { year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <div style={{padding:"31px 0px"}}>
      <div style={{color:"grey", fontSize:"20px"}}>{new Date(source["pair:createdAt"]).toLocaleDateString("fr-FR", options)}</div>
      <div style={{color:"black", fontSize:"24px"}}>{source["semapps:title"]}</div>
    </div>
  )
}

const PageList = props => {

    return <>
        <BreadcrumbsItem to='/News'>Actualités</BreadcrumbsItem>
        <List {...props} actions={<ListActions />}  >
          <SimpleList primaryText={record => <NewsList source={record}/>} linkType="show" rowStyle={rowStyle}/>
        </List>
    </>
};

export default PageList;
