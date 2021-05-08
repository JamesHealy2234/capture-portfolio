import React from 'react'

import styled from "styled-components";

import {About} from "../styles";
import Toggle from  "../components/Toggle";
import {AnimateSharedLayout} from 'framer-motion'
import useScroll from './useScroll';
import {scrollReveal} from '../animation';

const FaqSection =() => {
    const [element, controls] = useScroll();
    return (
        <Faq variants={scrollReveal} ref={element} animate={controls} initial="hidden">
            <h2>Any Question <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title="How Do I Start">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Ab, dolore.</p>
                    </div>
                </div>
            </Toggle>
        
            <Toggle title="Daily Schedule?">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Ab, dolore.</p>
                    </div>
                </div>
            </Toggle>
             <Toggle title="Different payment methods?">
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Ab, dolore.</p>
                    </div>
                </div>
            </Toggle>  
            <Toggle title="What products do you offer?"> 
                <div className="question">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Ab, dolore.</p>
                    </div>
                </div>
            </Toggle>
            
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;

    span{
        display: block
    }

    h2{
    padding-bottom: 2rem;
    font-weight: lighter;
    }

    .faq-Line{
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;

    }

    .question {
        padding: 3rem 0rem;
        cursor: pointer;

    }

    .answer {
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem; 
        }
    }
`;
export default FaqSection
