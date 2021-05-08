import React from 'react';

import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';

import home2 from '../img/home2.png';

import styled from "styled-components"

//TEST


import {About, Description, Image, Hide} from '../styles';


import {scrollReveal} from "../animation";
import useScroll from './useScroll';

const ServicesSection = () =>{
    const [element, controls] = useScroll();
    
    return(
        //have to pass in the animate controls 
        <Services variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <Description>
                <h2>high <span>quality</span> servies</h2>
                <Cards>

                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock icon"/>
                            <h3>efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>

                    <Card>

                        <div className="icon">
                            <img src={diaphragm} alt="diaghragm logo"/>
                            <h3>diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={money} alt="Money icon"/>
                            <h3>affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork icon"/>
                            <h3>teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>

                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="Camera"/>
            </Image>

        </Services>
    )
}


const Services = styled(About)`
    h2{ 
        padding-bottom: 5rem; 
    }

    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem; 
    }
    /* @media (max-width: 1500px) {
    display: block;
    padding: 2rem 2rem;
    } */


`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media(max-width: 1300px){
        justify-content: center;
    }
    
    /* @media (max-width: 1500px) {
    justify-content: center;
  } */
`

const Card = styled.div `
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
    }
    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;

    }
    /* @media (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */


`

export default ServicesSection