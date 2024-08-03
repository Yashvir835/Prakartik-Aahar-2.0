import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
import banner from "../Images/banner1.jpeg";
import Layout from "../components/Layout";
import Sky from "../Images/sky.jpg";
import { Box, Typography, Button } from "@mui/material";
import ImageSlider from "../components/ImageSlider"; // Import the slider component

const Home = () => {
  console.log("Home component rendered");
  return (
    <div className={styles.home}>
      <ImageSlider /> {/* Add the slider here */}
      <div className={styles.container}>
        <div className={styles.Left}>
          <Box
            sx={{
              my: 15,
              textAlign: "center",
              p: 2,
              "& h4": {
                fontWeight: "bold",
                my: 2,
                fontSize: "2rem",
              },
              "& p": {
                textAlign: "justify",
              },
            }}
          >
            <Typography className={styles.Heading} variant="h4">
              Welcome TO the E-Prakartk Aahar Kendra
            </Typography>
            <p>
              We are at aim to make the world healaty and fit Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Nostrum, vel ullam
              consequuntur culpa quod voluptates facilis fuga debitis ipsum rem
              eveniet totam temporibus eius deleniti laboriosam necessitatibus
              rerum repudiandae! Corporis accusantium necessitatibus officia
              recusandae maiores alias quam, labore veritatis asperiores quos
              dolorum quisquam ut laborum aut ipsum eaque aliquid voluptatibus
              perspiciatis mollitia expedita tenetur? Veniam at ea eaque,
              similique culpa natus deserunt enim recusandae temporibus nam
              nesciunt sit dolores pariatur tempore odio? Assumenda aspernatur
              officiis quis consectetur distinctio possimus alias? Commodi
              dolorem nisi, vel autem, at excepturi placeat a quidem odit soluta
              cupiditate quia eum delectus dignissimos facilis sit repellat!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad est
              accusantium libero ex voluptate possimus consequatur, magni
              temporibus quae. Quo consequuntur sequi, vel et veritatis
              quisquam. At qui nam voluptate temporibus iste doloribus inventore
              aspernatur porro. Id consequatur fugit accusantium impedit.
              Ducimus tempore dicta atque magni assumenda accusamus sed
              laudantium sit nemo illum, voluptatibus voluptates cum quis qui
              obcaecati necessitatibus illo quaerat fuga, aperiam recusandae
              nostrum adipisci itaque temporibus. Velit, nesciunt! Repudiandae
              facilis ullam iure libero eaque ea at necessitatibus harum natus.
              Reprehenderit accusantium aliquam, culpa optio suscipit pariatur
              soluta reiciendis ad ducimus dignissimos asperiores delectus,
              aliquid expedita nesciunt eaque!
            </p>
          </Box>
        </div>
        <div
          className={styles.Right}
          style={{ backgroundImage: `url(${banner})` }}
        >
          <div className={styles.headerContainer}>
            <h1>Prakartik Aahar</h1>
            <p>Healthy Food Of India</p>
            <Link to="/menu">
              <Button variant="contained" color="primary">
                JOIN US
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
