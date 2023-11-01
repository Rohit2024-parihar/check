// src/App.js
import React from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";
import Header from "./Header";
import FollowingPanel from "./FollowingPanel";
import { Container, Grid, CssBaseline, Paper } from "@material-ui/core";

function Home() {
  const containerStyle = {
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh"
  };

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #2196F3 30%, #BBDEFB 90%)"
      }}
    >
      <CssBaseline />
      <Container style={containerStyle}>
        <Grid container spacing={4}>
          <Header />
          <Grid item xs={4}>
            <Paper
              elevation={3}
              style={{ padding: "20px", borderRadius: "8px" }}
            >
              <FollowingPanel />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper
              elevation={3}
              style={{ padding: "20px", borderRadius: "8px" }}
            >
              <PostForm />
              <PostList />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
