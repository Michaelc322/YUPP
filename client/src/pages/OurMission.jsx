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
const Header = styled.h1`
    align-items: left;
    font-size: 75px;
    font-weight: 800;
    color: var(--secondary-text);
    font-family: Reddit Sans Condensed;
    margin-left: 100px
`
const SubText = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: var(--text-color);
    font-family: Montserrat;
    line-height: 2;

`
const OurMission = () => {
  return (
    <Container>
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
    </Container>
  )
}
export default OurMission