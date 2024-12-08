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
    margin-top: 75px;
    @media ${device.md}{
        top: 80px;
    }
    
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
        inset: -0.1rem;
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

`

const TitleText = styled.h1`
    padding: 20px;
    background-image: linear-gradient(90deg, #0f8062, var(--secondary-text));
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 50px;
    font-family: Josefin Sans;
    margin-bottom: 20px;

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
    margin: 5px 0px 20px 0px;
    border-radius: 10px;
    outline: none;
    border: 2px solid #111111;
    background: #fff;
    transition: all 0.3s ease;

    // edits
    box-sizing: border-box;
    width: 100%;
    
    &:focus{
        border-color:#269577;
    }
    

`

export const SubmitButton = styled.button`
    display: flex;
    background-image: linear-gradient(90deg, #269577, #70d8a9);
    border: none;
    border-radius: 50px;
    height:40px;
    text-align: center;
    margin: 10px;
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
    margin: 0px 10px 0px 10px;


`

export const FormBox = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    padding: 40px 60px;

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

export const NameCon = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    column-gap: 10px;

    @media ${device.xxl}{
        
    
    }

`


export { Section, Container, TitleText }