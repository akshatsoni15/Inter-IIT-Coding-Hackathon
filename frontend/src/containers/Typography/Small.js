import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../stylesheets/containers/Typography/Small.js";

const useStyles = makeStyles(styles);

export default function Small(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.smallText}>
      {children}
    </div>
  );
}

Small.propTypes = {
  children: PropTypes.node
};
