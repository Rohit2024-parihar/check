// src/components/PostForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postSlice";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Avatar,
  Grid
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const PostForm = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const { username } = useSelector((state) => state.user.userInfo);

  const handleSubmit = () => {
    dispatch(
      addPost({
        id: Date.now(),
        timestamp: Date.now(),
        content,
        username,
        author: true,
        isFollowing: true
      })
    );
    setContent("");
  };

  return (
    <Card
      style={{
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        marginBottom: "16px",
        marginTop: "16px"
      }}
    >
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar style={{ backgroundColor: "#1976D2" }}>
              {username.slice(0, 1).toUpperCase()}
            </Avatar>
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              label={`What's on your mind, ${username}?`}
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Button
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              fullWidth
              onClick={handleSubmit}
            >
              Post
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PostForm;
