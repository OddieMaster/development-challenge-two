import React from "react";
import { Link, AppBar, Toolbar, Button, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ImgLogo from "../../assets/medClean.png";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: "1"
    },
  appbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: " rgba(255, 255, 255, 0.5) !important;",
    paddingLeft: "80px",
    paddingRight: "80px",
  },
  button: {
    padding: "15px 10px 3px 25px",
    fontSize: "16px",
    fontFamily: "Arial, Helvetica, sans-serif;",
    fontWeight: "bold;",
    alignSelf: "left;",
    
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
          <Link
            className={classes.button}
            href=""
            color="primary"
            underline="none"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Home
          </Link>

          <Link
            className={classes.button}
            href=""
            color="primary"
            underline="none"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Insert Patient
          </Link>
          <Link
            className={classes.button}
            href=""
            color="primary"
            underline="none"
            onClick={() => {
              console.info("I'm a button.");
            }}
          >
            Consult Patient
          </Link>
          <Button color="inherit" flexGrow={1}>Login</Button>
          <IconButton
            edge="end"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          ></IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
