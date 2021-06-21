import React from "react";
import {
  Link,
  AppBar,
  Toolbar,
  IconButton,
  Container,  
  useMediaQuery,
  Menu,
  MenuItem,
  Box,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import medClean from "../../assets/medClean.png";
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
    [theme.breakpoints.down("lg")]: {
      padding: "0px 40px 0px 25px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 5px 0px 5px",
    },
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
    "&:hover": {
      color: "rgba(255, 255, 255, 0.5) !important",
    },
  },

  VertIcon: {
    color: "white",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-end",
    },
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
      /* backgroundColor: "red",  */
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-around",
    },
  },
}));

const ITEM_HEIGHT = 48;

function NavBar(props) {
  const classes = useStyles();
  const theme = useTheme();

  const isMatch = useMediaQuery(theme.breakpoints.down("1023"));
  const isMobile = useMediaQuery(theme.breakpoints.down("426"));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);  
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  
  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          {isMobile ? (
            <>
              <Link href="">
                <img src={medClean} alt="logo" />
              </Link>
              <Container className={classes.containerButtons}>
              <IconButton
                color="primary"
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                
                <MenuIcon
                    className={classes.VertIcon}
                    style={{ fontSize: 30 }}
                  />
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
                    width: "50ch",
                    background: "black",
                  },
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link href="/" className={classes.text} underline="none">
                    Home
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="http://localhost:3000/consult" className={classes.text} underline="none">
                    Consult Patient
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="http://localhost:3000/edit" className={classes.text} underline="none">
                    Edit Patient
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="http://localhost:3000/insert" className={classes.text} underline="none">
                    Insert Patient
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="http://localhost:3000/delete" className={classes.text} underline="none">
                    Delete Patient
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="https://www.medclean.com.br/" className={classes.text} underline="none">
                    More About Us
                  </Link>
                </MenuItem>
                
              </Menu>{" "}
                <IconButton
                  color="primary"
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClick2}
                >
                  <MoreVertIcon
                  className={classes.VertIcon}
                  style={{ fontSize: 22 }}
                />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl2}
                  keepMounted
                  open={open2}
                  onClose={handleClose2}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "20ch",
                      background: "black",
                    },
                  }}
                >
                  <MenuItem onClick={handleClose2}>
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
                  <MenuItem onClick={handleClose2}>
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
                  <MenuItem onClick={handleClose2}>
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
              </Container>
              
            </>
          ) : (
            <>
              {isMatch ? (
                <>
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
                        href="http://localhost:3000/consult"
                        className={classes.text}
                        underline="none"
                      >
                        Consult Patient
                      </Link>
                    </Box>
                    <Box m={2} pt={3}>
                      <Link
                        href="http://localhost:3000/edit"
                        className={classes.text}
                        underline="none"
                      >
                        Edit Patient
                      </Link>
                    </Box>
                    <Box m={2} pt={3}>
                      <Link
                        href="http://localhost:3000/insert"
                        className={classes.text}
                        underline="none"
                      >
                        Insert Patient
                      </Link>
                    </Box>
                    <Box m={2} pt={3}>
                      <Link
                        href="http://localhost:3000/delete"
                        className={classes.text}
                        underline="none"
                      >
                        Delete Patient
                      </Link>
                    </Box>
                    <Box m={2} pt={3}>
                      <Link
                        href="https://www.medclean.com.br/"
                        target="_blank"
                        className={classes.text}
                        underline="none"
                      >
                        More about Us
                      </Link>
                    </Box>
                  </Container>
                  <IconButton
                    color="primary"
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon
                      className={classes.VertIcon}
                      style={{ fontSize: 30 }}
                    />
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
                        href="http://localhost:3000/consult"
                        className={classes.text}
                        underline="none"
                      >
                        Consult Patient
                      </Link>
                    </Box>
                    <Box m={2} pt={3}>
                      <Link
                        href="http://localhost:3000/edit"
                        className={classes.text}
                        underline="none"
                      >
                        Edit Patient
                      </Link>
                    </Box>
                    <Box m={2} pt={3}>
                      <Link
                        href="http://localhost:3000/insert"
                        className={classes.text}
                        underline="none"
                      >
                        Insert Patient
                      </Link>
                    </Box>
                    <Box m={2} pt={3}>
                      <Link
                        href="http://localhost:3000/delete"
                        className={classes.text}
                        underline="none"
                      >
                        Delete Patient
                      </Link>
                    </Box>
                    <Box m={2} pt={3}>
                      <Link
                        href="https://www.medclean.com.br/"
                        target="_blank"
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
