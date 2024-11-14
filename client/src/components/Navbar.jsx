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
    top: 0px;
`

const NavLink = styled.a`
    display: flex;
    justify-content: center;    
    align-items: center;
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
    transition: 0.5s;
    width: 150px;
    height: 100px;
    position: relative;
    overflow: hidden;

    &:hover{
        color: #fff;

    }

    &::before{
        content: "";
        position: absolute;
        /* width: 100%;
        height: 0%; */
        top: var(--y);
        left: var(--x);
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        border-radius: 50%;


        /* bottom: 0;
        left: 0; */
        background: var(--secondary-text);
        transition: width 0.5s, height 0.5s;
        z-index: -1;

    }

    /* &:before{
        bottom: 0;
        border-radius: 50% 50% 0 0;
    } */


    &:hover::before{
        /* height: 180%; */
        width: 350px;
        height: 350px;
    }
`


const LogoBackground = styled.div`
    background-color: var(--logo-background);
    height: 100px;
    width: 250px;
    overflow: hidden;
    border-radius: 0px 0px 25px 25px;
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
const HomeButton = styled.a`
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: var(--secondary-text);
`

const Navbar = () => {
    const handleMouseEnter = (e) => {
        const navLink = e.target;
        const navLinkBox = navLink.getBoundingClientRect();
        const x = e.clientX - navLinkBox.left;
        const y = e.clientY - navLinkBox.top;
        navLink.style.setProperty('--x', `${x}px`);
        navLink.style.setProperty('--y', `${y}px`);
    }
    
  return (
    <>
    <Nav>
        <NavLink className="btn" href="/restaurants" onMouseEnter={handleMouseEnter}>Restaurants</NavLink>
        <NavLink className="btn" href="/OurMission" onMouseEnter={handleMouseEnter}>Our Mission</NavLink>

        <LogoBackground>
            <MainLogo>
                <HomeButton href='/'>
                    <span class="Y">Y</span>
                    <span class="U">U</span>
                    <span class="P1">P</span>
                    <span class="P2">P</span>
                </HomeButton>
            </MainLogo>
        </LogoBackground>
        <NavLink href="/about" onMouseEnter={handleMouseEnter}>FAQ</NavLink>
        <NavLink href="/contact" onMouseEnter={handleMouseEnter}>Contact Us</NavLink>
    </Nav>


    </>
  )
}

export default Navbar