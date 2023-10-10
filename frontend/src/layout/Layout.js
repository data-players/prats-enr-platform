import React, { useState } from 'react';
import { useLogout, Notification } from 'react-admin';
import { Container, Box, ThemeProvider, makeStyles, Link, Typography, Grid } from '@material-ui/core';
import AppBar from './AppBar';
import ScrollToTop from './ScrollToTop';
import SideMenu from './SideMenu';
import {
  Breadcrumbs,
  BreadcrumbsItem
} from 'react-breadcrumbs-dynamic';

const useStyles = makeStyles(theme => ({
  hero: {
    backgroundImage: `url('${process.env.PUBLIC_URL}/bandeau.png')`,
    backgroundSize: 'contain',
    backgroundPosition: 'bottom center'
  },
  userMenu: {
    float: 'right',
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: theme.palette.grey["200"],
    '& button': {
      padding: '6px 12px'
    }
  },
  title: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      top: 70,
      left: 15,
      right: 50,
      fontSize: 22,
      zIndex: 10
    }
  },
  footerLink: {
    color: theme.palette.grey["500"],
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  footerIcon: {
    objectFit: 'contain',
    width: '100%'
  },
  footerlinkPosition: {
    marginTop:"10px"
  }
}));


const useContainerStyles = makeStyles(theme => ({
  root:{
    border:"solid",
    borderTopStyle:"none",
    borderColor:"black",
    borderWidth:"2px"
  },
  containerFooter: {
    padding: "40px",
    border:"solid",
    borderTopStyle:"none",
    borderColor:"black",
    borderWidth:"2px"
  }
}));

const menuItems = {
  '/Project': 'Projets',
  '/News': 'Actualités',
  '/Task': 'Sites',
  '/Portrait': 'Portraits',
  '/Resource': 'Ressources',
};

  // const history = createBrowserHistory();

const Layout = ({ appBar, logout, theme, children }) => {


  const classes = useStyles();
  const containerStyles = useContainerStyles()
  // const xs = useMediaQuery(theme.breakpoints.down('xs'));
  // const sm = useMediaQuery(theme.breakpoints.down('sm'));
  const [ sidebarOpen, setSidebarOpen] = useState(false);
  const logoutfunc = useLogout();

  const isAuthicate = localStorage.getItem('token') !== null

  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <SideMenu menuItems={menuItems} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {React.cloneElement(appBar, { logout, menuItems, setSidebarOpen })}
      <Container maxWidth="lg" classes={containerStyles}>
        {window.location.pathname!=='/' &&
          <Box id="breadcrumpContainer" style={{padding:'10px'}}>
            <Breadcrumbs separator=" / " finalItem="span" finalProps={{
              style: {color: 'gray'}
            }}/>
          </Box>
        }
        <BreadcrumbsItem style={{'text-decoration': 'none', 'color':'black'}} to='/'>Accueil</BreadcrumbsItem>
        <Box >{children}</Box>

      </Container>
      <Container maxWidth="lg" className={containerStyles.containerFooter}>
        <Grid container>
          <Grid item xs={12} sm={4} >
            <Box className={classes.footerlinkPosition}>
              <Link href="/Page/mentions-legales/show" className={classes.footerLink}>
                <Typography variant="subtitle2" color="textSecondary" align="left" >
                  Contenus footer
                </Typography>
              </Link>
              <Link href="/Page/mentions-legales/show" className={classes.footerLink}>
                <Typography variant="subtitle2" color="textSecondary" align="left" >
                  Mentions légales
                </Typography>
              </Link>
              <Link href="/Page/mentions-legales/show" className={classes.footerLink}>
                <Typography variant="subtitle2" color="textSecondary" align="left" >
                  Licence contenus
                </Typography>
              </Link>
              {
              isAuthicate && <Link className={classes.footerLink} onClick={() => logoutfunc()}>
                <Typography variant="subtitle2" color="textSecondary" align="left" >
                  Déconexion
                </Typography>
              </Link>
              }
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} >
            <img className={classes.footerIcon} src={process.env.PUBLIC_URL + '/footer.png'} alt="logo" />
          </Grid>
        </Grid>
      </Container>

      {/* Required for react-admin optimistic update */}
      <Notification />
    </ThemeProvider>
  );
};

Layout.defaultProps = {
  appBar: <AppBar />
};

export default Layout;
