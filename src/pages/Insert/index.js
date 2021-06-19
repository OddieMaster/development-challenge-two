import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  IconButton,
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useStyles = makeStyles((theme) => ({
  initialBox: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down("769")]: {
      marginTop: theme.spacing(15),
    },
  },
  grid: {
    background: "rgb(248,248,255, 0.3)" /* "rgba(0,0,0,0.6)" */,
    padding: "15px",
    margin: "15px",
    minHeight: "48vh",
    display: "block",
    width: "96%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
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
    boxShadow:
      "0px 1px 3px 0px rgb(0 0 0 / 25%), 0px 1px 1px 0px rgb(0 0 0 / 18%), 0px 2px 1px -1px rgb(0 0 0 / 14%)",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },

  iconDown: {
    display: "flex",
    justifyContent: "flex-end",
    flexGrow: 1,
    "&:hover": {
      backgroundColor: "unset !important;",
    },
  },
  button: {
    background: "#13335f",
    color: "white",
    textTransform: "capitalize",
    fontSize: 15,
  },

  textfield: {
    margin: 8,
    maxWidth: "150ch",
    minWidth: "40ch",   
  },
}));

function Insert() {
  const classes = useStyles();
  const [PatientForm, setPatientForm] = useState(0);
  const [AddressForm, setAddressForm] = useState(0);
  const [ExamForm, setExamForm] = useState(0);
  const [Doctor, setDoctor] = useState("");
  var curr = new Date();
  curr.setDate(curr.getDate());
  var date = curr.toISOString().substr(0, 10);

  const handleChange = (event) => {
    setDoctor(event.target.value);
  };
  const handlePatientForm = (value) => {
    setPatientForm(value);
  };
  const handleAddressForm = (value) => {
    setAddressForm(value);
  };
  const handleExamForm = (value) => {
    setExamForm(value);
  };

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
            {PatientForm === 0 && (
              <>
                {" "}
                <IconButton
                  className={classes.iconDown}
                  color="primary"
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  disableRipple
                  disableFocusRipple
                  onClick={() => handlePatientForm(1)}
                >
                  <KeyboardArrowDownIcon
                    color="secondary"
                    style={{ fontSize: 30 }}
                  />
                </IconButton>{" "}
              </>
            )}
            {PatientForm === 1 && (
              <>
                <IconButton
                  className={classes.iconDown}
                  color="primary"
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  disableRipple
                  disableFocusRipple
                  onClick={() => handlePatientForm(0)}
                >
                  <KeyboardArrowUpIcon
                    color="secondary"
                    style={{ fontSize: 30 }}
                  />
                </IconButton>
              </>
            )}
          </Box>
          {PatientForm === 1 && (
            <>
              <form>
                <TextField
                  id="outlined-full-width"
                  label="Name"
                  margin="normal"
                  className={classes.textfield}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  id="outlined-full-width"
                  label="Tel"
                  margin="normal"
                  type="number"
                  className={classes.textfield}
                  variant="outlined"
                />
                <TextField
                  id="outlined-full-width"
                  label="Cellphone"
                  margin="normal"
                  type="tel"
                  className={classes.textfield}
                  variant="outlined"
                />
                <TextField
                  id="outlined-full-width"
                  label="CPF"
                  margin="normal"
                  type="cpf"
                  className={classes.textfield}
                  variant="outlined"
                />
                <TextField
                  id="outlined-full-width"
                  label="RG"
                  margin="normal"
                  type="text"
                  className={classes.textfield}
                  variant="outlined"
                />
                <TextField
                  id="outlined-full-width"
                  label="Email"
                  margin="normal"
                  type="email"
                  className={classes.textfield}
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
                  className={classes.textfield}
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
            </>
          )}
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
            {AddressForm === 0 && (
              <>
                {" "}
                <IconButton
                  className={classes.iconDown}
                  color="primary"
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  disableRipple
                  disableFocusRipple
                  onClick={() => handleAddressForm(1)}
                >
                  <KeyboardArrowDownIcon
                    color="secondary"
                    style={{ fontSize: 30 }}
                  />
                </IconButton>{" "}
              </>
            )}
            {AddressForm === 1 && (
              <>
                <IconButton
                  className={classes.iconDown}
                  color="primary"
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  disableRipple
                  disableFocusRipple
                  onClick={() => handleAddressForm(0)}
                >
                  <KeyboardArrowUpIcon
                    color="secondary"
                    style={{ fontSize: 30 }}
                  />
                </IconButton>
              </>
            )}
          </Box>
          {AddressForm === 1 && (
            <>
              <form>
                <TextField
                  id="outlined-full-width"
                  label="Street"
                  margin="normal"
                  fullWidth
                  className={classes.textfield}
                  variant="outlined"
                />
                <TextField
                  id="outlined-full-width"
                  label="Number"
                  margin="normal"
                  type="number"
                  className={classes.textfield}
                  variant="outlined"
                />
                <TextField
                  id="outlined-full-width"
                  label="Additional address details "
                  margin="normal"
                  type="text"
                  className={classes.textfield}
                  variant="outlined"
                />
                <TextField
                  id="outlined-full-width"
                  label="Area"
                  margin="normal"
                  type="text"
                  className={classes.textfield}
                  variant="outlined"
                />
                <TextField
                  id="outlined-full-width"
                  label="City"
                  margin="normal"
                  type="text"
                  className={classes.textfield}
                  variant="outlined"
                />
                <TextField
                  id="outlined-full-width"
                  label="State"
                  margin="normal"
                  type="text"
                  className={classes.textfield}
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
            </>
          )}
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
            {ExamForm === 0 && (
              <>
                {" "}
                <IconButton
                  className={classes.iconDown}
                  color="primary"
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  disableRipple
                  disableFocusRipple
                  onClick={() => handleExamForm(1)}
                >
                  <KeyboardArrowDownIcon
                    color="secondary"
                    style={{ fontSize: 30 }}
                  />
                </IconButton>{" "}
              </>
            )}
            {ExamForm === 1 && (
              <>
                <IconButton
                  className={classes.iconDown}
                  color="primary"
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  disableRipple
                  disableFocusRipple
                  onClick={() => handleExamForm(0)}
                >
                  <KeyboardArrowUpIcon
                    color="secondary"
                    style={{ fontSize: 30 }}
                  />
                </IconButton>
              </>
            )}
          </Box>
          {ExamForm === 1 && (
            <>
              <form>
                <TextField
                  id="dateRequired"
                  label="Actual Date"
                  value={date}
                  margin="normal"
                  type="date"
                  className={classes.textfield}
                  variant="outlined"
                  defaultValue={date}
                  InputProps={{
                    readOnly: true,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="dateRequired"
                  label="Actual Hour"
                  value={date}
                  margin="normal"
                  type="time"
                  className={classes.textfield}
                  variant="outlined"
                  defaultValue={date}
                  InputProps={{
                    readOnly: true,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="outlined-full-width"
                  label="Requested By"
                  margin="normal"
                  type="text"
                  className={classes.textfield}
                  variant="outlined"
                />
                <TextField
                  id="outlined-full-width"
                  label="Agreement"
                  margin="normal"
                  type="text"
                  className={classes.textfield}
                  variant="outlined"
                />
                <TextField
                  id="datetime-local"
                  label="Next appointment"
                  margin="normal"
                  type="datetime-local"
                  className={classes.textfield}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Doctor
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={Doctor}
                    onChange={handleChange}
                    label="Doctor"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Guilherme</MenuItem>
                    <MenuItem value={20}>Jéssica</MenuItem>
                    <MenuItem value={30}>Vitor</MenuItem>
                  </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel id="demo-simple-select-outlined-label">
                    Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={Doctor}
                    onChange={handleChange}
                    label="Doctor"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>

                    <MenuItem value={10}>Auscultation</MenuItem>
                    <MenuItem value={20}>Autopsy</MenuItem>
                    <MenuItem value={30}>Bronchoscopy</MenuItem>
                    <MenuItem value={30}>Cardiac catheterization</MenuItem>
                    <MenuItem value={30}>Colposcopy</MenuItem>
                    <MenuItem value={30}>Endoscopy</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  style={{ marginTop: "15px" }}
                >
                  Save and Continue
                </Button>
              </form>
            </>
          )}
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
