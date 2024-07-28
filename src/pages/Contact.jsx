import React from "react";
import {
  TableContainer,
  Table,
  Box,
  Paper,
  Typography,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@mui/material";
import SupportAgentSharpIcon from "@mui/icons-material/SupportAgentSharp";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const Contact = () => {
  console.log("Contact component rendered");
  return (
    <>
      <Box
        sx={{
          my: 5,
          ml: 10,
          "& h4": { fontWeight: "bold", mb: 2 },
        }}
      >
        <Typography variant="h4">Contact Us</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          impedit laborum cum a possimus quae quas. Adipisci quaerat blanditiis
          voluptatem mollitia illum excepturi, quae quas culpa unde quisquam,
          quo dignissimos.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: { xs: "300px", sm: "600px" },
          ml: 10,
          "@media(min-width:450px,max-width:600px)": {
            width: "300px",
          },
          "@media(min-width:400,max-width:450px)": {
            width: "200px",
          },
          "@media(max-width:400px)": {
            width: "170px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentSharpIcon sx={{ color: "red", pt: 1 }} /> 123456
                  (toll Free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  prakartikAhar@123gamil.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> help@myrest.com
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Contact;
