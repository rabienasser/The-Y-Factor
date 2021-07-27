import React from 'react'
// framer-motion
import {motion} from 'framer-motion'
import {pageAnimation, colorSlider, colorFade} from '../animation'
// Styles
import {Frame, Frame2, Frame3, Frame4} from '../styles'

function Contact() {
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <Frame variants={colorSlider} />
            <Frame2 variants={colorSlider} />
            <Frame3 variants={colorSlider} />
            <Frame4 variants={colorSlider} />

            <motion.h1 variants={colorFade}>Contact Page</motion.h1>
        </motion.div>
    )
}

export default Contact
