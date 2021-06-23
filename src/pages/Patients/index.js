import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  InputBase,
  Box,
  IconButton,
  Collapse,
  Button,
  TextField,
  Card,
  TablePagination,
  DialogActions,
  DialogContent,
  Dialog,
  DialogTitle,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  DialogContentText,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import { useForm, Controller } from "react-hook-form";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down("769")]: {
      marginTop: theme.spacing(15),
    },
    formControl: {
      margin: theme.spacing(1),
      padding: "10px",
      minWidth: 180,
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
    },
  },
  button: {
    background: "rgb(19, 206, 139)",
  },
  filterBar: {
    width: "100%",
    height: 60,
    display: "flex",
    alignItems: "center",
    fontFamily: "'Lato', sans-serif",
    textAlign: "end",
  },
  margin: {
    boxShadow: "0px 0px 2px 0.2px rgba(0,0,0,0.42)",
    width: 200,
    height: 45,
    borderRadius: 4,
    margin: 7,
  },
  text: {
    fontFamily: "'Lato', sans-serif",
    fontSize: "22px",
    fontWeight: "700",
    color: "#6a6a6a",
    letterSpacing: ".5px",
  },
  iconFilter: {
    display: "flex",
    justifyContent: "flex-start",
    flexGrow: 1,
    "&:hover": {
      backgroundColor: "unset !important;",
    },
    padding: "0 0 0 10px !important",
  },
  iconClose: {
    display: "flex",
    justifyContent: "flex-end",
    flexGrow: 1,
    "&:hover": {
      backgroundColor: "unset !important;",
    },
    padding: "0 0 0 10px !important",
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

  gridInside: {
    display: "grid",
    gridColumnGap: "3%",
    gridRowGap: "24px",
    width: "100%",

    gridTemplateColumns: "auto auto auto auto",
    [theme.breakpoints.down("426")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  title: {
    display: "flex",
    color: "#6a6a6a",
    fontSize: "22px",
    fontFamily: "'Lato', sans-serif",
    fontWeight: "700",
    letterSpacing: ".5px",
  },
  gridItens: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },

  pagination: {
    background: "white",
  },

  gridItem: {
    background: "rgb(255,255,255,0.97)",
    padding: "20px !important",
    marginBottom: "20px",
    boxShadow:
      "0px 1px 3px 0px rgb(0 0 0 / 25%), 0px 1px 1px 0px rgb(0 0 0 / 18%), 0px 2px 1px -1px rgb(0 0 0 / 14%)",
  },
  grid: {
    background: "rgb(248,248,255, 0.1)",
    padding: "15px",
    margin: "15px",
    display: "block",
    width: "96%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  CardContent: {
    width: "30ch",
    padding: "16px 16px 2px 16px;",
  },
  detailButton: {
    justifyContent: "flex-end",
  },
  padding: {
    padding: "10px 0px 15px 20px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 0px 15px 25px",
    },
    [theme.breakpoints.down("350")]: {
      padding: "10px 0px 15px 0px !important",
    },
  },
}));

function Patients() {
  const classes = useStyles();
  const [FilterForm, setFilterForm] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(12);
  const [InputFilter, setInputFilter] = useState("");
  const [open, setOpen] = useState(false);
  const [Delete, setDelete] = useState(false);
  const [Control, setControl] = useState(1);
  const [ReadOnly, setReadOnly] = useState(false);
  const { handleSubmit, register, control, errors } = useForm({});
  const [Doctor, setDoctor] = useState("");
  const [Exam, setExam] = useState("");
  const handleChange = (event) => {
    setDoctor(event.target.value);
  };
  const handleChangeExam = (event) => {
    setExam(event.target.value);
  };

  const handleChangeReadOnly = (value) => {
    setReadOnly(value);
    console.log("clicou");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [data, setData] = useState([
    {
      id: 0,
      agreement: "GEAP",
      bdate: "1995-04-03",
      cellphone: "3194962286",
      city: "Conselheiro Lafaiete",
      cpf: "116.908.496-65",
      doctor: "Jéssica",
      email: "romualdo.gui@gmail.com",
      exam: "Endoscopy",
      nextAppointment: "2021-06-25T21:51",
      patient: "Guilherme Eduardo Abreu Romualdo",
      requestedBy: "Larissa",
      residentialNumber: "32",
      residentialArea: "Carijos",
      rg: "213123123123",
      state: "MG",
      street: "Rua Lais Franco",
    },
    {
      id: 1,
      agreement: "GEAP",
      bdate: "2021-06-05",
      cellphone: "3199821749",
      city: "Conselheiro Lafaiete",
      cpf: "07789808630",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Jéssica Roziane da Silva",
      requestedBy: "Guilherme",
      residentialNumber: "34",
      residentialArea: "Carijos",
      rg: "21312312315",
      state: "MG",
      street: "Rua Carijós, 391",
    },
    {
      id: 2,
      agreement: "GEAP",
      bdate: "2021-06-05",
      cellphone: "3199821749",
      city: "Conselheiro Lafaiete",
      cpf: "1",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Vitor Augusto Silva",
      requestedBy: "Guilherme",
      residentialNumber: "34",
      residentialArea: "Carijos",
      rg: "21312312315",
      state: "MG",
      street: "Rua Carijós, 391",
    },
    {
      id: 3,
      agreement: "GEAP",
      bdate: "2021-06-05",
      cellphone: "3199821749",
      city: "Conselheiro Lafaiete",
      cpf: "2",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "OddieMaster",
      requestedBy: "Guilherme",
      residentialNumber: "34",
      residentialArea: "Carijos",
      rg: "21312312315",
      state: "MG",
      street: "Rua Carijós, 391",
    },
    {
      id: 4,
      agreement: "GEAP",
      bdate: "2021-06-05",
      cellphone: "3199821749",
      city: "Conselheiro Lafaiete",
      cpf: "3",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Jessiquinha",
      requestedBy: "Guilherme",
      residentialNumber: "34",
      residentialArea: "Carijos",
      rg: "21312312315",
      state: "MG",
      street: "Rua Carijós, 391",
    },
    {
      id: 5,
      agreement: "GEAP",
      bdate: "2021-06-05",
      cellphone: "3199821749",
      city: "Conselheiro Lafaiete",
      cpf: "4",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Larissa Maria Abreu Romualdo",
      requestedBy: "Guilherme",
      residentialNumber: "34",
      residentialArea: "Carijos",
      rg: "21312312315",
      state: "MG",
      street: "Rua Carijós, 391",
    },
    {
      id: 6,
      agreement: "GEAP",
      bdate: "2021-06-05",
      cellphone: "3199821749",
      city: "Conselheiro Lafaiete",
      cpf: "5",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Craftmoon",
      requestedBy: "Guilherme",
      residentialNumber: "34",
      residentialArea: "Carijos",
      rg: "21312312315",
      state: "MG",
      street: "Rua Carijós, 391",
    },
    {
      id: 7,
      agreement: "GEAP",
      bdate: "2021-06-05",
      cellphone: "3199821749",
      city: "Conselheiro Lafaiete",
      cpf: "6",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Roomy",
      requestedBy: "Guilherme",
      residentialNumber: "34",
      residentialArea: "Carijos",
      rg: "21312312315",
      state: "MG",
      street: "Rua Carijós, 391",
    },
    {
      id: 8,
      agreement: "GEAP",
      bdate: "2021-06-05",
      cellphone: "3199821749",
      city: "Conselheiro Lafaiete",
      cpf: "7",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "César Fonseca",
      requestedBy: "Guilherme",
      residentialNumber: "34",
      residentialArea: "Carijos",
      rg: "21312312315",
      state: "MG",
      street: "Rua Carijós, 391",
    },
    {
      id: 9,
      agreement: "GEAP",
      bdate: "2021-06-05",
      cellphone: "3199821749",
      city: "Conselheiro Lafaiete",
      cpf: "8",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Ronan do Grand Chase",
      requestedBy: "Guilherme",
      residentialNumber: "34",
      residentialArea: "Carijos",
      rg: "21312312315",
      state: "MG",
      street: "Rua Carijós, 391",
    },
    {
      id: 10,
      agreement: "GEAP",
      bdate: "2021-06-05",
      cellphone: "3199821749",
      city: "Conselheiro Lafaiete",
      cpf: "9",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Sora",
      requestedBy: "Guilherme",
      residentialNumber: "34",
      residentialArea: "Carijos",
      rg: "21312312315",
      state: "MG",
      street: "Rua Carijós, 391",
    },
    {
      id: 11,
      agreement: "GEAP",
      bdate: "2021-06-05",
      cellphone: "3199821749",
      city: "Conselheiro Lafaiete",
      cpf: "10",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Aqua",
      requestedBy: "Guilherme",
      residentialNumber: "34",
      residentialArea: "Carijos",
      rg: "21312312315",
      state: "MG",
      street: "Rua Carijós, 391",
    },
    {
      id: 12,
      agreement: "GEAP",
      bdate: "2021-06-05",
      cellphone: "3199821749",
      city: "Conselheiro Lafaiete",
      cpf: "11",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Young Xehanort",
      requestedBy: "Guilherme",
      residentialNumber: "34",
      residentialArea: "Carijos",
      rg: "21312312315",
      state: "MG",
      street: "Rua Carijós, 391",
    },
    {
      id: 13,
      agreement: "GEAP",
      bdate: "2021-06-05",
      cellphone: "3199821749",
      city: "Conselheiro Lafaiete",
      cpf: "12",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Roxas",
      requestedBy: "Guilherme",
      residentialNumber: "34",
      residentialArea: "Carijos",
      rg: "21312312315",
      state: "MG",
      street: "Rua Carijós, 391",
    },
    {
      id: 14,
      agreement: "GEAP",
      bdate: "2021-06-05",
      cellphone: "3199821749",
      city: "Conselheiro Lafaiete",
      cpf: "13",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Goku",
      requestedBy: "Guilherme",
      residentialNumber: "34",
      residentialArea: "Carijos",
      rg: "21312312315",
      state: "MG",
      street: "Rua Carijós, 391",
    },
    {
      id: 15,
      agreement: "GEAP",
      bdate: "2021-06-05",
      cellphone: "3199821749",
      city: "Conselheiro Lafaiete",
      cpf: "14",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Midorya",
      requestedBy: "Guilherme",
      residentialNumber: "34",
      residentialArea: "Carijos",
      rg: "21312312315",
      state: "MG",
      street: "Rua Carijós, 391",
    },
  ]);
  function handleFilterForm(value) {
    setFilterForm(value);
  }

  function searchItem(rows) {
    if (InputFilter !== "") {
      return rows.filter(
        (row) =>
          row.cpf.toLowerCase().indexOf(InputFilter.toLowerCase()) > -1 ||
          row.patient.indexOf(InputFilter) > -1
      );
    } else return rows;
  }
  const filteredData = searchItem(data);

  const handleClickOpen = (value) => {
    setControl(value);
    console.log(value);
    console.log(data[value].patient);
    setOpen(true);
  };

  const handleClose = () => {
    setReadOnly(false);
    setOpen(false);
    setDelete(false);
  };

  const handleOpenDelete = () => {
    setDelete(true);
  };
  const handleCloseDelete = () => {
    setDelete(false);
  };

  function onSubmit(formData) {
    console.log(formData);
  }
  return (
    <>
      <Box className={classes.box} />
      <Grid container spacing={10} direction="row" className={classes.grid}>
        <Grid item xs={12} className={classes.gridItem}>
          <Box className={classes.filterBar}>
            <InputBase
              className={classes.margin}
              value={InputFilter}
              onChange={(e) => setInputFilter(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon fontSize="large" color="action" />
                </InputAdornment>
              }
            />

            <IconButton
              className={classes.iconFilter}
              color="primary"
              aria-label="more"
              aria-controls="long-menu"
              aria-haspopup="true"
              disableRipple
              disableFocusRipple
              onClick={() =>
                FilterForm === 0 ? handleFilterForm(1) : handleFilterForm(0)
              }
            >
              <span className={classes.text}>Filters</span>
              <KeyboardArrowDownIcon
                style={{ fontSize: 22 }}
                className={[
                  classes.dropdown,
                  FilterForm === 0
                    ? classes.dropdownOpen
                    : classes.dropdownClosed,
                ].join(" ")}
              />
            </IconButton>
          </Box>
          <Collapse in={FilterForm === 1}>
            <Box display="flex" alignItems="flex-end" flexDirection="column">
              <Grid className={classes.gridInside}>
                <Grid item className={classes.gridItens}>
                  <TextField
                    label="Name"
                    name="patient"
                    margin="normal"
                    type="text"
                    variant="outlined"
                  />
                </Grid>
                <Grid item className={classes.gridItens}>
                  <TextField
                    name="cellphone"
                    label="Cellphone"
                    margin="normal"
                    type="number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item className={classes.gridItens}>
                  <TextField
                    name="cpf"
                    label="CPF, numbers only"
                    margin="normal"
                    type="text"
                    variant="outlined"
                  />
                </Grid>
                <Grid item className={classes.gridItens}>
                  <TextField
                    name="rg"
                    label="RG"
                    margin="normal"
                    type="text"
                    variant="outlined"
                  />
                </Grid>
                <Grid item className={classes.gridItens}>
                  <TextField
                    name="email"
                    label="Email"
                    margin="normal"
                    type="email"
                    variant="outlined"
                  />
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
                    variant="outlined"
                  />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                style={{ marginTop: "15px" }}
                onClick={() => handleFilterForm(0)}
              >
                Apply Filters
              </Button>
            </Box>
          </Collapse>
        </Grid>
        <Box display="flex" alignItems="flex-start" flexDirection="column">
          <Grid
            container
            spacing={3}
            className={classes.padding}
            justify="flex-start"
          >
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <Grid key={row.id} item xs={"auto"} sm={"auto"}>
                  <Card>
                    <CardContent className={classes.CardContent}>
                      <Typography gutterBottom variant="h6" component="h2">
                        Name
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {row.patient}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h2">
                        Exam Date
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {row.nextAppointment}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h2">
                        Exam
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {row.exam}
                      </Typography>
                    </CardContent>
                    <CardActions className={classes.detailButton}>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        onClick={() => handleClickOpen(row.id)}
                      >
                        Details
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            <Dialog
              open={open}
              fullWidth
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle
                disableTypography
                className={classes.title}
                id="form-dialog-title"
              >
                <span>Patient Information</span>
                <IconButton
                  className={classes.iconClose}
                  aria-label="close"
                  onClick={handleClose}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>

              {ReadOnly === false && (
                <>
                  <DialogContent>
                    <TextField
                      id="patient"
                      label="Patient"
                      fullWidth
                      variant="filled"
                      value={data[Control].patient}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="cellphone"
                      label="Cellphone"
                      margin="normal"
                      type="number"
                      variant="filled"
                      value={data[Control].cellphone}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="cpf"
                      label="CPF"
                      margin="normal"
                      type="text"
                      variant="filled"
                      value={data[Control].cpf}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="email"
                      label="Email"
                      margin="normal"
                      type="email"
                      variant="filled"
                      value={data[Control].cpf}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="bdate"
                      label="Birth Date"
                      margin="normal"
                      type="text"
                      value={data[Control].bdate}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="filled"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="street"
                      label="Street"
                      margin="normal"
                      variant="filled"
                      value={data[Control].street}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="residentialNumber"
                      label="Residential Number"
                      margin="normal"
                      type="text"
                      variant="filled"
                      value={data[Control].residentialNumber}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="addressDetails"
                      label="Additional address details"
                      margin="normal"
                      type="text"
                      variant="filled"
                      value={data[Control].addressDetails}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="residentialArea"
                      label="Area"
                      margin="normal"
                      type="text"
                      variant="filled"
                      value={data[Control].residentialArea}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="city"
                      label="City"
                      margin="normal"
                      type="text"
                      variant="filled"
                      value={data[Control].city}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="state"
                      label="State"
                      margin="normal"
                      type="text"
                      variant="filled"
                      value={data[Control].state}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="requestedBy"
                      label="Requested By"
                      margin="normal"
                      type="text"
                      variant="filled"
                      value={data[Control].requestedBy}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="agreement"
                      label="Agreement"
                      margin="normal"
                      type="text"
                      variant="filled"
                      value={data[Control].agreement}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="nextAppointment"
                      label="Next appointment"
                      margin="normal"
                      type="text"
                      variant="filled"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={data[Control].nextAppointment}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="doctor"
                      label="Doctor"
                      margin="normal"
                      type="text"
                      variant="filled"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={data[Control].doctor}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      id="exam"
                      label="Exam"
                      margin="normal"
                      type="text"
                      variant="filled"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={data[Control].exam}
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() => handleChangeReadOnly(true)}
                      variant="contained"
                      color="primary"
                      startIcon={<EditIcon />}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<DeleteOutlinedIcon />}
                      onClick={handleOpenDelete}
                    >
                      Delete
                    </Button>
                    <Dialog
                      open={Delete}
                      onClose={handleCloseDelete}
                      aria-labelledby="responsive-dialog-title"
                    >
                      <DialogTitle id="responsive-dialog-title">
                        {"Are you shure?"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText>
                          This action will delete all information from this
                          patient!
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          autoFocus
                          onClick={handleCloseDelete}
                          color="primary"
                        >
                          Cancel
                        </Button>
                        <Button color="primary" autoFocus>
                          Delete
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </DialogActions>
                </>
              )}
              {ReadOnly === true && (
                <>
                  <DialogContent>
                    <form
                      id="formData"
                      className={classes.form}
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <TextField
                        label="Name"
                        name="patient"
                        margin="normal"
                        defaultValue={data[Control].patient}
                        type="text"
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

                      <TextField
                        name="cellphone"
                        label="Cellphone"
                        margin="normal"
                        type="number"
                        defaultValue={data[Control].cellphone}
                        variant="outlined"
                        inputRef={register({
                          required: true,
                          minLength: 8,
                          maxLength: 10,
                        })}
                      />
                      {errors.cellphone &&
                        errors.cellphone.type === "required" && (
                          <>
                            <p className={classes.error}>Invalid Cellphone</p>
                          </>
                        )}
                      {errors.cellphone &&
                        errors.cellphone.type === "minLength" && (
                          <>
                            <p className={classes.error}>
                              This field required min lenght of 8
                            </p>
                          </>
                        )}
                      {errors.cellphone &&
                        errors.cellphone.type === "maxLength" && (
                          <>
                            <p className={classes.error}>Max length exceeded</p>
                          </>
                        )}

                      <TextField
                        name="cpf"
                        label="CPF, numbers only"
                        margin="normal"
                        defaultValue={data[Control].cpf}
                        type="text"
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

                      <TextField
                        name="rg"
                        label="RG"
                        margin="normal"
                        type="text"
                        defaultValue={data[Control].rg}
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

                      <TextField
                        name="email"
                        label="Email"
                        margin="normal"
                        type="email"
                        defaultValue={data[Control].email}
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

                      <TextField
                        name="bdate"
                        label="Birth Date"
                        margin="normal"
                        type="date"
                        defaultValue={data[Control].bdate}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        inputRef={register({
                          required: true,
                          minLength: 5,
                        })}
                      />
                      {errors.bdate && errors.bdate.type === "required" && (
                        <>
                          <p className={classes.error}>Invalid Date</p>
                        </>
                      )}

                      <TextField
                        name="street"
                        label="Street"
                        margin="normal"
                        defaultValue={data[Control].street}
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

                      <TextField
                        name="residentialNumber"
                        label="Residential Number"
                        margin="normal"
                        type="text"
                        defaultValue={data[Control].residentialNumber}
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

                      <TextField
                        name="addressDetails"
                        label="Additional address details (optional) "
                        margin="normal"
                        type="text"
                        defaultValue={data[Control].addressDetails}
                        variant="outlined"
                      />

                      <TextField
                        name="residentialArea"
                        label="Area"
                        margin="normal"
                        type="text"
                        defaultValue={data[Control].residentialArea}
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

                      <TextField
                        name="city"
                        label="City"
                        margin="normal"
                        type="text"
                        defaultValue={data[Control].city}
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

                      <TextField
                        name="state"
                        label="State"
                        margin="normal"
                        type="text"
                        defaultValue={data[Control].state}
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

                      <TextField
                        name="requestedBy"
                        label="Requested By"
                        margin="normal"
                        type="text"
                        defaultValue={data[Control].requestedBy}
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

                      <TextField
                        name="agreement"
                        label="Agreement"
                        margin="normal"
                        type="text"
                        defaultValue={data[Control].agreement}
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

                      <TextField
                        name="nextAppointment"
                        label="Next appointment"
                        margin="normal"
                        type="datetime-local"
                        defaultValue={data[Control].nextAppointment}
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

                      <FormControl
                        variant="outlined"
                        className={classes.formControl}
                        margin="normal"
                        defaultValue={data[Control].doctor}
                      >
                        <InputLabel>Doctor</InputLabel>
                        <Controller
                          as={
                            <Select name="doctor" label="Doctor">
                              <MenuItem value={"Guilherme"}>Guilherme</MenuItem>
                              <MenuItem value={"Jéssica"}>Jéssica</MenuItem>
                              <MenuItem value={"Vitor"}>Vitor</MenuItem>
                            </Select>
                          }
                          name="doctor"
                          control={control}
                          defaultValue={data[Control].doctor}
                          value={Doctor}
                          onChange={handleChange}
                          rules={{ required: true }}
                        />
                      </FormControl>
                      {errors.doctor && errors.doctor.type === "required" && (
                        <p className={classes.error}>Need to insert a Doctor</p>
                      )}

                      <FormControl
                        margin="normal"
                        variant="outlined"
                        className={classes.formControl}
                      >
                        <InputLabel>Exam</InputLabel>
                        <Controller
                          as={
                            <Select name="exam" label="Exam">
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
                              <MenuItem value={"Colposcopy"}>
                                Colposcopy
                              </MenuItem>
                              <MenuItem value={"Endoscopy"}>Endoscopy</MenuItem>
                            </Select>
                          }
                          name="exam"
                          control={control}
                          defaultValue={data[Control].exam}
                          value={Exam}
                          onChange={handleChangeExam}
                          rules={{ required: true }}
                        />
                      </FormControl>
                      {errors.exam && errors.exam.type === "required" && (
                        <p className={classes.error}>Need to insert a Exam</p>
                      )}
                    </form>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      variant="outlined"
                      color="primary"
                      type="submit"
                      form="formData"
                    >
                      Submit
                    </Button>

                    <Button
                      onClick={() => handleChangeReadOnly(false)}
                      variant="outlined"
                      color="secondary"
                    >
                      Cancel
                    </Button>
                  </DialogActions>
                </>
              )}
            </Dialog>
          </Grid>
          <TablePagination
            rowsPerPageOptions={[12, 18, 24]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            className={classes.pagination}
          />
        </Box>
      </Grid>
    </>
  );
}

export default Patients;
