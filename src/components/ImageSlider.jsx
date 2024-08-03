import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/ImageSlider.module.css";

import Yog1 from "../Images/yog1.jpg";
import Yog2 from "../Images/yog2.jpg";
import Yog3 from "../Images/yog3.jpg";
import Yog4 from "../Images/yog4.jpg";
import Yog5 from "../Images/yog5.jpg";

const HomePageImages = [
  { src: Yog1, alt: "Yoga Image 1" },
  { src: Yog2, alt: "Yoga Image 2" },
  { src: Yog3, alt: "Yoga Image 3" },
  { src: Yog4, alt: "Yoga Image 4" },
  { src: Yog5, alt: "Yoga Image 5" },
];

import { Card, CardActionArea, CardMedia } from "@mui/material";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  minWidth: "300px",
  maxWidth: "300px",
  margin: "16px", // Added margin between images
  transition: "transform 0.3s ease-in-out",
  transformStyle: "preserve-3d",
  "&:hover": {
    transform: "scale(1.05) rotateY(10deg)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
});

const ImageSlider = () => {
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

  return (
    <div className={styles.sliderContainer}>
      <div>
        <h2>YOG : Study of Self</h2>
        <Slider {...settings}>
          {HomePageImages.map((image, index) => (
            <div key={index} className={styles.slide}>
              <StyledCard>
                <CardActionArea>
                  <CardMedia
                    sx={{ height: "200px" }}
                    component="img"
                    src={image.src}
                    alt={image.alt}
                  />
                </CardActionArea>
              </StyledCard>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
