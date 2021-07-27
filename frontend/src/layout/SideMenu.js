import React from "react";
import { Drawer, makeStyles } from "@material-ui/core";
import { MenuItemLink } from "react-admin";

const useStyles = makeStyles(() => ({
  paper: {
    paddingTop: 10,
    minWidth: 200
  }
}));

const button = makeStyles({
  menuButton : {
    backgroundColor : "red",
  },
});

const SideMenu = ({ menuItems, sidebarOpen, setSidebarOpen }) => {
  const classes = useStyles();
  const buttonStyles = button();
  return (
    <Drawer
      variant="temporary"
      open={sidebarOpen}
      classes={{ paper: classes.paper }}
      onClose={() => setSidebarOpen(false)}
    >
      {Object.keys(menuItems).map(link => (
        <MenuItemLink
          classes={buttonStyles}
          key={link}
          to={link}
          primaryText={menuItems[link]}
        />
      ))}
    </Drawer>
  );
}

export default SideMenu;
