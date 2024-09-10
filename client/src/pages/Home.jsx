import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 100px);
    position: relative;
    top: 100px;
    width: 100%;

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
        <img className = "img3" src='./images/smoothies.jpg'/>
        <img className = "img4" src='./images/sushi.jpg'/>
        <img className = "img5" src='./images/burger.jpeg'/>
      </ImageContainer>
    </Container>
  )
}

export default Home