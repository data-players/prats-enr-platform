import { default as React } from 'react';
import { List, SimpleList} from 'react-admin';
import {
  BreadcrumbsItem,
} from '../../common/BreadCrump'
import moment from 'moment';
import 'moment/locale/fr'


const rowStyle = (record, index) => ({
    borderBottomStyle: "solid",
    borderTopStyle: index===0?"solid":"none",
    borderWidth:"1px",
});

const NewsList = ({source}) => {
  // let options = { year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <div style={{padding:"31px 0px"}}>
      <div style={{color:"grey", fontSize:"20px"}}>{moment(source["pair:createdAt"]).format('D MMMM YYYY')}</div>
      <div style={{color:"black", fontSize:"24px"}}>{source["pair:label"]}</div>
    </div>
  )
}

const PageList = props => {
    moment.locale('fr');
    return <>
        <BreadcrumbsItem to='/News'>Actualités</BreadcrumbsItem>
        <List {...props} sort={{field:"pair:createdAt", order:'DESC'}}   >
          <SimpleList  primaryText={record => <NewsList source={record}/>} linkType="show" rowStyle={rowStyle}/>
        </List>
    </>
};

export default PageList;
