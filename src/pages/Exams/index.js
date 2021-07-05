import React from "react";
import { Box, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cards: {
        margin: "40px 0;",
    },
    text: {
        fontFamily: "'Dosis', sans-serif",
        color: "black",
        textAlign: "justify",
        [theme.breakpoints.down("769")]: {
            fontSize: 30,
        },
    },
    container: {
        background: "rgb(248,248,255, 0.5)",
    },

    box: {
        marginTop: theme.spacing(20),
        [theme.breakpoints.down("769")]: {
            marginTop: theme.spacing(15),
        },
    },
}));
function Exams() {
    const classes = useStyles();
    const texts = [
        {
            id: 1,
            title: "Auscultation",
            description:
                "Auscultation is the term for listening to the internal sounds of the body, usually using a stethoscope. Auscultation is performed for thepurposes of examining the circulatory system and respiratory system (heart sounds and breath sounds), as well as the gastrointestinal system (bowel sounds). It is an integral part of physical examination of a patient and is routinely used to provide strong evidence including or excluding different pathological conditions that are manifested clinically in the patient.",
        },
        {
            id: 2,
            title: "Autopsy",
            description:
                "An autopsy (post-mortem examination, obduction, necropsy, or autopsia cadaverum) is a surgical procedure that consists of a thorough examination of a corpse by dissection to determine the cause, mode, and manner of death or to evaluate any disease or injury that may be present for research or educational purposes. (The term 'necropsy' is generally reserved for non-human animals). Autopsies are usually performed by a specialized medical doctor called a pathologist. In most cases, a medical examiner or coroner can determine cause of death and only a small portion of deaths require an autopsy.",
        },
        {
            id: 3,
            title: "Bronchoscopy",
            description:
                "Bronchoscopy is a procedure to look directly at the airways in the lungs using a thin, lighted tube (bronchoscope). The bronchoscope is put in the nose or mouth. It is moved down the throat and windpipe (trachea), and into the airways.",
        },
        {
            id: 4,
            title: "Cardiac catheterization",
            description:
                "Cardiac catheterization (kath-uh-tur-ih-ZAY-shun) is a procedure used to diagnose and treat certain cardiovascular conditions. During cardiac catheterization, a long thin tube called a catheter is inserted in an artery or vein in your groin, neck or arm and threaded through your blood vessels to your heart.",
        },
        {
            id: 5,
            title: "Colposcopy",
            description:
                "A colposcopy is a simple procedure used to look at the cervix, the lower part of the womb at the top of the vagina. It's often done if cervical screening finds abnormal cells in your cervix.",
        },
        {
            id: 6,
            title: "Endoscopy",
            description:
                "An endoscopy is a procedure where organs inside your body are looked at using an instrument called an endoscope. An endoscope is a long, thin, flexible tube that has a light and camera at one end. Images of the inside of your body are shown on a television screen.",
        },
    ];
    return (
        <>
            <Box className={classes.box} />
            <Container className={classes.container}>
                <Typography
                    className={classes.text}
                    variant="h1"
                    color="primary"
                    align="center"
                    gutterBottom
                >
                    Exams
                </Typography>
                {texts.map((row) => (
                    <div key={row.id}>
                        <Typography
                            key={row.id}
                            className={classes.text}
                            variant="h2"
                            color="primary"
                            align="center"
                            gutterBottom
                        >
                            {row.title}
                        </Typography>
                        <Box mt={7} />
                        <Typography
                            className={classes.text}
                            variant="h3"
                            align="center"
                            color="textSecondary"
                            gutterBottom
                        >
                            {row.description}
                        </Typography>
                    </div>
                ))}
            </Container>
        </>
    );
}

export default Exams;
