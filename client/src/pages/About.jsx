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
    
`
const Container = styled.div`
    display: flex;
    height: calc(100vh - 100px);
    position: relative;
    width: 100%;
    justify-content: center;
    align-items: center;
`
const Header = styled.h1`
    align-items: left;
    font-size: 35px;
    font-weight: 800;
    color: var(--secondary-text);
    font-family: Reddit Sans Condensed;
`
const Question = styled.h1`
    align-items: left;
    font-size: 25px;
    font-weight: 800;
    color: var(--logo-background);
    font-family: Reddit Sans Condensed;
    margin-left: 100px;
`
const Answer = styled.h1`
    align-items: left;
    font-size: 25px;
    font-weight: 800;
    color: var(--answer-text);
    font-family: Reddit Sans Condensed;
    margin-left: 200px;
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 500px;
    width: 900px;
    padding: 40px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

`

const About = () => {
  return (
    <Section>
    <Container>
        <MainContainer>

            <Header>Frequently Asked Questions</Header>

            <Question>What is YUPP?</Question>
            <Answer>YUPP is a platform that connects users with the best food deals in their area.&nbsp;
                 <a href="/">Read more here.</a></Answer>
            <Question>How much does Yupp cost to use?</Question>
            <Answer>YUPP is 100% free for all users! We aim to find you the best deals and save you money.</Answer>
            <Question>How do I search for a restaurant?</Question>
            <Answer>Use the Navigation Bar on the Restaurants Page.</Answer>

         </MainContainer>
    </Container>
    </Section>
  )
}

export default About