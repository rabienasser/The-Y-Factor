import React from 'react'
// framer-motion
import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'

function Contact() {
    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
            <h1>Contact Page</h1>
        </motion.div>
    )
}

export default Contact
