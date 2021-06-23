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
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down("769")]: {
      marginTop: theme.spacing(15),
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
  iconDown: {
    display: "flex",
    justifyContent: "flex-start",
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [data, setData] = useState([
    {
      id: 1,
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
      residencialNumber: "32",
      residentialArea: "Carijos",
      rg: "213123123123",
      state: "MG",
      street: "Rua Lais Franco",
    },
    {
      id: 2,
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
      residencialNumber: "34",
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
      cpf: "07789808630",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Vitor Augusto Silva",
      requestedBy: "Guilherme",
      residencialNumber: "34",
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
      cpf: "07789808630",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "OddieMaster",
      requestedBy: "Guilherme",
      residencialNumber: "34",
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
      cpf: "07789808630",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Jessiquinha",
      requestedBy: "Guilherme",
      residencialNumber: "34",
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
      cpf: "07789808630",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Larissa Maria Abreu Romualdo",
      requestedBy: "Guilherme",
      residencialNumber: "34",
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
      cpf: "07789808630",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Craftmoon",
      requestedBy: "Guilherme",
      residencialNumber: "34",
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
      cpf: "07789808630",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Roomy",
      requestedBy: "Guilherme",
      residencialNumber: "34",
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
      cpf: "07789808630",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "César Fonseca",
      requestedBy: "Guilherme",
      residencialNumber: "34",
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
      cpf: "07789808630",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Ronan do Grand Chase",
      requestedBy: "Guilherme",
      residencialNumber: "34",
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
      cpf: "07789808630",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Sora",
      requestedBy: "Guilherme",
      residencialNumber: "34",
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
      cpf: "07789808630",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Aqua",
      requestedBy: "Guilherme",
      residencialNumber: "34",
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
      cpf: "07789808630",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Young Xehanort",
      requestedBy: "Guilherme",
      residencialNumber: "34",
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
      cpf: "07789808630",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Roxas",
      requestedBy: "Guilherme",
      residencialNumber: "34",
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
      cpf: "07789808630",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Goku",
      requestedBy: "Guilherme",
      residencialNumber: "34",
      residentialArea: "Carijos",
      rg: "21312312315",
      state: "MG",
      street: "Rua Carijós, 391",
    },
    {
      id: 16,
      agreement: "GEAP",
      bdate: "2021-06-05",
      cellphone: "3199821749",
      city: "Conselheiro Lafaiete",
      cpf: "07789808630",
      doctor: "Guilherme",
      email: "jessicaroziane@gmail.com",
      exam: "Bronchoscopy",
      nextAppointment: "2021-07-02T18:52",
      patient: "Midorya",
      requestedBy: "Guilherme",
      residencialNumber: "34",
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
    if ( InputFilter !== "") {
      return rows.filter(
        (row) =>
        row.patient.toLowerCase().indexOf(InputFilter.toLowerCase()) > -1 
      );
    } else return rows;
  }

  console.log(data[0].cpf);
  const filteredData = searchItem(data);
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
              className={classes.iconDown}
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
                    className={classes.textfield}
                    variant="outlined"
                  />
                </Grid>
                <Grid item className={classes.gridItens}>
                  <TextField
                    name="cellphone"
                    label="Cellphone"
                    margin="normal"
                    type="number"
                    className={classes.textfield}
                    variant="outlined"
                  />
                </Grid>
                <Grid item className={classes.gridItens}>
                  <TextField
                    name="cpf"
                    label="CPF, numbers only"
                    margin="normal"
                    type="text"
                    className={classes.textfield}
                    variant="outlined"
                  />
                </Grid>
                <Grid item className={classes.gridItens}>
                  <TextField
                    name="rg"
                    label="RG"
                    margin="normal"
                    type="text"
                    className={classes.textfield}
                    variant="outlined"
                  />
                </Grid>
                <Grid item className={classes.gridItens}>
                  <TextField
                    name="email"
                    label="Email"
                    margin="normal"
                    type="email"
                    className={classes.textfield}
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
                    className={classes.textfield}
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
                      <Button variant="outlined" color="primary" size="small">
                        Details
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
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
