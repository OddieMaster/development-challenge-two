import React, { useState } from "react";
import Cards from "../../components/Cards";
import NavBar from "../../components/NavBar";
import Form from "../../components/Form";
import Consult from "../../components/Consult";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cards: {
    margin: "40px 0;",
  },
  text: {
    fontFamily: "'Dosis', sans-serif",
    color: "white",
  },

  box: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down("769")]: {
      marginTop: theme.spacing(15),
    },
  },
}));

function HomePage() {
  const classes = useStyles();
  const [value, setValue] = useState(1);

  function addControl(value) {
    setValue(value);
    console.log(value);
  }
  return (
    <>
      <NavBar addControl={addControl} />
      {value === 1 && (
        <>
          <Box className={classes.box} />

          <Typography
            className={classes.text}
            variant="h1"
            color="primary"
            align="center"
            gutterBottom
          >
            Patient Control
          </Typography>
          <Box mt={7} />
          <Typography
            className={classes.text}
            variant="h2"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            Insert and Consult Medclean's Patients on the menu, more info about
            us bellow.
          </Typography>
          <Box mt={7} />
          <Grid container spacing={2} justify="center">
            <Grid item xs={"auto"} sm={"auto"}>
              <Cards className={classes.cards} />
            </Grid>
            <Grid item xs={"auto"} sm={"auto"}>
              <Cards className={classes.cards} />
            </Grid>
            <Grid item xs={"auto"} sm={"auto"}>
              <Cards className={classes.cards} />
            </Grid>
          </Grid>
        </>
      )} 
      {value === 2 && (
        <>
          <Box mt={25} />
          <Consult />
        </>
      )}
      {value === 3 && (
        <>
          <Box className={classes.box} />
          <Form />
        </>
      )}
    </>
  );
}

export default HomePage;
