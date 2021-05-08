import React from "react";

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

import styled from "styled-components";

import theRacer from "../img/theracer-small.png";

const RecentWork = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ backgroundColor: "#fff" }}
    >
      <h1>Our recent pics</h1>

      <Gallery>
        <div>
          <img src={theRacer} alt="GIrl with the bloody car" />
        </div>

        <div></div>
      </Gallery>
    </motion.div>
  );
};

export default RecentWork;

const Gallery = styled.div``;

const Headin = styled.h1``;
