import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Header from "../Header/index.js";
import HeaderLinks from "../Header/Links.js";
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Button from "../CustomButtons/index.js";
import CustomInput from "../CustomInput/index.js";
import Card from "../Card/index.js";
import CardBody from "../Card/CardBody.js";
import CardHeader from "../Card/CardHeader.js";
import CardFooter from "../Card/CardFooter.js";

import styles from "../../stylesheets/containers/Auth/index.js";
import image from "../../static/bg7.jpg";
import database from "../../database.js";

const useStyles = makeStyles(styles);

const upload = function() {

  const contract = {
    assigned_to: document.getElementById("assignedTo").value,
    budget: document.getElementById("budget").value,
    latitude: document.getElementById("latitude").value,
    longitude: document.getElementById("longitude").value,
    name: document.getElementById("name").value,
    phase: document.getElementById("phase").value,
    target: document.getElementById("target").value,
  };

  database.ref().child('Contract').push(contract).then(response => {
    console.log(response);
    alert('data uploaded successfully')
    document.getElementById("assignedTo").value = '';
    document.getElementById("budget").value = '';
    document.getElementById("latitude").value = '';
    document.getElementById("longitude").value = '';
    document.getElementById("name").value = '';
    document.getElementById("phase").value = '';
    document.getElementById("target").value = '';
  });
}

export default function Auth(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div
      className={classes.parent}
      style={{
        backgroundImage: "url(" + image + ")",
        backgroundSize: "cover",
      }}
    >
      <Header
        brand="ISM The Builders"
        rightLinks={<HeaderLinks />}
        absolute
        color="transparent"
        {...rest}
      />
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <form className={classes.form}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>Please fill in details</h4>
                </CardHeader>
                <CardBody>
                  <div>
                  <CustomInput
                    labelText="Assigned To"
                    id="assignedTo"
                      style={{ width: 200 }}
                  />
                  <CustomInput
                    labelText="Budget"
                    id="budget"
                      style={{ width: "50%" }}
                  />
                  <CustomInput
                    labelText="Latitude"
                    id="latitude"
                      style={{ width: "50%" }}
                  />
                  <CustomInput
                    labelText="Longitude"
                    id="longitude"
                      style={{ width: "50%" }}
                  />
                  <CustomInput
                    labelText="Name"
                    id="name"
                      style={{ width: "50%" }}
                  />
                  <CustomInput
                    labelText="Phase"
                    id="phase"
                      style={{ width: "50%" }}
                  />
                  <CustomInput
                    labelText="Target"
                    id="target"
                      style={{ width: "50%" }}
                  />
                  </div>
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button simple color="primary" size="lg" onClick={upload}>
                    Upload
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
