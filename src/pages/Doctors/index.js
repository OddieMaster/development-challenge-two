import React, { useState, useEffect } from "react";
import { Grid, Box, Slide, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DoctorsCards from "../../components/DoctorsCards";
import Ldoctor from "../../assets/larissa.jpg";
import Jdoctor from "../../assets/jessica.jpg";
import Gdoctor from "../../assets/guilhermeDoc.jfif";
const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: theme.spacing(25),
    [theme.breakpoints.down("769")]: {
      marginTop: theme.spacing(15),
    },
  },
  boxMajor: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },

  boxContain: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("769")]: {
      marginTop: "15px",
    },
  },
}));
function Doctors() {
  const classes = useStyles();
  const [Arrived, setArrived] = useState(false);
  useEffect(() => {
    setArrived(true);
  }, []);
  return (
    <>
      <Box className={classes.box} />
      <Grid container spacing={2} justify="center">
        <Slide direction="right" in={Arrived}>
        <Grid item xs={"auto"} sm={"auto"}>
            <DoctorsCards
              title="Larissa Romualdo"
              subheader="11/06/1991"
              imgtitle="LR"
              description="A great Doctor!"
              img={Ldoctor}
            />
          </Grid>
        </Slide>
        <Slide direction="left" in={Arrived}>
        <Grid item xs={"auto"} sm={"auto"}>
       
        <DoctorsCards
              title="Jéssica Roziane"
              subheader="11/06/1991"
              imgtitle="LR"
              description="A great Doctor!"
              img={Jdoctor}
            />
           </Grid>
        </Slide>
        </Grid>
      <Slide direction="up" in={Arrived}>
        <Container className={classes.boxContain}>
          <DoctorsCards
            title="Guilherme Romualdo"
            subheader="03/04/1995"
            imgtitle="GR"
            description="A great Doctor!"
            img={Gdoctor}
          />
        </Container>
      </Slide>
    </>
  );
}

export default Doctors;
