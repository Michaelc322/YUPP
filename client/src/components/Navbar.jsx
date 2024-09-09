import React from 'react'
import styled from 'styled-components'

const Nav = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--background-color);
    height: 100px;
    width: 100%;
    overflow: hidden;
    z-index: 100;
`

const NavLink = styled.a`

    color: var(--text-color);
    text-align: center;
    font-family: Montserrat;
    font-weight: 600;
    text-decoration: none;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 18px;
    position: relative;
    cursor: pointer;
    margin-left: 20px;
    margin-right: 20px;
    
`


const LogoBackground = styled.div`
    background-color: var(--logo-background);
    height: 100px;
    width: 250px;
    overflow: hidden;
    border-radius: 0 0 25px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MainLogo = styled.span`
    color: var(--secondary-text);
    text-align: center;
    font-family: Reddit Sans Condensed;
    font-weight: 800;
    padding-left: 5px;
    padding-right: 5px;
    position: relative;
    cursor: pointer;
    margin-left: 20px;
    margin-right: 20px;
    font-size: 60px;

    span{
        display: inline-block;
    }
    .Y {
        transform: rotate(-15deg);
    }
    
    .U {
        transform: translate(-2px, -6px) rotate(-5deg);
    }

    .P1 {
        transform: translate(-2px, -6px) rotate(5deg);
    }

    .P2 {
        transform: translate(-5px, 0px) rotate(15deg);
    }


`

const Navbar = () => {
  return (
    <Nav>
        <NavLink href="/">Restaurants</NavLink>
        <NavLink href="/">Our Mission</NavLink>

        <LogoBackground>
            <MainLogo>
                <span class="Y">Y</span>
                <span class="U">U</span>
                <span class="P1">P</span>
                <span class="P2">P</span>

            </MainLogo>
        </LogoBackground>
        <NavLink href="/about">FAQ</NavLink>
        <NavLink href="/contact">Contact Us</NavLink>
    </Nav>
  )
}

export default Navbar