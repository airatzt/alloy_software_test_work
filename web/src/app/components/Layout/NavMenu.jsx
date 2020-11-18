import React from "react";
import GroupIcon from '@material-ui/icons/Group';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import List from "@material-ui/core/List";
import ListItemLink from "./ListItemLink";
import Paper from '@material-ui/core/Paper';
const NavMenu = () => {

  return (
    <nav>
        <Paper elevation={0}>
          <List aria-label="main mailbox folders">
            <ListItemLink to="/customers" primary="Покупатели" icon={<GroupIcon />} />
            <ListItemLink to="/report" primary="Отчеты" icon={<AssignmentIndIcon />} />
          </List>
        </Paper>
    </nav>
  );
};

export default NavMenu;
