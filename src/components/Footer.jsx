import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: "3",
            "& svg": {
              fontSize: "30px",
              cursor: "pointer",
              mr: 2,
              transition: "all 400ms",
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateZ(10px) scale(1.2)",
            },
          }}
        >
          <InstagramIcon />
          {/* <EmailOutlinedIcon /> */}
          <FacebookOutlinedIcon />
          {/* <AddIcCallOutlinedIcon /> */}
          <YouTubeIcon />
          <GitHubIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved © Prakartk Aahaar
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
