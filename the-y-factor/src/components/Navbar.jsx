import React from 'react'
// Styled
import styled from 'styled-components'
// React Router Dom
import {Link} from 'react-router-dom'
// Logo
import logo from '../imgs/logo.png'
import {motion} from 'framer-motion'
import {navFade} from '../animation'

function Navbar() {
    return (
        <StyledNav variants={navFade} initial='hidden' animate='show'> 
                <img className="logo" src={logo} alt="" />
            <ul>
                <li><Link className='list-item' to='/'>Home</Link></li>
                <li><Link className='list-item' to='/mission'>Mission</Link></li>
                <li><Link className='list-item' to='/contact'>Contact</Link></li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled(motion.nav)`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 10rem;
    background: var(--light-color);
    a {
        color: var(--dark-grey);
        text-decoration: none;
    }
    ul {
        display: flex;
    }
    li {
        list-style: none;
        padding-left: 10rem;
        position: relative;
        color: var(--dark-grey);
    }
    .logo {
        height: 4rem;
        width: 9.5rem;
    }
    .list-item {
        font-size: 1.3rem;
    }
    `
export default Navbar
