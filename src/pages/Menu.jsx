import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { MenuList } from "../Data/Data";

const Menu = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {MenuList.map((menu, index) => (
        <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }} key={index}>
          <CardActionArea>
            <CardMedia
              sx={{ minHeight: "400px" }}
              component="img"
              src={menu.image}
              alt={menu.name}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom component="div">
                {menu.name}
              </Typography>
              <Typography variant="body2">{menu.description}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default Menu;
