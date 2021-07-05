import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        width: 290,
    },
    typography: {
        height: 130,
    },
    media: {
        height: 140,
    },
    text: {
        fontSize: 15,
        textAlign: "justify",
    },
    button: {
        fontFamily: "'dosis'",
    },
});

export default function MediaCard(props) {
    const classes = useStyles();
    const { title, description, img, link } = props;

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title="Contemplative Reptile"
                />
                <CardContent className={classes.typography}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        align="center"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.text}
                    >
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link
                    href={link}
                    target="_blank"
                    rel="noopener"
                    className={classes.button}
                >
                    Learn More
                </Link>
            </CardActions>
        </Card>
    );
}
