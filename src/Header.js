// src/components/Header.js
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Avatar,
  Button
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "./searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTermLocal] = useState("");

  const handleSearch = (e) => {
    setSearchTermLocal(e.target.value);
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#2196F3",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
      }}
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Avatar
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
            style={{ marginRight: "12px" }}
          />
          <Typography
            variant="h6"
            style={{ fontWeight: "bold", color: "white" }}
          >
            Social Media App
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              position: "relative",
              borderRadius: "4px",
              backgroundColor: "white",
              marginRight: "16px"
            }}
          >
            <InputBase
              placeholder="Search..."
              style={{
                padding: "8px",
                width: "150px",
                color: "black",
                fontSize: "14px"
              }}
              inputProps={{ "aria-label": "search" }}
              value={searchTerm}
              onChange={(e) => handleSearch(e)}
            />
            <div
              style={{
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                right: "8px",
                top: "50%",
                transform: "translateY(-50%)"
              }}
            >
              <IconButton
                onClick={handleSearch}
                style={{ padding: "8px", color: "#2196F3" }}
              >
                <SearchIcon />
              </IconButton>
            </div>
          </div>
          <Button color="inherit">
            <Avatar src="https://i.pravatar.cc/40" alt="User Avatar" />
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
