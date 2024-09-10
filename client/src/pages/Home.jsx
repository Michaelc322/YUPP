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
    align-items: center;
    height: 800px;
    width: 100%;
    margin: 25px;
`

const Header = styled.h1``

const SubText = styled.p`

`


const Home = () => {
  return (
    <Container>
      <VerticalContainer>

      </VerticalContainer>
      <VerticalContainer>

      </VerticalContainer>
    </Container>
  )
}

export default Home