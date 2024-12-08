import React from 'react'
import styled from 'styled-components'
import { device } from '../Styles/breakpoints'

const Section = styled.section`
    position: relative;
    display: flex;
    padding: 50px;
    align-items: center;
    background-color: var(--background-color);
    height: calc(100vh - 100px);
    flex-direction: column;
    justify-content: center;
    @media ${device.md}{
        top: 80px;
    }
    //box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.4);

    
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    top: 100px;
    width: 100%;
    margin-bottom: 100px;

`

const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 800px;
    width: 1200px;
    margin-left: 100px;

    .textHolder {
      width: 700px;
    }

`

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    height: 800px;
    width: 1200px;
    margin-right: 75px;


    .img1 {
        width: 375px;
        height: 400px;
        border-radius: 20%;
        object-fit: cover;
        object-position: -14px;
        margin-right: 10px;
    }

    .img2 {
        width: 400px;
        height: 400px;
        margin-left: 10px;
    }

    .img3 {
        width: 200px;
        height: 300px;
        object-fit: cover;
        border-radius: 40px;
        margin-right: 10px;

    }

    .img4{
        width: 350px;
        height: 300px;
        object-fit: cover;
        border-radius: 40px;
        margin-right: 10px;
        margin-left: 10px;



    }

    .img5{
        width: 200px;
        height: 300px;
        object-fit: cover;
        border-radius: 40px;
        margin-left: 10px;


    }

`

const Header = styled.h1`
    font-size: 75px;
    font-weight: 800;
    color: var(--secondary-text);
    font-family: Reddit Sans Condensed;
`

const SubText = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: var(--text-color);
    font-family: Montserrat;
    line-height: 2;

`

const Image = styled.img`
    

`

const Home = () => {
  return (
    <Section>
    <Container>
      <VerticalContainer>
        <div className = "textHolder">
          <Header>GET THE BEST DEALS NEAR YOU.</Header>
          <SubText>Simply enter your area code, and find the absolute best promotions from restaurants
          of all cuisines and price points near you.
          </SubText>
        </div>
      </VerticalContainer>
      <ImageContainer>
        <img className = "img1" src='./images/tacos.jpg'/>
        <img className = "img2" src='./images/pizza.png'/>
        {/*<img className = "img3" src='./images/smoothies.jpg'/>
        <img className = "img4" src='./images/sushi.jpg'/>
        <img className = "img5" src='./images/burger.jpeg'/>*/}
      </ImageContainer>
    </Container>
    </Section>
  )
}

export default Home