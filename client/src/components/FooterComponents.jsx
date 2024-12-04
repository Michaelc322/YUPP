import styled from "styled-components";
 
export const Box = styled.div`
    background: var(--background-color);
    //position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 0;
    border-top: 1px solid #269577;
 
`;
 
export const FooterContainer = styled.div`
    padding: 70px 30px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    h3{
        color: var(--secondary-text);
        font-family: Poppins;
    }
`;
 

export const FooterWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
`
 export const Socials = styled.a`
    color: var(--secondary-text);
    font-size: 1.2rem;
    font-family: "Poppins";
    transition: color 0.3s ease-in-out;
    padding-right: 20px;
    &:hover{
        color: #fff;
    }
 `

export const FooterLink = styled.a`

    margin: 20px;
    font-size: 18px;
    text-decoration: none;
 
    &:hover {
        color: #ccffcc;
        transition: 200ms ease-in;
    }
`;
 
export const Heading = styled.p`
    font-size: 24px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`;