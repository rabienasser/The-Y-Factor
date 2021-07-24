import React from 'react'
// styled
import styled from 'styled-components'
import {Button, Hide} from '../styles'
// imgs
import person from '../imgs/person.jpg'
// IntroAnim
import IntroAnim from '../components/IntroAnim'

function AboutSection() {
    return (
        <About>
            <Description>
                <h1><span>Take Your Fitness</span><br/>To The Next Level</h1>
                <p>premium online & individual personal<br/> training in the Cleveland area</p>
                <Button>Start Here</Button>
                <Button>Contact</Button>
            </Description>
            <Image>
                <img src={person} alt="Photo" />
            </Image>
        </About>
    )
}

const About = styled.div`
    height: 60vh;
    padding: 0rem 10rem;
    display: flex;
    align-items: center;
    position: relative;
    background: var(--dark-blue);
`

const Description = styled.div`
    color: var(--light-color);
    h1 {
        font-size: 3.5rem;
    }
`

const Image = styled.div`
    overflow: hidden;
    position: absolute;
    display: flex;
    bottom: -20%;
    right: 15%;
    background: red;
    height: 100%;
    @media(max-width: 1400px){
        bottom: -20%;
        right: 10%;
    }
    
    img {
        height: 100%;
        width: 100%;
        margin: auto;
        box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
    }
`


export default AboutSection
