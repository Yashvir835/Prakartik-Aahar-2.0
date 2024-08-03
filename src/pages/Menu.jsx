import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { MenuList } from "../Data/Data";
import { styled } from "@mui/system";

const SliderContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  padding: "16px",
  margin: "20px",
  backgroundColor: "#f5f5f5",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});

const StyledCard = styled(Card)({
  minWidth: "300px",
  maxWidth: "300px",
  margin: "16px",
  transition: "transform 0.3s ease-in-out",
  transformStyle: "preserve-3d",
  "&:hover": {
    transform: "scale(1.05) rotateY(10deg)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
});

const ArrowButton = styled(IconButton)({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 1,
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
});

const Menu = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 images by default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <SliderContainer>
      <ArrowButton onClick={handlePrev} style={{ left: 0 }}>
        <ArrowBackIos />
      </ArrowButton>
      <Box sx={{ width: "100%" }}>
        <Slider ref={sliderRef} {...settings}>
          {MenuList.map((menu, index) => (
            <StyledCard key={index}>
              <CardActionArea>
                <CardMedia
                  sx={{ height: "200px" }}
                  component="img"
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {menu.name}
                  </Typography>
                  <Typography variant="body2">{menu.description}</Typography>
                </CardContent>
              </CardActionArea>
            </StyledCard>
          ))}
        </Slider>
      </Box>
      <ArrowButton onClick={handleNext} style={{ right: 0 }}>
        <ArrowForwardIos />
      </ArrowButton>
    </SliderContainer>
  );
};

export default Menu;
