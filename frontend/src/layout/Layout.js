import React, { useState } from 'react';
import { Notification, Link } from 'react-admin';
import { Container, Box, useMediaQuery, ThemeProvider, makeStyles, Typography } from '@material-ui/core';
import AppBar from './AppBar';
import ScrollToTop from './ScrollToTop';
import SideMenu from './SideMenu';
import TwitterIcon from '@material-ui/icons/Twitter';

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
    marginBottom: -5
  }
}));

const menuItems = {
  '/Page/projet/show': 'le projet',
  '/Person': 'Annuaire',
  '/Event': 'Evenements',
  '/Page/faq/show': 'Foire aux questions'
};

const Layout = ({ appBar, logout, theme, children }) => {
  const classes = useStyles();
  const xs = useMediaQuery(theme.breakpoints.down('xs'));
  const [ sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <SideMenu menuItems={menuItems} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {React.cloneElement(appBar, { logout, menuItems, setSidebarOpen })}
      <Container maxWidth="lg" disableGutters={xs}>
        <Typography variant="h4" color="primary" className={classes.title} id="react-admin-title" component="h1" />
        <Box mb={{ xs: 1, sm: 2 }} mt={{ xs: 5, sm: 0 }}>{children}</Box>
        <Box mb={{ xs: 1, sm: 3 }} mr={{ xs: 2, sm: 0 }}>
          <Typography variant="subtitle2" color="textSecondary" align="right" >
            <a href="https://www.virtual-assembly.org/semapps/" target="_blank" rel="noopener noreferrer" className={classes.footerLink}>Plateforme collaborative propulsée par SemApps</a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to="/Page/mentions-legales/show" className={classes.footerLink}>Mentions légales</Link>
          </Typography>
        </Box>
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
