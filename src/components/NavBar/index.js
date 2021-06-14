import React from "react";
import {
  Link,
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImgLogo from "../../assets/logotipoDOIS.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { lightBlue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: "1",
  },
  appbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: " black !important;",
    paddingLeft: "80px",
    paddingRight: "80px",
  },
  button: {
    display: "block;",
    margin: "40px 0;",
    width: "240px;",
    height: "80px;",
    border: "none;",
    backgroundColor: "#00a8ff;",
    color: "#fff;",
    fontSize: "18px;",
    borderRadius: " 20px;",
    outline: "none;",
    cursor: "pointer;",
    transition: ".3s linear;",
    paddingLeft: "10px",
    marginLeft: "20px",
    fontFamily: "'Roboto', sans-serif;",
    textTransform: "capitalize;",
  },
  btnHover1: {
    "&:hover": {
      transform: "rotateY(20deg)",
      boxShadow: "-15px 0 15px #00a8ff;",
      color: "#fff;",
    },
  },
  btnHover2: {
    "&:hover": {
      transform: "rotateY(20deg)",
      boxShadow: " 0 -15px 15px #00a8ff;",
      color: "#fff;",
    },
  },
  btnHover3: {
    "&:hover": {
      transform: "rotateY(20deg)",
      boxShadow: "15px 0 15px #00a8ff;",
      color: "#fff;",
    },
  },

  IconButton: {
    backgroundColor: "white",
    padding: "15px",
    marginLeft: "10px",
    "&:hover": {
      boxShadow: " 0 0 10px #00a8ff",
      color: "#fff;",
    },
  },

  container: {
    display: "flex",
    /* backgroundColor: "green", */
    justifyContent: "flex-end",
  },
  containerButtons: {
    display: "flex;",
    justifyContent: "space-around",
    flexDirection: "row;",
    /*  backgroundColor:"red", */
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Link href="">
            <img src={ImgLogo} alt="logo" />
          </Link>
          <Container className={classes.containerButtons}>
            <Button
              className={`${classes.button} ${classes.btnHover1}`}
              variant="contained"
              color="primary"
            >
              Home
            </Button>
            <Button
              className={`${classes.button} ${classes.btnHover2}`}
              variant="contained"
              color="primary"
            >
              Consult Patient
            </Button>
            <Button
              className={`${classes.button} ${classes.btnHover3}`}
              variant="contained"
              color="primary"
            >
              Insert Patient
            </Button>
          </Container>
          <Container className={classes.container}>
            <IconButton
              className={classes.IconButton}
              href="https://www.facebook.com/MedcleanBR/"
              target="_blank"
              rel="noopener"
              color="primary"
              aria-label="facebook"
            >
              <FacebookIcon />
            </IconButton>

            <IconButton
              className={classes.IconButton}
              href="https://www.instagram.com/medclean_br/"
              target="_blank"
              rel="noopener"
              color="secondary"
              aria-label="instagram"
            >
              <InstagramIcon />
            </IconButton>

            <IconButton
              className={classes.IconButton}
              href="https://br.linkedin.com/company/medclean"
              target="_blank"
              rel="noopener"
              color="inherit"
              aria-label="linkedin"
              style={{ color: lightBlue[500] }}
            >
              <LinkedInIcon />
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
