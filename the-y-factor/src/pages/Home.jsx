import React from 'react'
// Sections
import AboutSection from '../components/AboutSection'
// styled
import styled from 'styled-components'
// framer-motion
import {motion} from 'framer-motion'
import IntroAnim from '../components/IntroAnim'
import {pageAnimation} from '../animation'

function Home() {
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <IntroAnim />
            <AboutSection />
        </motion.div>
    )
}

export default Home
