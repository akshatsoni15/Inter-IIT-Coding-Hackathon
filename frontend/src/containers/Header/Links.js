import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import { Apps, CloudDownload } from "@material-ui/icons";

import CustomDropdown from "../CustomDropdown/index.js";
import Button from "../CustomButtons/index.js";

import styles from "../../stylesheets/containers/Header/Links.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <a href="/" className={classes.dropdownLink}>
              Home
            </a>,
            <a href="/upload" className={classes.dropdownLink}>
              Assign new task
            </a>,
            <a href="/assigned" className={classes.dropdownLink}>
              Assigned Tasks
            </a>,
            <a href="/maintain" className={classes.dropdownLink}>
              Issues
            </a>,
          ]}
        />
      </ListItem>
    </List>
  );
}
