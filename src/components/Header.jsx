import React, { useState } from "react";
import {
  Toolbar,
  AppBar,
  Box,
  Typography,
  IconButton,
  Drawer,
} from "@mui/material";
import SpaTwoToneIcon from "@mui/icons-material/SpaTwoTone";
import { Link } from "react-router-dom";
import styles from "../../src/styles/HeaderFile.module.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

const Header = () => {
  // this is used to add the functionality in the drawer
  const [mobileOpen, setMobileOpen] = useState(false);
  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"green"}
        variant={"h6"}
        component={"div"}
        sx={{ flexGrow: 1 }}
      >
        <SpaTwoToneIcon />
        Prakratik Aahar
      </Typography>

      <ul className={styles.MobileNavigationMenu}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar
          component={"nav"}
          sx={{ bgcolor: "black", marginBottom: 0, paddingBottom: 0 }}
        >
          <Toolbar>
            {/* This is the drawer icon  and displayed only on the small screns we will usse usestate to add the functionality in the drawer */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuRoundedIcon />
            </IconButton>
            {/* {" toolbar is used to fix the size problem"} */}
            <Typography
              color={"green"}
              variant={"h6"}
              component={"div"}
              sx={{ flexGrow: 1 }}
            >
              <SpaTwoToneIcon />
              Prakratik Aahar
            </Typography>

            {/* the button links will disappear when we go on the smaller devices this for the responsiveness of the website */}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className={styles.NavigationMenu}>
                <li>
                  <Link to={"/"} className={styles.link}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/menu"} className={styles.link}>
                    Menu
                  </Link>
                </li>
                <li>
                  <Link to={"/about"} className={styles.link}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to={"/contact"} className={styles.link}>
                    Contact
                  </Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component={"nav"}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{ display: { xs: "block", sm: "none" }, zIndex: 1300 }}
            PaperProps={{
              sx: {
                backgroundColor: "white",
                color: "black",
                width: 250,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Toolbar />
      </Box>
    </>
  );
};

export default Header;
