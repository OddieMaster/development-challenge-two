import React from "react";
import Cards from "../../components/Cards";
import NavBar from "../../components/NavBar";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cards: { 
    margin: "40px 0;",
    marginLeft: "20px",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    padding: "450px 100px",
  
  },
}));

function HomePage() {
  const classes = useStyles();
  return (
    <>
      <NavBar />

      <Container className={classes.container}>
        
        <Cards className={classes.cards} />
        <Cards className={classes.cards} />
        <Cards className={classes.cards} />
        <Cards className={classes.cards} />
      </Container>
    </>
  );
}

export default HomePage;
