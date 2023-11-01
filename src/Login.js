// src/components/Login.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./userSlice";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Avatar,
  CssBaseline
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username: user, password: pass } = useSelector(
    (state) => state.user.userInfo
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  console.log(user, pass);
  const handleLogin = () => {
    const validUsername = user;
    const validPassword = pass;

    if (username === validUsername && password === validPassword) {
      // Dispatch the user info to Redux
      dispatch(login({ username }));

      // Redirect to the main page
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  const styles = {
    paper: {
      marginTop: "8px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    },
    avatar: {
      margin: "8px",
      backgroundColor: "#4caf50"
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: "16px"
    },
    submit: {
      margin: "16px 0",
      backgroundColor: "#4caf50",
      color: "white"
    },
    error: {
      color: "red",
      marginBottom: "10px"
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} style={styles.paper}>
        <Avatar style={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form style={styles.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p style={styles.error}>{error}</p>}
          <Button
            type="button"
            fullWidth
            variant="contained"
            style={styles.submit}
            onClick={handleLogin}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
