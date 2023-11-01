// src/features/postSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: JSON.parse(localStorage.getItem("posts")) || [
    {
      id: nanoid(),
      username: "Srishti",
      content:
        "Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all",
      timestamp: Date.now(),
      avatarUrl: "https://i.pravatar.cc/40?img=1",
      isFollowing: true
    },
    {
      id: nanoid(),
      username: "Ajeet",
      content: "He was an expert but not in a discipline",
      body:
        "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server",
      timestamp: Date.now(),
      avatarUrl: "https://i.pravatar.cc/40?img=2",
      isFollowing: false
    },
    {
      id: nanoid(),
      username: "Shobhit",
      content:
        "here was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off",
      timestamp: Date.now(),
      avatarUrl: "https://i.pravatar.cc/40?img=3",
      isFollowing: true
    },
    {
      id: nanoid(),
      username: "Naman",
      content: "There are different types of secrets.",
      body:
        "There are different types of secrets. She had held onto plenty of them during her life, but this one was different",
      timestamp: Date.now(),
      avatarUrl: "https://i.pravatar.cc/40?img=4",
      isFollowing: false
    },
    {
      id: nanoid(),
      username: "Mayuri",
      content:
        "The rain and wind abruptly stopped, but the sky still had the gray swirls of storms in the distance. Dave knew this feeling all too well. The calm before the storm. He only had a limited amount of time before all Hell broke loose, but he stopped to admire the calmness. Maybe it would be different this time",
      timestamp: Date.now(),
      avatarUrl: "https://i.pravatar.cc/40?img=5",
      isFollowing: true
    },
    {
      id: nanoid(),
      username: "Mahesh",
      content:
        "The truth is there are a lot of different, legitimate ways to make money. That doesn't mean they are easy and that you won't have to work hard to succeed",
      timestamp: Date.now(),
      avatarUrl: "https://i.pravatar.cc/40?img=6",
      isFollowing: false
    },
    {
      id: nanoid(),
      username: "Marsh",
      content: "He had three simple rules by which he lived.",
      body:
        "He had three simple rules by which he lived. The first was to never eat blue food",
      timestamp: Date.now(),
      avatarUrl: "https://i.pravatar.cc/40?img=7",
      isFollowing: true
    },
    {
      id: nanoid(),
      username: "Smith",
      content:
        "Things aren't going well at all with mom today. She is just a limp noodle and wants to sleep all the time.",
      timestamp: Date.now(),
      avatarUrl: "https://i.pravatar.cc/40?img=8",
      isFollowing: false
    },
    {
      id: nanoid(),
      username: "nikhil",
      content: "Hello, this is the first post!",
      timestamp: Date.now(),
      isFollowing: false,
      avatarUrl: "https://i.pravatar.cc/40?img=9"
    },
    {
      id: nanoid(),
      username: "deepak",
      content: "This is another post.",
      timestamp: Date.now(),
      isFollowing: false,
      avatarUrl: "https://i.pravatar.cc/40?img=10"
    }
  ],
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("posts", JSON.stringify(state));
    },
    updatePost: (state, action) => {
      const { id, content, isFollowing } = action.payload;
      const postToUpdate = state.find((post) => post.id === id);
      if (postToUpdate) {
        postToUpdate.content = content;
        postToUpdate.isFollowing = !isFollowing;
      }
      localStorage.setItem("posts", JSON.stringify(state));
    },
    removePost: (state, action) => {
      const d = state?.filter((user) => {
        if (user.id !== action.payload.id) {
          return user;
        }
      });
      localStorage.setItem("posts", JSON.stringify(d));
      return d;
    }
    // ...other reducers
  }
});

export const { addPost, updatePost, removePost } = postSlice.actions;

export default postSlice.reducer;
