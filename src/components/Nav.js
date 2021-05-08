import React from "react";

import styled from "styled-components";

import {Link, useHistory} from 'react-router-dom';

import {motion} from 'framer-motion';

const Nav= () => {
    const history = useHistory();
    const activePath = history.location.pathname;
    return (
       <StyledNav>
           <h1>
               <Link id="logo" to="/"> Capture </Link>
            </h1>
           <ul>
                <li>
                    <Link  to="/">1. About us </Link>
                    <Line
                        transition={{duration: 0.75}}
                        inital={{width: '0%'}}
                        animate={{width: activePath ==='/' ? '50%' :'0%'}}
                    />
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                    <Line
                        transition={{duration: 0.75}}
                        inital={{width: '0%'}}
                        animate={{width: activePath ==='/work' ? '50%' :'0%'}}
                    />
                </li>

                <li>
                    <Link to="/recent">4. Recent Work</Link>
                    <Line
                        transition={{duration: 0.75}}
                        inital={{width: '0%'}}
                        animate={{width: activePath ==='/recent' ? '50%' :'0%'}}
                    />
                </li>

                <li>
                    <Link to="/contact">3. Contact us</Link>
                    <Line
                        transition={{duration: 0.75}}
                        inital={{width: '0%'}}
                        animate={{width: activePath ==='/contact' ? '50%' :'0%'}}
                    />
                </li>
           </ul>
       </StyledNav>
    );
}

export default Nav

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex; 
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;
    //sticky nav
    position: sticky;
    top: 0;
    z-index: 10;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
        
    }
    #logo{
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }

    li{
        padding-left: 10rem;
        position: relative;
    }

    @media(max-width: 1300px){
        flex-direction: column;
        padding: 2rem 1rem;

        #logo{
            display: inline-block;
            margin: 2rem; 
        }
        ul{
            padding: 2rem;
            justify-content: space-around;
            width: 100%; 
            li{
                padding: 0;
            }
        }
    }
`;


const Line = styled(motion.div)`
    height: 0.3rem;
    background: #23d997;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 60%;
    @media(max-width: 1300px){
        left: 0%;
    }


`;
