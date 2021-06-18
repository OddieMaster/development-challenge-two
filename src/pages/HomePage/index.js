import React from "react";
import Cards from "../../components/Cards";
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

  return (
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
        Manage your patient's info above on the menu, more about us bellow.
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
  );
}

export default HomePage;
