import React from "react"

import home1 from '../img/home1.png';

// import styled from "styled-components";

import {About, Description, Image, Hide} from '../styles';

const AboutSection =()=>{
    return(
        <About >
            <Description>
                <div className="title">
                    <Hide className="hide">
                        <h2>We Work to Inspire the</h2>
                    </Hide>
                    <Hide className="hide">
                        <h2><span>photography</span></h2>
                    </Hide>
                    <Hide className="hide">
                         <h2>experience.</h2>
                    </Hide>  
                </div>
                <p>Contact us for any Photography or videography ideas that you 
                are intrested in. We have professionals that are highly experienced 
                in their field</p>
                <button>Contact Us</button>
            </Description>

            <Image className="image"> 
                <img src={home1} alt="Person with Camera"/>
            </Image>
        </About>
    )
};

//styled components outside the render tag 

//Convert to SCSS later




export default AboutSection