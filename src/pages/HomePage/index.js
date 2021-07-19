import React, { useState, useEffect } from "react";
import Cards from "../../components/Cards";
import { Box, Grid, Typography, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Medcloud from "../../assets/background.png";
import Guilherme from "../../assets/guilherme.jpg";
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
                            description="Medcloud is a manufacturer of single-use disposables in Medical Grade SMS Nonwovens and a distributor of products that work in the cleaning, decontamination and conservation..."
                            img={Medcloud}
                            link="https://www.Medcloud.com.br/a-Medcloud"
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
                            title="A guy for u to hire!"
                            description="Great guy, pls give me a chance!"
                            img={Guilherme}
                            link="https://www.linkedin.com/in/guilherme-romualdo-290641152/"
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
                            description="Provide innovative and quality solutions aimed at the safety of patients and professionals working in health services."
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
