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
const Contact_Us = () => {
  return (
    <Container>
      <VerticalContainer>
      <div>
          <Header>Contact Us </Header>
          <SubText>
          At YUPP, we value your input. If you have any questions,
          comments, feature requests, or concerns please let us know!
          Email: YUPPassist@gmail.com
          </SubText>
        </div>
        </VerticalContainer>
    </Container>
  )
}
export default Contact_Us