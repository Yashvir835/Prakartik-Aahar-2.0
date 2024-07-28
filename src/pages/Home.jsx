// Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";
import banner from "../Images/banner1.jpeg";

const Home = () => {
  console.log("Home component rendered");
  return (
    <div className={styles.home} style={{ backgroundImage: `url(${banner})` }}>
      <div className={styles.headerContainer}>
        <h1>Prakartik Aahar</h1>
        <p>Healthy Food Of India</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
