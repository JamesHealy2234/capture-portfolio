
import React from 'react';

import Aboutsection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";


import {motion} from "framer-motion";
import {pageAnimation} from "../animation";
import ScrollTop from '../components/ScrollTop';

const AboutUs = () => {
    return(
        // empty div "<>"
    
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            <Aboutsection/>
            <ServicesSection/>
            <FaqSection/>
            <ScrollTop/>
        </motion.div>
        
    )


}

export default AboutUs