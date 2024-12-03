import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { computeDistanceBetween } from 'spherical-geometry-js'

const HorizontalStack = styled.div`
  width: 100%; /* Full width */
  height: 400px; /* Set a height */
  display: flex;
  align-items: center;
`

const ContainerSlider = styled.div`
  width: 100%;
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

const DealDescription = styled.p`
    font-size: 13px;
    font-weight: 600;
    color: #000;
    font-family: Montserrat;
    margin-left: 20px;
    margin-top: 0px;
    margin-right: 10px;
`

const PriceRange = styled.p`
    font-size: 15px;
    font-weight: 300;
    color: #fff;
    font-family: Montserrat;
    margin-left: 20px;
    background-color: var(--secondary-text);
    width: 35px;
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


const DealCards = ({ places, currentLocation }) => {

  console.log(currentLocation)

  const calculateDistance = () => {
    // calcaulte miles away from currentlocation
    let dist = computeDistanceBetween(currentLocation.lat, currentLocation.lng, currentLocation.lat, currentLocation.lon)
    console.log(dist)


  }


  return (
    <HorizontalStack>
      <ContainerSlider>

    <Swiper 
      spaceBetween={50}
      slidesPerView={5}
      centeredSlides={false}
      slidesPerGroup={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      navigation= {{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      modules={[Navigation]}
      breakpoints={{
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        1445: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        2100: {
          slidesPerView: 5,
          spaceBetween: 50
        }
      }}
      
    >
      <div class="swiper-button-prev"></div>

      {places?.map((place, index) => (

        <SwiperSlide key={index}>
        <CardContainer>
        <DealCardContainer key={index}>
          <PriceRange>{place.priceLevel}</PriceRange>
          <Name>{place.restaurantName}</Name>
          <Address>{place.address}</Address>

          {place.activeDeals?.map((deal, index) => (  
            <DealDescription>{deal}</DealDescription>))}
          
        </DealCardContainer>
        </CardContainer>
        </SwiperSlide>
      ))}
      <div class="swiper-button-next"></div>
      
    </Swiper>
    
    </ContainerSlider>
    </HorizontalStack>

  )
}

export default DealCards