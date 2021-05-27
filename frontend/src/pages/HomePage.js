import React from 'react';
import { ListBase, ShowContextProvider, useShowController } from 'react-admin';
import { MasonryList } from '@semapps/archipelago-layout';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import PageShow from '../resources/Page/PageShow';

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

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const mainImage = makeStyles({
    root: {
      objectFit: 'cover',
      height :'416px',
      paddingTop :"80px",
      paddingLeft : "32px",
      paddingRight : "32px",
    },
  });

  const mainGrid = makeStyles({
    root: {
      maxHeight: "416px",
    }
  })

  const mainText = makeStyles({
    root: {
      fontSize: "32px",
      fontFamily: "SF UI Text",
      fontStyle: "normal",
      fontWeight: "normal",
      lineHeight: "125%",
    },
  });

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

  const mainImageStyles = mainImage();
  const mainTextStyles = mainText();
  const mainGridStyle = mainGrid();
  const divButtonStyle = divButton()
  const mainButtonStyle = mainButton();
  const urlImage = "https://upload.wikimedia.org/wikipedia/commons/4/49/Prats-de-Moll%C3%B3-la_Preste%2C_Eglise_Saintes_Juste_et_Ruffine-PM_47091.jpg";

  return(
    <>
      <Grid container spacing={0}>
        <Grid item sm={5} classes={mainGridStyle}>
          <Paper classes={mainImageStyles}>
            <Box component="div" display="inline" classes={mainTextStyles}>
              Pratts-de-Mollo-la-Preste,
              un territoire rural des Pyrénées 
              Orientales en transition
              pour devenir 100% autonome en 
              énergies durables d’ici 2022.
            </Box>
          </Paper>
        </Grid>
        <Grid item sm={7}>
          <Card sx={{ maxWidth: 345 }} >
            <CardMedia
              sx={{ height: 140 }}
              image={urlImage}
              title="Contemplative Reptile"
              classes={mainImageStyles}
            />
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item sm={5} classes={mainGridStyle}>
          <Paper classes={mainImageStyles}>
            <Box component="div" display="inline" classes={mainTextStyles}>
              La démarche
            </Box>
          </Paper>
        </Grid>
        <Grid item sm={7}>
          <Paper classes={mainImageStyles}>
            <Box component="div" display="inline" classes={mainTextStyles}>
              <ShowContextProvider value={useShowController(config)}>
                <PageShow {...config} />
              </ShowContextProvider>
            </Box>
            <Box classes={divButtonStyle}>
              <Button href="/Page/demarche/show" classes={mainButtonStyle}>En savoir plus</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item sm={5} classes={mainGridStyle}>
          <Paper classes={mainImageStyles}>
            <Box component="div" display="inline" classes={mainTextStyles}>
              Actualités
            </Box>
          </Paper>
        </Grid>
        <Grid item sm={7}>
          <Paper classes={mainImageStyles}>
            <Box component="div" display="inline" classes={mainTextStyles}>
            Phrase de description de la page. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
            </Box>
            <ListBase resource="News" basePath="/News" perPage={4}>
              <MasonryList
                image={record => Array.isArray(record?.image) ? record?.image?.[0] : record?.image}
                content={record => <><div>{record['semapps:title']}</div><div>{record['pair:createdAt']}</div></>}
                breakpointCols={{ default: 4, 1200: 3, 1000: 2, 700: 1 }}
                linkType="show"
              />
            </ListBase>
            <Box classes={divButtonStyle}>
              <Button href="/News" classes={mainButtonStyle}>Voir toutes les actualités</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
