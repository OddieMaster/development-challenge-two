import React from "react";
import {
  Link,
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Button,
  useMediaQuery,
  Menu,
  MenuItem,
  Box,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ImgLogo from "../../assets/logotipoDOIS.png";
import medClean from "../../assets/medClean.png";
import ImgLogo85 from "../../assets/logotipoDOIS85.png";
import ImgLogo150 from "../../assets/logotipoDOIS150x112.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { lightBlue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: "1",
  },
  appBar: {
    background: "  rgba(0,0,0,0.1)",
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    background: "  rgba(0,0,0,0.1)",
    alignContent: "center",
    padding: "0px 100px 0px 100px",
  },
  button: {
    color: "#D0CBD5",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  
  text: {    
    fontSize: "16px",
    fontWeight: "500",
    fontFamily: "'Dosis'",
    color: "white",
    textTransform: "uppercase",
    textDecoration: "none !important",
    position: "relative",
    display: "block",
  },

  IconButton: {
    backgroundColor: "white",
    padding: "15px",
    marginLeft: "10px",
    "&:hover": {
      boxShadow: " 0 0 10px #00a8ff",
      color: "#fff;",
      fontSize: 175,
    },
  },

  container: {
    display: "flex",
    /* backgroundColor: "green", */
    justifyContent: "flex-end",
  },
  containerButtons: {
    display: "flex;",
    justifyContent: "space-between",
    flexDirection: "row;",
    /*  backgroundColor:"red", */
    [theme.breakpoints.down("376")]: {
      padding: "0",
    },
  },
}));

const ITEM_HEIGHT = 48;
const Icons = 30;

function NavBar(props) {
  const classes = useStyles();

  //Breakpoint
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("1023"));
  const isMobile = useMediaQuery(theme.breakpoints.down("426"));
  console.log(isMatch);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          {isMobile ? (
            <>
              <Link href="">
                <img src={ImgLogo85} alt="logo" />
              </Link>
              <Container className={classes.containerButtons}>
                <Button
                  className={`${classes.button} ${classes.btnHover1} }`}
                  variant="contained"
                  color="primary"
                  onClick={() => props.addControl(1)}
                >
                  Home
                </Button>
                <Button
                  className={`${classes.button} ${classes.btnHover2} `}
                  variant="contained"
                  color="primary"
                  onClick={() => props.addControl(2)}
                >
                  Consult
                </Button>

                <Button
                  className={`${classes.button} ${classes.btnHover3} `}
                  variant="contained"
                  color="primary"
                  onClick={() => props.addControl(3)}
                >
                  Insert
                </Button>
              </Container>
              <IconButton
                color="primary"
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon style={{ fontSize: 22 }} />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                    background: "black",
                  },
                }}
              >
                <MenuItem onClick={handleClose}>
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
                </MenuItem>
                <MenuItem onClick={handleClose}>
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
                </MenuItem>
                <MenuItem onClick={handleClose}>
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
                </MenuItem>
              </Menu>{" "}
            </>
          ) : (
            <>
              {isMatch ? (
                <>
                  <Link href="">
                    <img src={ImgLogo150} alt="logo" />
                  </Link>
                  <Container className={classes.containerButtons}>
                    <Button
                      className={`${classes.button} ${classes.btnHover1} }`}
                      variant="contained"
                      color="primary"
                      onClick={() => props.addControl(1)}
                    >
                      Home
                    </Button>
                    <Button
                      className={`${classes.button} ${classes.btnHover2} `}
                      variant="contained"
                      color="primary"
                      onClick={() => props.addControl(2)}
                    >
                      Consult Patient
                    </Button>
                    <Button
                      className={`${classes.button} ${classes.btnHover3} `}
                      variant="contained"
                      color="primary"
                      onClick={() => props.addControl(3)}
                    >
                      Insert Patient
                    </Button>
                  </Container>
                  <IconButton
                    color="primary"
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon style={{ fontSize: Icons }} />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                        background: "black",
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>
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
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
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
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
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
                    </MenuItem>
                  </Menu>{" "}
                </>
              ) : (
                <>
                  {" "}
                  <Link href="">
                    <img src={medClean} alt="logo" />
                  </Link>
                  <Container className={classes.containerButtons}>
                    <Box m={2} pt={3}>
                      <Link href="/" className={classes.text} underline="none">
                        Home
                      </Link>
                    </Box>
                    <Box m={2} pt={3}>
                      <Link
                        href="http://localhost:3000/Consult"
                        className={classes.text}
                        underline="none"
                      >
                        Consult Patient
                      </Link>
                    </Box>
                    <Box m={2} pt={3}>
                      <Link
                        href="http://localhost:3000/Consult"
                        className={classes.text}
                        underline="none"
                      >
                        Edit Patient
                      </Link>
                    </Box>
                    <Box m={2} pt={3}>
                      <Link
                        href="http://localhost:3000/Consult"
                        className={classes.text}
                        underline="none"
                      >
                        Insert Patient
                      </Link>
                    </Box>
                    <Box m={2} pt={3}>
                      <Link
                        href="http://localhost:3000/Consult"
                        className={classes.text}
                        underline="none"
                      >
                        Delete Patient
                      </Link>
                    </Box>
                    <Box m={2} pt={3}>
                      <Link
                        href="http://localhost:3000/Consult"
                        className={classes.text}
                        underline="none"
                      >
                        More about Us
                      </Link>
                    </Box>
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
                  </Container>{" "}
                </>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
