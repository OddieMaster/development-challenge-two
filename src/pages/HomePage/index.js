import React, { useState } from "react";
import Cards from "../../components/Cards";
import NavBar from "../../components/NavBar";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cards: {
    margin: "40px 0;",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    minHeight: "0px;",
    minWidth: "0px;",
    maxHeight: "none;",
    maxWidth: "none;",
    margin: "0px;",
    padding: "0px",
    paddingTop: "300px;",
    [theme.breakpoints.down("376")]: {
      paddingTop: "200px;",
      width: "100%",
    height: "100%",
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
          <Container className={classes.container}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item xs={3} sm={12}>
                <Cards className={classes.cards} />
              </Grid>
              <Grid item xs={3} sm={12}>
                <Cards className={classes.cards} />
              </Grid>
              <Grid item xs={3} sm={12}>
                <Cards className={classes.cards} />
              </Grid>
            </Grid>
          </Container>
        </>
      )}
      {value === 2 && (
        <>
          <Container className={classes.container}>teste AQui</Container>
        </>
      )}
      {value === 3 && (
        <>
          <Container className={classes.container}>teste AQui2</Container>
        </>
      )}
    </>
  );
}

export default HomePage;
