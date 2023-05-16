import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction, ResetLogin } from "../../redux/actions/LoginAction";
import { Alert, Backdrop, CircularProgress, Snackbar } from "@mui/material";

let theme = createTheme();
theme = responsiveFontSizes(theme);

function SignIn() {
  const { isLoading, data, error } = useSelector(
    (state) => state?.LoginReducer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [toaster, setToaster] = useState({ state: false, message: "" });

  useEffect(() => {
    if (!!data) {
      navigate("/");
    }
  }, [data, navigate]);

  useEffect(() => {
    if (!!error?.length) {
      setToaster({ state: true, message: error });
      setTimeout(() => {
        dispatch(ResetLogin());
      }, 1000);
    }
  }, [dispatch, error]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      LoginAction({
        email: data.get("email"),
        password: data.get("password"),
      })
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 18,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/register"} component={RouterLink} variant="body2">
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Snackbar
          open={toaster?.state}
          autoHideDuration={5000}
          onClose={() => setToaster({ state: false, message: "" })}
        >
          <Alert
            variant="filled"
            onClose={() => setToaster({ state: false, message: "" })}
            severity="error"
            sx={{ width: "100%" }}
          >
            {toaster?.message}
          </Alert>
        </Snackbar>

        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
