import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grid: {},
  box: {
    backgroundColor: "black",
    marginTop: theme.spacing(20),
    [theme.breakpoints.down("769")]: {
      marginTop: theme.spacing(15),
    },
  },
}));

function Consult() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Consult;
