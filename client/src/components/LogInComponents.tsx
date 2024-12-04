import styled from "styled-components"
import { device } from "../Styles/breakpoints"


const Section = styled.section`
    position: relative;
    display: flex;
    padding: 80px;
    align-items: center;
    background-color: var(--background-color);
    height: calc(100vh - 80px);
    flex-direction: column;
    justify-content: center;
    
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 30rem;
    font-family: Poppins;

    &::before, &::after{
        content: "";
        position: absolute;
        border-radius: 20px;
        z-index: 1;
    
    }

    &::after{
        filter: blur(.38rem);
    }
    @property --gradient-angle{
        syntax: "<angle>";
        initial-value: 0deg;
        inherits: false;
    }

    @keyframes rotation {
        0% {
            --gradient-angle: 0deg;
        }
        100%{
            --gradient-angle: 360deg;
        }
    }

    @media ${device.md}{
        width: 20rem;
    }

    @media ${device.sm}{
        width: 15rem;
    }

`

const SmallContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 200px;
    font-family: Poppins;
    margin-top: 80px;
`




export const FormContainer = styled.div`
    width: 100%;
    background-color: var(--logo-background);
    border-radius: 20px;
    z-index: 5;
    position: relative;
    h1{
        margin-bottom: 20px;
        color: #269577;
        font-family: Poppins;
        padding: 20px;
        text-align: center;

    }

    
`

export const Fields = styled.input`
    font-family: Quicksand;
    color: #111111;
    font-size: 14px;
    padding: 15px;
    margin: 5px 0px 20px 0;
    border-radius: 10px;
    outline: none;
    border: 2px solid #111111;
    background: #fff;
    transition: all 0.3s ease;

    &:focus{
        border-color:#269577;
    }

`

export const SubmitButton = styled.button`
    display: flex;
    background-image: linear-gradient(90deg, #098564, #269577);
    border: none;
    border-radius: 50px;
    height:40px;
    text-align: center;
    margin-top: 10px;
    font-size: 18px;
    box-shadow: 0 10px 20px -8px rgba(0, 0, 0,.7);
    transform: scale(1);
    transition: 0.5s;
    cursor: pointer;
    position: relative;

    span{
        width:100%;
        line-height: 28px;
        text-decoration: none;
        color: white;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.7);
        transition: 0.5s;
        font-family: Poppins;
        font-weight: 700;
        top: 5px;
        position: relative;
    }

     
    span:after{
        content: ">>>";
        font-family: Josefin Sans;
        position: absolute;
        line-height: 28px;
        opacity: 0;
        top: 0px;
        right: -20px;
        transition: 0.5s;
    }

    &:hover span:after{
        padding-right: 50px;
    }
    &:hover span{
        padding-right: 25px;
    }

    &:hover {
        transform: scale(1.05);
        transition: 0.5s ease-in-out;
    }

    &:hover span:after{
        opacity: 1;
        right: 0;
    }
`

export const InputLabel = styled.label`
    font-family: Quicksand;
    font-size: 20px;
    font-weight: 500;
    color: #269577;



`

export const FormBox = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    padding: 40px 60px;

    @media ${device.md}{
    }

    @media ${device.sm}{
        padding: 20px 20px;
    }
`

export const SmallText = styled.h2`
    font-family: Quicksand;
    color: #414141;
    font-size: 13px;
    margin-top: 20px;
    
    a{
        color: #269577;
    }

`

export const SmallLink = styled.a`
    font-family: Quicksand;
    font-weight: 800;
    font-size: 13px;
    position: relative;
    top: -10px;
    left: 5px;
    width: 118px;
    margin-bottom: 5px;
    color: #269577;
`

export { Section, Container, SmallContainer }