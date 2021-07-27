import React from 'react'
// Styled
import styled from 'styled-components'
import {Frame, Frame2, Frame3, Frame4} from '../styles'
// framer-motion
import {motion} from 'framer-motion'
import {pageAnimation, colorSlider, colorFade} from '../animation'

function Mission() {
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <Frame variants={colorSlider} />
            <Frame2 variants={colorSlider} />
            <Frame3 variants={colorSlider} />
            <Frame4 variants={colorSlider} />
            
            <motion.h1 variants={colorFade}>Mission Page</motion.h1>
        </motion.div>
    )
}

export default Mission
