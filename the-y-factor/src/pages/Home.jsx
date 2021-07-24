import React from 'react'
// Sections
import AboutSection from '../components/AboutSection'
import IntroAnim from '../components/IntroAnim'
// styled
import styled from 'styled-components'
// framer-motion
import {motion} from 'framer-motion'

function Home() {
    return (
        <div>
            <IntroAnim />
            <AboutSection />
        </div>
    )
}

export default Home
