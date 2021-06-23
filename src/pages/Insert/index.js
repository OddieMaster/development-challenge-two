import React, { useState, useEffect } from "react";
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
  Collapse,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  initialBox: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down("769")]: {
      marginTop: theme.spacing(15),
    },
  },
  grid: {
    background: "rgb(248,248,255, 0.1)",
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
    background: "rgb(255,255,255,0.97)",
    padding: "20px !important",
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
    padding: "12px 12px 12px 0px",
    "&:hover": {
      backgroundColor: "unset !important;",
    },

  },
  labelIcon: {
    "&:hover": {
      backgroundColor: "unset !important;",
      padding: "12px 0px 12px 12px",
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
    maxWidth: "120ch",
  },
  dropdown: {
    transition: theme.transitions.create(["transform"], {
      duration: theme.transitions.duration.short,
    }),
    color: "rgba(0, 0, 0, 0.54)",
  },
  dropdownOpen: {
    transform: "rotate(0)",
  },
  dropdownClosed: {
    transform: "rotate(180deg)",
  },
  error: {
    color: "red",
    marginTop: 1,
    marginLeft: 15,
    fontFamily: "Verdana",
  },
  gridInside: {
    display: "grid",
    gridColumnGap: "3%",
    gridRowGap: "24px",
    width: "100%",
    marginBottom: "24px",
    gridTemplateColumns: "48% auto",
    [theme.breakpoints.down("426")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  gridItens: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  form: {
    width: "100%",
    display: "flex;",
    alignItems: " center",
    flexDirection: "column",
  },
}));

function Insert() {
  const classes = useStyles();
  const [PatientForm, setPatientForm] = useState(0);
  const [AddressForm, setAddressForm] = useState(0);
  const [ExamForm, setExamForm] = useState(0);
  const [PatientIcon, setPatientIcon] = useState(0);
  const [AddressIcon, setAddressIcon] = useState(0);
  const [ExamIcon, setExamIcon] = useState(0);
  const [Doctor, setDoctor] = useState("");
  const [Exam, setExam] = useState("");
  const { handleSubmit, register, control, errors } = useForm({});

  var today = new Date();
  today.setDate(today.getDate());
  var date = today.toISOString().substr(0, 10);
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const handleChange = (event) => {
    setDoctor(event.target.value);
  };
  const handleChangeExam = (event) => {
    setExam(event.target.value);
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
  const callNext = (value) => {
    switch (value) {
      case 1:
        setPatientForm(0);
        setAddressForm(1);
        setPatientIcon(1);
        break;
      case 2:
        setAddressForm(0);
        setExamForm(1);
        setAddressIcon(1);
        break;
      case 3:
        setExamForm(0);
        setExamIcon(1);

        break;
      default:
      // do nothing
    }
  };

  function onSubmit(formData) {
    console.log(formData);
  }

  useEffect(() => {
    if (useRef.current) {
      useRef.current = false;
    } else if (
      errors.patient ||
      errors.cellphone ||
      errors.cpf ||
      errors.rg ||
      errors.email ||
      errors.bdate
    ) {
      setPatientForm(1);
      setPatientIcon(0);
    } else if (
      errors.street ||
      errors.residentialNumber ||
      errors.residentialArea ||
      errors.city ||
      errors.state
    ) {
      setAddressForm(1);
      setAddressIcon(0);
    } else if (
      errors.resquetedBy ||
      errors.agreement ||
      errors.nextAppointment ||
      errors.doctor ||
      errors.exam
    ) {
      setExamForm(1);
      setExamIcon(0);
    }
  }, [errors]);

  const useRef = React.useRef(true);

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
            <IconButton
              className={classes.labelIcon}
              color="primary"
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              disableRipple
              disableFocusRipple
              onClick={() =>
                PatientForm === 0 ? handlePatientForm(1) : handlePatientForm(0)
              }
            >
              <span className={classes.text}>Patient</span>
              {PatientIcon === 0 && (
                <>
                  <IndeterminateCheckBoxIcon
                    className={classes.icon}
                    color="secondary"
                  />
                </>
              )}
              {PatientIcon === 1 && (
                <>
                  <CheckCircleIcon
                    className={classes.icon}
                    style={{ color: "#13ce8b" }}
                  />
                </>
              )}
            </IconButton>
            <IconButton
              className={classes.iconDown}
              color="primary"
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              disableRipple
              disableFocusRipple
              onClick={() =>
                PatientForm === 0 ? handlePatientForm(1) : handlePatientForm(0)
              }
            >
              <KeyboardArrowDownIcon
                style={{ fontSize: 30 }}
                className={[
                  classes.dropdown,
                  PatientForm === 0
                    ? classes.dropdownOpen
                    : classes.dropdownClosed,
                ].join(" ")}
              />
            </IconButton>
          </Box>
          <Collapse in={PatientForm === 1}>
            <Box display="flex" alignItems="center" flexDirection="column">
              <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <Grid className={classes.gridInside}>
                  <Grid item className={classes.gridItens}>
                    <TextField
                      label="Name"
                      name="patient"
                      margin="normal"
                      type="text"
                      className={classes.textfield}
                      variant="outlined"
                      inputRef={register({
                        required: true,
                        minLength: 5,
                        maxLength: 40,
                      })}
                    />
                    {errors.patient && errors.patient.type === "required" && (
                      <>
                        <p className={classes.error}>Invalid Name</p>
                      </>
                    )}
                    {errors.patient && errors.patient.type === "minLength" && (
                      <>
                        <p className={classes.error}>
                          This field required min lenght of 5
                        </p>
                      </>
                    )}
                    {errors.patient && errors.patient.type === "maxLength" && (
                      <>
                        <p className={classes.error}>Max length exceeded</p>
                      </>
                    )}
                  </Grid>
                  <Grid item className={classes.gridItens}>
                    <TextField
                      name="cellphone"
                      label="Cellphone"
                      margin="normal"
                      type="number"
                      className={classes.textfield}
                      variant="outlined"
                      inputRef={register({
                        required: true,
                        minLength: 8,
                        maxLength: 10,
                      })}
                    />
                    {errors.cellphone && errors.cellphone.type === "required" && (
                      <>
                        <p className={classes.error}>Invalid Cellphone</p>
                      </>
                    )}
                    {errors.cellphone && errors.cellphone.type === "minLength" && (
                      <>
                        <p className={classes.error}>
                          This field required min lenght of 8
                        </p>
                      </>
                    )}
                    {errors.cellphone && errors.cellphone.type === "maxLength" && (
                      <>
                        <p className={classes.error}>Max length exceeded</p>
                      </>
                    )}
                  </Grid>
                  <Grid item className={classes.gridItens}>
                    <TextField
                      name="cpf"
                      label="CPF, numbers only"
                      margin="normal"
                      type="text"
                      className={classes.textfield}
                      variant="outlined"
                      inputRef={register({
                        required: true,
                        minLength: 10,
                      })}
                    />
                    {errors.cpf && errors.cpf.type === "required" && (
                      <>
                        <p className={classes.error}>Invalid CPF</p>
                      </>
                    )}
                    {errors.cpf && errors.cpf.type === "minLength" && (
                      <>
                        <p className={classes.error}>Invalid CPF type</p>
                      </>
                    )}
                  </Grid>
                  <Grid item className={classes.gridItens}>
                    <TextField
                      name="rg"
                      label="RG"
                      margin="normal"
                      type="text"
                      className={classes.textfield}
                      variant="outlined"
                      inputRef={register({
                        required: true,
                        minLength: 8,
                      })}
                    />
                    {errors.rg && errors.rg.type === "required" && (
                      <>
                        <p className={classes.error}>Invalid RG</p>
                      </>
                    )}
                    {errors.rg && errors.rg.type === "minLength" && (
                      <>
                        <p className={classes.error}>
                          This field required min lenght of 8
                        </p>
                      </>
                    )}
                  </Grid>
                  <Grid item className={classes.gridItens}>
                    <TextField
                      name="email"
                      label="Email"
                      margin="normal"
                      type="email"
                      className={classes.textfield}
                      variant="outlined"
                      inputRef={register({
                        required: true,
                        minLength: 5,
                      })}
                    />
                    {errors.email && errors.email.type === "required" && (
                      <>
                        <p className={classes.error}>Invalid E-mail</p>
                      </>
                    )}
                    {errors.email && errors.email.type === "minLength" && (
                      <>
                        <p className={classes.error}>
                          This field required min lenght of 5
                        </p>
                      </>
                    )}
                  </Grid>
                  <Grid item className={classes.gridItens}>
                    <TextField
                      name="bdate"
                      label="Birth Date"
                      margin="normal"
                      type="date"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      className={classes.textfield}
                      variant="outlined"
                      inputRef={register
                        
                        ({
                        required: true,
                        minLength: 5,
                      })}
                    />
                    {errors.bdate && errors.bdate.type === "required" && (
                      <>
                        <p className={classes.error}>Invalid Date</p>
                      </>
                    )}
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  style={{ marginTop: "15px" }}
                  onClick={() => callNext(1)}
                >
                  Next
                </Button>
              </form>
            </Box>
          </Collapse>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <Box
            component="div"
            flexDirection="column"
            className={classes.container}
          >
            <IconButton
              className={classes.labelIcon}
              color="primary"
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              disableRipple
              disableFocusRipple
              onClick={() =>
                AddressForm === 0 ? handleAddressForm(1) : handleAddressForm(0)
              }
            >
              <span className={classes.text}>Address</span>

              {AddressIcon === 0 && (
                <>
                  <IndeterminateCheckBoxIcon
                    className={classes.icon}
                    color="secondary"
                  />
                </>
              )}
              {AddressIcon === 1 && (
                <>
                  <CheckCircleIcon
                    className={classes.icon}
                    style={{ color: "#13ce8b" }}
                  />
                </>
              )}
            </IconButton>
            <IconButton
              className={classes.iconDown}
              color="primary"
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              disableRipple
              disableFocusRipple
              onClick={() =>
                AddressForm === 0 ? handleAddressForm(1) : handleAddressForm(0)
              }
            >
              <KeyboardArrowDownIcon
                style={{ fontSize: 30 }}
                className={[
                  classes.dropdown,
                  AddressForm === 0
                    ? classes.dropdownOpen
                    : classes.dropdownClosed,
                ].join(" ")}
              />
            </IconButton>
          </Box>
          <Collapse in={AddressForm === 1}>
            <Box display="flex" alignItems="center" flexDirection="column">
              <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <Grid className={classes.gridInside}>
                  <Grid item className={classes.gridItens}>
                    <TextField
                      name="street"
                      label="Street"
                      margin="normal"
                      className={classes.textfield}
                      variant="outlined"
                      inputRef={register({
                        required: true,
                        minLength: 5,
                        maxLength: 30,
                      })}
                    />
                    {errors.street && errors.street.type === "required" && (
                      <p className={classes.error}>Invalid Street</p>
                    )}
                    {errors.street && errors.street.type === "minLength" && (
                      <p className={classes.error}>
                        This field required min lenght of 5
                      </p>
                    )}
                    {errors.street && errors.street.type === "maxLength" && (
                      <p className={classes.error}>Max length exceeded</p>
                    )}
                  </Grid>
                  <Grid item className={classes.gridItens}>
                    <TextField
                      name="residentialNumber"
                      label="Residential Number"
                      margin="normal"
                      type="number"
                      className={classes.textfield}
                      variant="outlined"
                      inputRef={register({
                        required: true,
                      })}
                    />
                    {errors.residentialNumber &&
                      errors.residentialNumber.type === "required" && (
                        <p className={classes.error}>
                          Invalid Residential Number
                        </p>
                      )}
                  </Grid>
                  <Grid item className={classes.gridItens}>
                    <TextField
                      name="addressDetails"
                      label="Additional address details (optional) "
                      margin="normal"
                      type="text"
                      className={classes.textfield}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item className={classes.gridItens}>
                    <TextField
                      name="residentialArea"
                      label="Area"
                      margin="normal"
                      type="text"
                      className={classes.textfield}
                      variant="outlined"
                      inputRef={register({
                        required: true,
                        minLength: 2,
                        maxLength: 30,
                      })}
                    />
                    {errors.residentialArea &&
                      errors.residentialArea.type === "required" && (
                        <p className={classes.error}>
                          Invalid Residential Area
                        </p>
                      )}
                    {errors.residentialArea &&
                      errors.residentialArea.type === "minLength" && (
                        <p className={classes.error}>
                          This field required min lenght of 2
                        </p>
                      )}
                    {errors.residentialArea &&
                      errors.residentialArea.type === "maxLength" && (
                        <p className={classes.error}>Max length exceeded</p>
                      )}
                  </Grid>
                  <Grid item className={classes.gridItens}>
                    <TextField
                      name="city"
                      label="City"
                      margin="normal"
                      type="text"
                      className={classes.textfield}
                      variant="outlined"
                      inputRef={register({
                        required: true,
                        minLength: 3,
                        maxLength: 30,
                      })}
                    />
                    {errors.city && errors.city.type === "required" && (
                      <p className={classes.error}>Invalid City</p>
                    )}
                    {errors.city && errors.city.type === "minLength" && (
                      <p className={classes.error}>
                        This field required min lenght of 3
                      </p>
                    )}
                    {errors.city && errors.city.type === "maxLength" && (
                      <p className={classes.error}>Max length exceeded</p>
                    )}
                  </Grid>
                  <Grid item className={classes.gridItens}>
                    <TextField
                      name="state"
                      label="State"
                      margin="normal"
                      type="text"
                      className={classes.textfield}
                      variant="outlined"
                      inputRef={register({
                        required: true,
                        minLength: 1,
                        maxLength: 30,
                      })}
                    />
                    {errors.state && errors.state.type === "required" && (
                      <p className={classes.error}>Invalid state</p>
                    )}
                    {errors.state && errors.state.type === "minLength" && (
                      <p className={classes.error}>
                        This field required min lenght of 1
                      </p>
                    )}
                    {errors.state && errors.state.type === "maxLength" && (
                      <p className={classes.error}>Max length exceeded</p>
                    )}
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  style={{ marginTop: "15px" }}
                  onClick={() => callNext(2)}
                >
                  Next
                </Button>
              </form>
            </Box>
          </Collapse>
        </Grid>
        <Grid item xs={12} className={classes.gridItem}>
          <Box
            component="div"
            flexDirection="column"
            className={classes.container}
          >
            <IconButton
              className={classes.labelIcon}
              color="primary"
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              disableRipple
              disableFocusRipple
              onClick={() =>
                ExamForm === 0 ? handleExamForm(1) : handleExamForm(0)
              }
            >
              <span className={classes.text}>Exam Information</span>

              {ExamIcon === 0 && (
                <>
                  <IndeterminateCheckBoxIcon
                    className={classes.icon}
                    color="secondary"
                  />
                </>
              )}
              {ExamIcon === 1 && (
                <>
                  <CheckCircleIcon
                    className={classes.icon}
                    style={{ color: "#13ce8b" }}
                  />
                </>
              )}
            </IconButton>
            <IconButton
              className={classes.iconDown}
              color="primary"
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              disableRipple
              disableFocusRipple
              onClick={() =>
                ExamForm === 0 ? handleExamForm(1) : handleExamForm(0)
              }
            >
              <KeyboardArrowDownIcon
                style={{ fontSize: 30 }}
                className={[
                  classes.dropdown,
                  ExamForm === 0
                    ? classes.dropdownOpen
                    : classes.dropdownClosed,
                ].join(" ")}
              />
            </IconButton>
          </Box>
          <Collapse in={ExamForm === 1}>
            <Box display="flex" alignItems="center" flexDirection="column">
              <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <Grid className={classes.gridInside}>
                  <Grid item className={classes.gridItens}>
                    <TextField
                      name="dateRequired"
                      label="Actual Date"
                      value={date}
                      margin="normal"
                      type="date"
                      className={classes.textfield}
                      variant="outlined"
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item className={classes.gridItens}>
                    <TextField
                      name="hourRequired"
                      label="Actual Hour"
                      value={time}
                      margin="normal"
                      type="time"
                      className={classes.textfield}
                      variant="outlined"
                      InputProps={{
                        readOnly: true,
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item className={classes.gridItens}>
                    <TextField
                      name="requestedBy"
                      label="Requested By"
                      margin="normal"
                      type="text"
                      className={classes.textfield}
                      variant="outlined"
                      inputRef={register({
                        required: true,
                        minLength: 3,
                        maxLength: 40,
                      })}
                    />
                    {errors.requestedBy &&
                      errors.requestedBy.type === "required" && (
                        <p className={classes.error}>Invalid Requester</p>
                      )}
                    {errors.requestedBy &&
                      errors.requestedBy.type === "minLength" && (
                        <p className={classes.error}>
                          This field required min lenght of 3
                        </p>
                      )}
                    {errors.requestedBy &&
                      errors.requestedBy.type === "maxLength" && (
                        <p className={classes.error}>Max length exceeded</p>
                      )}
                  </Grid>
                  <Grid item className={classes.gridItens}>
                    <TextField
                      name="agreement"
                      label="Agreement"
                      margin="normal"
                      type="text"
                      className={classes.textfield}
                      variant="outlined"
                      inputRef={register({
                        required: true,
                        minLength: 3,
                        maxLength: 20,
                      })}
                    />
                    {errors.agreement &&
                      errors.agreement.type === "required" && (
                        <p className={classes.error}>Invalid Requester</p>
                      )}
                    {errors.agreement &&
                      errors.agreement.type === "minLength" && (
                        <p className={classes.error}>
                          This field required min lenght of 3
                        </p>
                      )}
                    {errors.agreement &&
                      errors.agreement.type === "maxLength" && (
                        <p className={classes.error}>Max length exceeded</p>
                      )}
                  </Grid>
                  <Grid item className={classes.gridItens}>
                    <TextField
                      name="nextAppointment"
                      label="Next appointment"
                      margin="normal"
                      type="datetime-local"
                      className={classes.textfield}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputRef={register({
                        required: true,
                      })}
                    />
                    {errors.nextAppointment &&
                      errors.nextAppointment.type === "required" && (
                        <p className={classes.error}>
                          Need to insert an Appointment
                        </p>
                      )}
                  </Grid>
                  <Grid item className={classes.gridItens}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel>Doctor</InputLabel>
                      <Controller
                        as={
                          <Select name="doctor" label="Doctor" defaultValue="">
                            <MenuItem value={"Guilherme"}>Guilherme</MenuItem>
                            <MenuItem value={"Jéssica"}>Jéssica</MenuItem>
                            <MenuItem value={"Vitor"}>Vitor</MenuItem>
                          </Select>
                        }
                        name="doctor"
                        control={control}
                        defaultValue=""
                        value={Doctor}
                        onChange={handleChange}
                        rules={{ required: true }}
                      />
                    </FormControl>
                    {errors.doctor && errors.doctor.type === "required" && (
                      <p className={classes.error}>Need to insert a Doctor</p>
                    )}
                  </Grid>

                  <Grid item className={classes.gridItens}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel>Exam</InputLabel>
                      <Controller
                        as={
                          <Select name="doctor" label="Doctor" defaultValue="">
                            <MenuItem value={"Auscultation"}>
                              Auscultation
                            </MenuItem>
                            <MenuItem value={"Autopsy"}>Autopsy</MenuItem>
                            <MenuItem value={"Bronchoscopy"}>
                              Bronchoscopy
                            </MenuItem>
                            <MenuItem value={" Cardiac catheterization"}>
                              Cardiac catheterization
                            </MenuItem>
                            <MenuItem value={"Colposcopy"}>Colposcopy</MenuItem>
                            <MenuItem value={"Endoscopy"}>Endoscopy</MenuItem>
                          </Select>
                        }
                        name="exam"
                        control={control}
                        defaultValue=""
                        value={Exam}
                        onChange={handleChangeExam}
                        rules={{ required: true }}
                      />
                    </FormControl>
                    {errors.exam && errors.exam.type === "required" && (
                      <p className={classes.error}>Need to insert a Exam</p>
                    )}
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  style={{ marginTop: "15px" }}
                  onClick={() => callNext(3)}
                >
                  Next
                </Button>
              </form>
            </Box>
          </Collapse>
        </Grid>
        <Grid item xs={12} container justify="space-around">
          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
            >
              Update Resume
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
}

export default Insert;
