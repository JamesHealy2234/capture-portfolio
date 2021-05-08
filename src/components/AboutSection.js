import React from "react"

import home1 from '../img/home1.png';

import {About, Description, Image, Hide} from '../styles';

//framer motion 
import {motion} from 'framer-motion';

import {titleAnim, fade, photoAnim} from "../animation"; 

import Wave from './wave';

const AboutSection =() => {
//obj
// have to use framer motion with quotes

    return(
        <About >
            <Description>
                <motion.div>

                    <Hide className="hide">
                        <motion.h2 variants={titleAnim}>We work to </motion.h2>
                    </Hide>

                    <Hide className="hide">
                        <motion.h2>make your <span>photography</span></motion.h2>
                    </Hide>
                    <Hide className="hide">
                         <motion.h2 variants={titleAnim}>experience better.</motion.h2>
                    </Hide>  
                </motion.div>
                <motion.p variants={fade}>Contact us for any Photography or videography ideas that you 
                are intrested in. We have professionals that are highly experienced 
                in their field
                </motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Description>

            <Image className="image"> 
                    {/* initial='hidden' animate='show' "to break out of the stagger if need be" */ }
                <motion.img variants={photoAnim} src={home1} alt="Person with Camera"/>
            </Image>
            <Wave/>
        </About>
    )
};

//styled components outside the render tag 

//Convert to SCSS later




export default AboutSection