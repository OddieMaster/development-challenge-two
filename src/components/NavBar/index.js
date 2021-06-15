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
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ImgLogo from "../../assets/logotipoDOIS.png";
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
  appbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: " black !important;",
    paddingLeft: "80px",
    paddingRight: "80px",
    alignContent: "center",
    flexWrap: "wrap",
   
  },
  button: {
    display: "block;",
    margin: "40px 0;",
    width: "240px;",
    height: "80px;",
    border: "none;",
    backgroundColor: "#00a8ff;",
    color: "#fff;",
    fontSize: "25px;",
    borderRadius: " 20px;",
    outline: "none;",
    cursor: "pointer;",
    transition: ".3s linear;",
    paddingLeft: "10px",
    marginLeft: "20px",
    textTransform: "capitalize;",
    fontFamily: "'Dosis', sans-serif;",
    [theme.breakpoints.down("lg")]: {
      margin: "21px 0 20px;",
      marginLeft: "20px",      
      fontSize: "18px;",
      width: "200px;",
      height: "60px;",
    },
    [theme.breakpoints.down("md")]: {
      margin: "10px 0 10px;",
      marginLeft: "20px",
      fontSize: "17px;",
      width: "150px;",
      height: "60px;",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "10px 0 10px;",
      marginLeft: "10px",
      fontSize: "15px;",
      width: "120px;",
      height: "60px;",
    },
    [theme.breakpoints.down("426")]: {
      margin: "10px 0 10px;",
      marginLeft: "10px",
      fontSize: "13px;",
      width: "50px;",
      height: "40px;",
    },
    [theme.breakpoints.down("376")]: {
      margin: "6px 0 6px;",
      marginLeft: "10px",
      fontSize: "12px;",
      width: "50px;",
      height: "40px;",
    },
    [theme.breakpoints.down("321")]: {
      margin: "4px 0 4px;",
      marginLeft: "2px",  
      fontSize: "10px;",    
      width: "0px;",
      height: "30px;",
    },
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
    justifyContent: "space-around",
    flexDirection: "row;",
    /*  backgroundColor:"red", */
    [theme.breakpoints.down("376")]: {
      padding: "0"
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
      <AppBar className={classes.appbar}>
        <Toolbar>
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
                    <img src={ImgLogo} alt="logo" />
                  </Link>
                  <Container className={classes.containerButtons}>
                    <Button
                      className={`${classes.button} ${classes.btnHover1}`}
                      variant="contained"
                      color="primary"
                      onClick={() => props.addControl(1)}
                    >
                      Home
                    </Button>
                    <Button
                      className={`${classes.button} ${classes.btnHover2}`}
                      variant="contained"
                      color="primary"
                      onClick={() => props.addControl(2)}
                    >
                      Consult Patient
                    </Button>
                    <Button
                      className={`${classes.button} ${classes.btnHover3}`}
                      variant="contained"
                      color="primary"
                      onClick={() => props.addControl(3)}
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
