import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "../../Auth/node_modules/components/Grid/GridContainer.js.js";
import GridItem from "../../Auth/node_modules/components/Grid/GridItem.js.js";
import Card from "../../Auth/node_modules/components/Card/Card.js.js";
import CardHeader from "../../Auth/node_modules/components/Card/CardHeader.js.js";
import CardBody from "../../Auth/node_modules/components/Card/CardBody.js.js";
import CardFooter from "../../Auth/node_modules/components/Card/CardFooter.js.js";
import Button from "../../Auth/node_modules/components/CustomButtons/Button.js.js";
import CustomInput from "../../Auth/node_modules/components/CustomInput/CustomInput.js.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/loginStyle.js";

const useStyles = makeStyles(styles);

export default function SectionLogin() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <form className={classes.form}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>Login</h4>
                  <div className={classes.socialLine}>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={e => e.preventDefault()}
                    >
                      <i className={classes.socialIcons + " fab fa-twitter"} />
                    </Button>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={e => e.preventDefault()}
                    >
                      <i className={classes.socialIcons + " fab fa-facebook"} />
                    </Button>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={e => e.preventDefault()}
                    >
                      <i
                        className={
                          classes.socialIcons + " fab fa-google-plus-g"
                        }
                      />
                    </Button>
                  </div>
                </CardHeader>
                <p className={classes.divider}>Or Be Classical</p>
                <CardBody>
                  <CustomInput
                    labelText="First Name..."
                    id="first"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      endAdornment: (
                        <InputAdornment position="end">
                          <People className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Email..."
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "email",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputIconsColor} />
                        </InputAdornment>
                      )
                    }}
                  />
                  <CustomInput
                    labelText="Password"
                    id="pass"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "password",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputIconsColor}>
                            lock_outline
                          </Icon>
                        </InputAdornment>
                      ),
                      autoComplete: "off"
                    }}
                  />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button simple color="primary" size="lg">
                    Get started
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
