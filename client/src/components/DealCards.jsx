import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'


const HorizontalStack = styled.div`
  width: 100%; /* Full width */
  height: 400px; /* Set a height */
  display: flex;
  align-items: center;
`

const ContainerSlider = styled.div`
  width: 90%;
  margin: 0 auto;

`

const DealCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    height: 300px;
    width: 385px;
    background-color: var(--logo-background);
    border-radius: 10px;
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.4);
    position: relative;


`

const PriceRange = styled.p`
    font-size: 15px;
    font-weight: 300;
    color: #fff;
    font-family: Montserrat;
    margin-left: 20px;
    background-color: var(--secondary-text);
    width: 50px;
    padding: 5px;
    border-radius: 10px;
`

const Distance = styled.p`
    font-size: 15px;
    font-weight: 300;
    color: #fff;
    font-family: Montserrat;
    margin-left: 20px;
    background-color: var(--secondary-text);
    width: 50px;
    padding: 5px;
    border-radius: 10px;
`

const Address = styled.p`
    font-size: 13px;
    font-weight: 400;
    color: #000;
    font-family: Montserrat;
    margin-left: 20px;
    margin-top: 0px;
    margin-right: 10px;

`

const Name = styled.h1`

    font-size: 25px;
    font-weight: 700;
    color: var(--secondary-text);
    font-family: Montserrat;
    margin: 0;
    margin-left: 20px;
    margin-bottom: 0px;

`

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 325px;
    width: 300px;
    margin: 0px 20px;

`


const DealCards = ({ places }) => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4, 
  };


  return (
    <HorizontalStack>
      <ContainerSlider>
    <Slider {...settings}>
      {places?.map((place, index) => (
        <CardContainer>
        <DealCardContainer key={index}>
          <Distance>{place.distance_string}</Distance>
          <Name>{place.name}</Name>
          <Address>{place.address}</Address>
        </DealCardContainer>
        </CardContainer>

      
      ))}
    </Slider>
    </ContainerSlider>
    </HorizontalStack>

  )
}

export default DealCards