import React from 'react';
import { ListBase, Show ,SimpleList} from 'react-admin';
import { makeStyles } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import MarkdownField from "../markdown/MarkdownField";
import moment from 'moment';
import 'moment/locale/fr'

const HomePage = () => {
  moment.locale('fr');
  const config = {
    basePath: '/Page',
    id: process.env.REACT_APP_MIDDLEWARE_URL + 'pages/accueil-actions',
    resource: 'Page'
  };

  const configAccueil = {
    basePath: '/Page',
    id: process.env.REACT_APP_MIDDLEWARE_URL + 'pages/accueil',
    resource: 'Page'
  };

  const config4 = {
    basePath: '/Page',
    id: process.env.REACT_APP_MIDDLEWARE_URL + 'pages/actualite-intro',
    resource: 'Page'
  };

  const configMonthlyGraphique = {
    basePath: '/Page',
    id: process.env.REACT_APP_MIDDLEWARE_URL + 'pages/accueil-monthly-graphique',
    resource: 'Page'
  }

  const configDailyGraphique = {
    basePath: '/Page',
    id: process.env.REACT_APP_MIDDLEWARE_URL + 'pages/accueil-daily-graphique',
    resource: 'Page'
  }

  const mainImage = makeStyles(theme => ({
    root: {
      height:"416px",
      boxSizing: "border-box",
      objectFit: 'cover',
      // padding: "32px",
      [theme.breakpoints.down('sm')]: {
        height:"200px",
      }
    },
  }));


  const mainShow = makeStyles(() => ({
    card: {
      padding: 0,
      boxShadow : 'none',
    },
    main: {
      marginTop: 0,
    }
  }));


  const griditem={
    boxShadow: "",
    border: "none",
    borderBottom: "solid",
    borderBottomWidth : "1px",
    padding : "20px",
    width: "100%",
  }

  const main = makeStyles(theme => ({
    paper : {
      border: 'none'
    },
    griditem: {
      ...griditem,
      [theme.breakpoints.up("xs")]: {
        paddingLeft: "0px"
      },
      [theme.breakpoints.down("xs")]: {
        paddingLeft: "20px"
      },
    },
    griditemLeft: {
      ...griditem,
      [theme.breakpoints.down("xs")]: {
        borderBottom: "none"
      },

    },
    griditemWithoutPadding: {
      ...griditem,
      padding : "0px",
      [theme.breakpoints.up("xs")]: {
        borderLeft: "solid",
        borderLeftWidth : "1px",
        borderTop: "none",
      },
      [theme.breakpoints.down("xs")]: {
        borderTop: "solid",
        borderTopWidth : "1px",
        borderLeft: "none"
      },
    },
    griditemWithoutBorder: {
      ...griditem,
      borderBottom : "none",
      [theme.breakpoints.up("xs")]: {
        paddingLeft: "0px"
      },
      [theme.breakpoints.down("xs")]: {
        paddingLeft: "20px"
      },
    },
    griditemWithoutBorderLeft: {
      ...griditem,
      borderBottom : "none"
    },

    gridContainer: {
      border: "solid",
    },
  }));

  const mainText = makeStyles(theme => ({
    root: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px"
      },
      fontSize: "32px",
      fontFamily: "Arial",
      fontStyle: "normal",
      fontWeight: "normal",
      lineHeight: "125%",
    },
    graphText: {
      fontSize: "25px",
      textAlign: "center"
    }
  }))

  const divButton = makeStyles({
    root: {
      paddingTop: "50px",
    }
  });

  const mainButton = makeStyles({
    root: {
      border: "2px solid #FCC72C",
    }
  });

  const NewsList = ({source}) => {
    return (
      <div style={{padding:"31px 0px"}}>
        <div style={{color:"grey", fontSize:"20px"}}>{moment(source["pair:createdAt"]).format('D MMMM YYYY')}</div>
        <div style={{color:"black", fontSize:"24px"}}>{source["pair:label"]}</div>
      </div>
    )
  }

  const mainImageStyles = mainImage();
  const mainTextStyles = mainText();
  const mainStyle = main();
  const mainShowStyle = mainShow();
  const divButtonStyle = divButton()
  const mainButtonStyle = mainButton();
  const urlImage = "https://upload.wikimedia.org/wikipedia/commons/4/49/Prats-de-Moll%C3%B3-la_Preste%2C_Eglise_Saintes_Juste_et_Ruffine-PM_47091.jpg";

  const rowStyle = (record, index) => ({
      borderBottomStyle: "solid",
      borderTopStyle: index===0?"solid":"none",
      borderWidth:"1px",
      borderColor:"grey"
  });


  return(
    <Grid container spacing={0} >
      <Grid item sm={5} xs={12} className={mainStyle.griditemLeft}>
        <Paper className={mainStyle.paper} variant="outlined" square>
          <Box component="div" classes={mainTextStyles} >
            <Show hasEdit={false} classes={mainShowStyle} hasList={false} {...configAccueil}>
              <MarkdownField source="semapps:content" addLabel={false} />
            </Show>
          </Box>
        </Paper>
      </Grid>
      <Grid item sm={7} xs={12} className={mainStyle.griditemWithoutPadding}>
        <Paper   square>
            <CardMedia
              image={urlImage}
              title="village"
              classes={mainImageStyles}
            />
        </Paper>
      </Grid>

      <Grid item sm={5} xs={12} className={mainStyle.griditemLeft}>
        <Paper className={mainStyle.paper} variant="outlined" square>
          <Box component="div" classes={mainTextStyles}>
            Actualités
          </Box>
        </Paper>
      </Grid>
      <Grid item sm={7} xs={12} className={mainStyle.griditem}>
        <Paper className={mainStyle.paper} variant="outlined" square>
          <Box component="div" classes={mainTextStyles}>
            <Show hasEdit={false} classes={mainShowStyle} hasList={false} {...config4}>
              <MarkdownField source="semapps:content" addLabel={false} />
            </Show>
          </Box>
          <ListBase resource="News" basePath="/News" sort={{field:"pair:createdAt", order:'DESC'}} perPage={2}>
            <SimpleList primaryText={record => <NewsList source={record}/>} linkType="show"  rowStyle={rowStyle}/>
          </ListBase>
          <Box classes={divButtonStyle}>
            <Button href="/News" classes={mainButtonStyle}>Voir toutes les actualités</Button>
          </Box>
        </Paper>
      </Grid>

      <Grid item sm={6} xs={12} className={mainStyle.griditem}>
        <Paper className={mainStyle.paper} variant="outlined" square>
          <Box component="div" className={mainTextStyles.graphText} >
            <Show hasEdit={false} classes={mainShowStyle} hasList={false} {...configDailyGraphique}>
              <MarkdownField source="semapps:content" addLabel={false} />
            </Show>
          </Box>
        </Paper>
      </Grid>
      <Grid item sm={6} xs={12} className={mainStyle.griditem}>
        <Paper className={mainStyle.paper} variant="outlined" square>
          <Box component="div" className={mainTextStyles.graphText} >
            <Show hasEdit={false} classes={mainShowStyle} hasList={false} {...configMonthlyGraphique}>
              <MarkdownField source="semapps:content" addLabel={false} />
            </Show>
          </Box>
        </Paper>
      </Grid>

      <Grid item sm={5} xs={12} className={mainStyle.griditemWithoutBorderLeft}>
        <Paper className={mainStyle.paper} variant="outlined" square>
          <Box component="div" classes={mainTextStyles}>
            Le Projet
          </Box>
        </Paper>
      </Grid>
      <Grid item sm={7} xs={12} className={mainStyle.griditemWithoutBorder}>
        <Paper className={mainStyle.paper} variant="outlined" square>
          <Box component="div" classes={mainTextStyles}>
            <Show hasEdit={false} classes={mainShowStyle} hasList={false} {...config}>
              <MarkdownField source="semapps:content" addLabel={false} />
            </Show>
          </Box>
          <Box classes={divButtonStyle}>
            <Button href="/Page/demarche/show" classes={mainButtonStyle}>En savoir plus</Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
    
  );
};

export default HomePage;
