import React, { useState, useEffect } from "react";
import Cards from "../../components/Cards";
import { Box, Grid, Typography, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Medcloud from "../../assets/medcloud.jpg";
import OurValues from "../../assets/valores.jpg";
import Doctor from "../../assets/doctor.jpg";

const useStyles = makeStyles((theme) => ({
    cards: {
        margin: "40px 0;",
    },
    text: {
        fontFamily: "'Dosis', sans-serif",
        color: "white",
        [theme.breakpoints.down("769")]: {
            fontSize: 30,
        },
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
    const [Grow, setGrow] = useState(false);
    useEffect(() => {
        setGrow(true);
    }, []);

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
                Manage your patient's info above on the menu, more about us
                bellow.
            </Typography>
            <Box mt={7} />

            <Grid container spacing={2} justify="center">
                <Zoom in={Grow}>
                    <Grid item xs={"auto"} sm={"auto"}>
                        <Cards
                            className={classes.cards}
                            title="About Medcloud"
                            description="Medcloud has been operating in the medical image management software market since 2012. Since then, we have been awarded prizes..."
                            img={Medcloud}
                            link="https://www.medcloud.com.br/"
                        />
                    </Grid>
                </Zoom>
                <Zoom
                    in={Grow}
                    style={{ transitionDelay: Grow ? "500ms" : "0ms" }}
                >
                    <Grid item xs={"auto"} sm={"auto"}>
                        <Cards
                            className={classes.cards}
                            title="What we believe!"
                            description="Quality, Innovation, Frontline and Patient First."
                            img={OurValues}
                            link="https://medcloud.link/careers.html"
                        />
                    </Grid>
                </Zoom>
                <Zoom
                    in={Grow}
                    style={{ transitionDelay: Grow ? "1000ms" : "0ms" }}
                >
                    <Grid item xs={"auto"} sm={"auto"}>
                        <Cards
                            className={classes.cards}
                            title="Our mission"
                            description="Accelerate the transition of clinics and hospitals to the cloud and therefore improving the journey experience of millions of patients."
                            img={Doctor}
                            link="https://www.Medcloud.com.br/a-Medcloud"
                        />
                    </Grid>
                </Zoom>
            </Grid>
        </>
    );
}

export default HomePage;
