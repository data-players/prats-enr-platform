import React from 'react';
import { Container, Box, Grid, makeStyles, Typography, AppBar as MuiAppBar, useMediaQuery, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  bar: {
    background : theme.palette.primary.light
  },
  header: {
    position: 'relative',
    padding: 10,
  },
  logo: {
    width: 48,
    height: 48,
    verticalAlign: 'middle',
    [theme.breakpoints.down('sm')]: {
      width: 32,
      height: 32,
    }
  },
  logoArea: {
    padding: 12,
    [theme.breakpoints.down('xs')]: {
      padding: 5,
    }
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.palette.text.primary,
    // verticalAlign: 'middle',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18,
    }
  },
  openButton: {
    padding: 5,
    float: 'right'
  },
  menuLink: {
    textDecoration: 'none'
  },
  menuText: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 1,
    color: theme.palette.text.primary
  },
  menuButton: {
    borderColor: theme.palette.text.primary,
  }
}));

const AppBar = ({ menuItems, setSidebarOpen }) => {
  const classes = useStyles();
  const xs = useMediaQuery(theme => theme.breakpoints.down('xs'));
  return (
    <MuiAppBar position="sticky" className={classes.bar}>
      <Container maxWidth="lg" className={classes.header}>
        <Grid container>
          <Grid item sm={4} xs={10} className={classes.logoArea}>
            <Link to="/" className={classes.menuLink}>
              {/*<img src={process.env.PUBLIC_URL + '/colibris-blanc.png'} alt="Colibris" className={classes.logo} />*/}
              <span className={classes.logoText}>Energies de Prats</span>
            </Link>
          </Grid>
          <Grid item sm={8} xs={2}>
            {xs ? (
              <IconButton
                color="inherit"
                onClick={() => setSidebarOpen(true)}
                className={classes.openButton}
              >
                <MenuIcon />
              </IconButton>
            ) : (
            <Grid container justify="flex-end" spacing={3}>
              {Object.keys(menuItems).map(link => (
                <Grid item md={2} sm={4} key={link}>
                  <Box display="flex" height={48} alignItems="center" justifyContent="center" border={1} className={classes.menuButton}>
                    <Link to={link} className={classes.menuLink}>
                      <Typography className={classes.menuText}>
                        {menuItems[link].split('\n').map((item, key) => (
                          <React.Fragment key={key}>
                            {item}
                          </React.Fragment>
                        ))}
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
              ))}
            </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </MuiAppBar>
  );
};

export default AppBar;
