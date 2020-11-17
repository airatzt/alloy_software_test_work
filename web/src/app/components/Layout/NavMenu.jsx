import React from "react";
import GroupIcon from '@material-ui/icons/Group';
import Drawer from "@material-ui/core/Drawer";
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import List from "@material-ui/core/List";
import ListItemLink from "./ListItemLink";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const NavMenu = () => {
  const classes = useStyles();

  return (
    <nav className={classes.drawer}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Paper elevation={0}>
          <List aria-label="main mailbox folders">
            <ListItemLink to="/customers" primary="Покупатели" icon={<GroupIcon />} />
            <ListItemLink to="/Reports" primary="Отчеты" icon={<AssignmentIndIcon />} />
          </List>
        </Paper>
      </Drawer>
    </nav>
  );
};

export default NavMenu;
