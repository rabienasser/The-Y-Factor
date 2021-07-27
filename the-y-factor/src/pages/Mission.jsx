import React from 'react'
// Styled
import styled from 'styled-components'
// framer-motion
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'
import {colorSlider, colorFade} from '../animation'

function Mission() {
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <Frame1 variants={colorSlider} />
            <Frame2 variants={colorSlider} />
            <Frame3 variants={colorSlider} />
            <Frame4 variants={colorSlider} />
            
            <motion.h1 variants={colorFade}>Mission Page</motion.h1>
        </motion.div>
    )
}

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: var(--third-color);
    z-index: 2;
`

const Frame2 = styled(Frame1)`
    /* left: 20%; */
    background: var(--light-grey);
`

const Frame3 = styled(Frame1)`
    /* left: 60%; */
    background: var(--dark-blue);
`

const Frame4 = styled(Frame1)`
    /* left: 80%; */
    background: var(--dark-grey);
`

export default Mission
