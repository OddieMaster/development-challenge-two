import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, IconButton, Button, TextField } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";

const useStyles = makeStyles((theme) => ({
  initialBox: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down("769")]: {
      marginTop: theme.spacing(15),
    },
  },
  grid: {
    background:"rgb(248,248,255, 0.3)" /* "rgba(0,0,0,0.6)" */,
    padding: "15px",
    margin: "15px",
    minHeight: "48vh",
    display: "block",
    width: "97.5%",
  },
  text: {
    fontFamily: "'Lato', sans-serif",
    fontSize: "22px",
    fontWeight: "700",
    color: "#6a6a6a",
    /*  backgroundColor: "orange", */
    letterSpacing: ".5px",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlign: "end",
    width: "100%",
    height: "100%",
  },
  icon: {
    paddingLeft: "5px",
    fontSize: "24px",
    verticalAlign: "sub",
  },

  gridItem: {
    background: "rgb(255,255,255,0.97)" /* "rgba(0,0,0,0.6)" */,
    padding: "40px 80% 40px 40px",
    marginBottom: "20px",
    boxShadow: "0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 2px 1px -1px rgb(0 0 0 / 12%)",
  },
  iconDown: {
    display: "flex",
    justifyContent: "flex-end",
    flexGrow: 1,
    "&:hover": {
      backgroundColor: "none",
    },
  },
  button: {
    background: "#13335f",
    color: "white",
    textTransform: "capitalize",
    fontSize: 15,
    
  },

  textfieldName: {
    width: "150ch",
    margin: 8,
  },
  textfieldNumbered: {
    width: "40ch",
    margin: 8,
  },
  textfieldLine2: {
    width: "56.7ch",
    margin: 8,
  },
}));

function handleButton() {
  console.log("teste");
}
function Insert() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.initialBox} />
      <Grid container spacing={10} direction="row" className={classes.grid}>
        <Grid item xs={12} className={classes.gridItem}>
          <Box
            component="div"
            flexDirection="column"
            className={classes.container}
          >
            <span className={classes.text}>Patient</span>

            <CheckCircleIcon
              className={classes.icon}
              style={{ color: "#13ce8b" }}
            />
            <IconButton
              className={classes.iconDown}
              color="primary"
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              disableRipple
              disableFocusRipple
              onClick={handleButton}
            >
              <KeyboardArrowDownIcon
                color="secondary"
                style={{ fontSize: 30 }}
              />
            </IconButton>
          </Box>
          <form>
            <TextField
              id="outlined-full-width"
              label="Name"
              margin="normal"
              className={classes.textfieldName}
              variant="outlined"
            />
            <TextField
              id="outlined-full-width"
              label="Tel"
              margin="normal"
              type="number"
              className={classes.textfieldNumbered}
              variant="outlined"
            />
            <TextField
              id="outlined-full-width"
              label="Cellphone"
              margin="normal"
              type="tel"
              className={classes.textfieldNumbered}
              variant="outlined"
            />
            <TextField
              id="outlined-full-width"
              label="CPF"
              margin="normal"
              type="cpf"
              className={classes.textfieldLine2}
              variant="outlined"
            />
            <TextField
              id="outlined-full-width"
              label="RG"
              margin="normal"
              type="text"
              className={classes.textfieldLine2}
              variant="outlined"
            />
            <TextField
              id="outlined-full-width"
              label="Email"
              margin="normal"
              type="email"
              className={classes.textfieldLine2}
              variant="outlined"
            />
            <TextField
              id="outlined-full-width"
              label="Birth Date"
              margin="normal"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              className={classes.textfieldLine2}
              variant="outlined"
            />
            <Button
            variant="contained"
            color="primary"
            className={classes.button}
            style={{ marginTop: "15px" }}
          >
            Save and Continue
          </Button>
          </form>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <Box
            component="div"
            flexDirection="column"
            className={classes.container}
          >
            <span className={classes.text}>Address</span>

            <IndeterminateCheckBoxIcon
              className={classes.icon}
              color="secondary"
            />
            <IconButton
              className={classes.iconDown}
              color="primary"
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              disableRipple
              disableFocusRipple
            >
              <KeyboardArrowDownIcon
                color="secondary"
                style={{ fontSize: 30 }}
              />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <Box
            component="div"
            flexDirection="column"
            className={classes.container}
          >
            <span className={classes.text}>Exam Information</span>

            <IndeterminateCheckBoxIcon
              className={classes.icon}
              color="secondary"
            />
            <IconButton
              className={classes.iconDown}
              color="primary"
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              disableRipple
              disableFocusRipple
            >
              <KeyboardArrowDownIcon
                color="secondary"
                style={{ fontSize: 30 }}
              />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Update Resume
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Insert;
