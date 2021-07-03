import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down("769")]: {
      marginTop: theme.spacing(15),
    },
    boxContainer: {
      backgroundColor: "blue",
    },
  },
}));
function Doctors() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box} />
      <Box className={classes.boxContainer} />
    </>
  );
}

export default Doctors;
