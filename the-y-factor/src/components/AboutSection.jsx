import React from 'react'
// styled
import styled from 'styled-components'
import {Button, Hide} from '../styles'
import Wave from '../components/Wave'
// imgs
import person from '../imgs/person.jpg'
// animations
import {motion} from 'framer-motion'
import {titleAnim, fade, photoAnim} from '../animation'
// React Router Dom
import {Link} from 'react-router-dom'

function AboutSection() {
    return (
        <About>
            <Wave />
            <Description>
                <motion.h1 variants={titleAnim}><span>Take Your Fitness<br/></span>To The Next Level</motion.h1>
                <motion.p variants={fade}>Premium online & individual personal<br/> training in the Cleveland area</motion.p>
                <Button variants={fade}>Start Here</Button>
                <Link to='/contact'><Button variants={fade}>Contact</Button></Link>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={person} alt="Photo" />
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
        font-weight: lighter;
    }

    span {
        color: var(--third-color);
    }
`

const Image = styled.div`
    overflow: hidden;
    position: absolute;
    display: flex;
    bottom: -20%;
    right: 15%;
    height: 100%;
    @media(max-width: 1400px){
        bottom: -20%;
        right: 10%;
        width: 30%;
    }
    
    img {
        height: 100%;
        width: 100%;
        margin: auto;
    }
`


export default AboutSection
