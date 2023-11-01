// src/components/Signup.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
//import { signup } from '../features/user/userSlice';
import { useNavigate } from "react-router-dom";
import { login } from "./userSlice";
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
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isFormValid = () => {
    if (!username || !email || !password) {
      setError("All fields are required");
      return false;
    }

    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return false;
    }

    // You can add more complex password validation if needed
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }

    setError("");
    return true;
  };

  const handleSignup = () => {
    // In a real application, you would perform user registration logic here.
    // For simplicity, let's assume the signup is successful.

    // Dispatch the user info to Redux
    if (isFormValid()) {
      dispatch(login({ username, password }));

      // Redirect to the main page (or any desired page after signup)
      navigate("/login");
    }
  };

  const styles = {
    paper: {
      marginTop: "32px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    },
    avatar: {
      margin: "8px",
      backgroundColor: "#3498db"
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: "16px"
    },
    error: {
      color: "red",
      marginBottom: "10px"
    },
    submit: {
      margin: "16px 0",
      backgroundColor: "#3498db",
      color: "white"
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
          Sign Up
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
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onClick={handleSignup}
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Signup;
