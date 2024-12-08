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
     margin-top: 50px;
    @media ${device.md}{
        top: 80px;
    }
    
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 100px);
    position: relative;
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

const Header = styled.h1`
    align-items: left;
    font-size: 75px;
    font-weight: 800;
    color: var(--secondary-text);
    font-family: poppins, sans-seriff;
    margin-left: 0px
`
const SubText = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: #f4d548;
    font-family: poppins, sans-seriff;
    line-height: 2;

`
const ImageContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the image horizontally */
  margin-top: 25px; /* Push the image to the bottom of the VerticalContainer */
  padding-bottom: 100px; /* Add some space from the bottom */

  img {
    width: 150px; 
    height: 250px; 
  }
`
const Image = styled.img`
`

const OurMission = () => {
  return (
    <Section>
    <Container>
      <VerticalContainer>
        <div>
          <Header>Our Mission </Header>
          <SubText>
          At YUPP, our mission is to provide an easier way to 
          find the best deals near you. As college students, 
          we are very familiar with navigating a tight 
          budget - whether you are in college, or just trying to save, 
          let YUPP do the work for you!
          </SubText>
        </div>
        <ImageContainer>
          <img className="img" src ='./images/coffee.png'/>
        </ImageContainer>
      </VerticalContainer>
    </Container>
    </Section>
  )
}
export default OurMission;