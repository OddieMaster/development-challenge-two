import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm } from "react-hook-form";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#6CB26C",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "#ffffff",
    fontWeight: "bold",
  },
  error: {
    color: "red",
  },
  checkBox: {
    color: "blue",
    fontSize: "13",
  },
}));

function Form(props) {
  const { handleSubmit, register, errors } = useForm({});

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  function onSubmit(formData) {
    console.log(formData);
  }
  const [checked, setChecked] = React.useState(false);
  console.log(errors);
  const classes = useStyles();
  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <div className={classes.paper}>
          <LocalHospitalIcon style={{ fontSize: 60 }} color="primary" />
          <Typography component="h1" variant="h4">
            Insert Patient Form
          </Typography>

          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  name="patient"
                  label="Name"
                  fullWidth
                  InputLabelProps={{ style: { fontSize: 12 } }}
                  variant="outlined"
                  inputRef={register({
                    required: true,
                    minLength: 2,
                  })}
                ></TextField>
                {errors.patient && errors.patient.type === "required" && (
                  <p className={classes.error}>Invalid Name</p>
                )}
                {errors.patient && errors.patient.type === "minLength" && (
                  <p className={classes.error}>
                    This field required min lenght of 2
                  </p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="date"
                  name="bdate"
                  label="Birth Date"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputRef={register({
                    required: true,
                  })}
                ></TextField>
                {errors.bdate && errors.bdate.type === "required" && (
                  <p className={classes.error}>Invalid Date</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  name="email"
                  label="E-mail Address"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ style: { fontSize: 12 } }}
                  inputRef={register({
                    required: true,
                  })}
                ></TextField>
                {errors.email && errors.email.type === "required" && (
                  <p className={classes.error}>Invalid E-mail</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  name="cpf"
                  label="CPF"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ style: { fontSize: 12 } }}
                  inputRef={register({
                    required: true,
                  })}
                ></TextField>
                {errors.cpf && errors.cpf.type === "required" && (
                  <p className={classes.error}>Invalid CPF</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  name="telephone"
                  label="Tel"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ style: { fontSize: 12 } }}
                  inputRef={register({
                    required: true,
                  })}
                ></TextField>
                {errors.telephone && errors.telephone.type === "required" && (
                  <p className={classes.error}>Invalid Telephone</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      className={classes.checkBox}
                      checked={checked}
                      onChange={handleChange}
                      name="checked"
                      color="primary"
                    />
                  }
                  label={
                    <span style={{ fontSize: "12px" }}>
                      Want to add a description?
                    </span>
                  }
                />
              </Grid>
              {checked === true ? (
                <>
                  <Grid item xs={12}>
                    <TextField
                      type="text"
                      name="description"
                      label="Insert the description here"
                      variant="outlined"
                      fullWidth
                      InputLabelProps={{ style: { fontSize: 12 } }}
                      inputRef={register({
                        required: true,
                      })}
                    ></TextField>
                    {errors.description &&
                      errors.description.type === "required" && (
                        <p className={classes.error}>
                          You choose to add a description, please insert here
                        </p>
                      )}
                  </Grid>
                </>
              ) : null}
            </Grid>

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              type="submit"
            >
              Register Patient
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}

export default Form;
