import React from 'react';
import { ListBase, ShowContextProvider, useShowController,Show } from 'react-admin';
import { SimpleList } from '@semapps/archipelago-layout';
import  createTheme from '@material-ui/core/styles/createTheme';
import { makeStyles } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import PageShow from '../resources/Page/PageShow';
import MarkdownField from "../markdown/MarkdownField";

const HomePage = () => {
  const config = {
    basePath: '/Page',
    id: process.env.REACT_APP_MIDDLEWARE_URL + 'pages/demarche',
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

  const config4 = {
    basePath: '/Page',
    id: process.env.REACT_APP_MIDDLEWARE_URL + 'pages/actualite-intro',
    resource: 'Page'
  };

  const mainImage = makeStyles(theme => ({
    root: {
      height:"416px",
      boxSizing: "border-box",
      objectFit: 'cover',
      padding: "32px",
      [theme.breakpoints.down('sm')]: {
        height:"200px",
      }
    },
  }));

  const gridItemImage = makeStyles(theme => ({
    root: {
      width:"100%"
    },
  }));


  const main = makeStyles({
    paper : {
      height:"100%",
      padding : "32px",
      borderTop: "solid",
      border: 'none'
    },
    paperUp : {
      padding : "32px",
      border: 'none'
    },
    griditem: {
      boxShadow: ""
    },
    gridContainer: {
      border: "solid",
    },
    eventList: {
      paddingLeft: "25px"
    },
  });

  const mainShow = makeStyles(() => ({
    card: {
      paddingTop: 0,
      boxShadow : 'none'
    },
    main: {
      marginTop: 0,
    }
  }));

  const theme = createTheme();

  const mainText = makeStyles({
    root: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px"
      },
      fontSize: "32px",
      fontFamily: "SF UI Text",
      fontStyle: "normal",
      fontWeight: "normal",
      lineHeight: "125%",
      fontFamily: "SF UI Text"
    },
  });

  const divButton = makeStyles({
    root: {
      paddingTop: "50px",
      paddingLeft: "25px"
    }
  });

  const mainButton = makeStyles({
    root: {
      border: "2px solid #FCC72C",
    }
  });

  const mainImageStyles = mainImage();
  const mainTextStyles = mainText();
  const mainStyle = main();
  const mainShowStyle = mainShow();
  const divButtonStyle = divButton()
  const mainButtonStyle = mainButton();
  const gridItemImageStyle =gridItemImage();
  const urlImage = "https://upload.wikimedia.org/wikipedia/commons/4/49/Prats-de-Moll%C3%B3-la_Preste%2C_Eglise_Saintes_Juste_et_Ruffine-PM_47091.jpg";

  return(
    <Grid container spacing={0} className={mainStyle.gridContainer} >
      <Grid item md={5} sm={12} >
        <Paper className={mainStyle.paperUp} variant="outlined" square>
          <Box component="div" display="inline" classes={mainTextStyles} >
            Pratts-de-Mollo-la-Preste,
            un territoire rural des Pyrénées
            Orientales en transition
            pour devenir 100% autonome en
            énergies durables d’ici 2022.
          </Box>
        </Paper>
      </Grid>
      <Grid item md={7} sm={12} classes={gridItemImageStyle}>
        <Paper   square>
            <CardMedia
              image={urlImage}
              title="village"
              classes={mainImageStyles}
            />
        </Paper>
      </Grid>
      <Grid item sm={5} xs={12} className={mainImageStyles.griditem}>
        <Paper className={mainStyle.paper} variant="outlined" square>
          <Box component="div" display="inline" classes={mainTextStyles}>
            La démarche
          </Box>
        </Paper>
      </Grid>
      <Grid item sm={7} xs={12}>
        <Paper className={mainStyle.paper} variant="outlined" square>
          <Box component="div" display="inline" classes={mainTextStyles}>
            <Show hasEdit={false} classes={mainShowStyle} hasList={false} {...config}>
              <MarkdownField source="semapps:content" addLabel={false} />
            </Show>
          </Box>
          <Box classes={divButtonStyle}>
            <Button href="/Page/demarche/show" classes={mainButtonStyle}>En savoir plus</Button>
          </Box>
        </Paper>
      </Grid>
      <Grid item sm={5} xs={12}>
        <Paper className={mainStyle.paper} variant="outlined" square>
          <Box component="div" display="inline" classes={mainTextStyles}>
            Actualités
          </Box>
        </Paper>
      </Grid>
      <Grid item sm={7} xs={12}>
        <Paper className={mainStyle.paper} variant="outlined" square>
          <Box component="div" display="inline" classes={mainTextStyles}>
            <Show hasEdit={false} classes={mainShowStyle} hasList={false} {...config4}>
              <MarkdownField source="semapps:content" addLabel={false} />
            </Show>
          </Box>
          <ListBase resource="News" basePath="/News"  perPage={4}>
            <SimpleList primaryText={record => record['semapps:title']} secondaryText={record => record['pair:createdAt']} linkType="show" className={mainStyle.eventList}/>
          </ListBase>
          <Box classes={divButtonStyle}>
            <Button href="/News" classes={mainButtonStyle}>Voir toutes les actualités</Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomePage;
