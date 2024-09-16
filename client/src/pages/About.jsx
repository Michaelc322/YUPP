import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
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
    margin-left: 100px;
`
const Question = styled.h1`
    align-items: left;
    font-size: 50px;
    font-weight: 800;
    color: var(--logo-background);
    font-family: Reddit Sans Condensed;
    margin-left: 200px;
`
const Answer = styled.h1`
    align-items: left;
    font-size: 50px;
    font-weight: 800;
    color: var(--answer-text);
    font-family: Reddit Sans Condensed;
    margin-left: 300px;
`

const About = () => {
  return (
    <Container>
        <div>

            <Header>Frequently Asked Questions</Header>

            <Question>What is YUPP?</Question>
            <Answer>YUPP is a platform that connects users with the best food deals in their area.&nbsp;
                 <a href="/">Read more here.</a></Answer>
            <Question>How much does Yupp cost to use?</Question>
            <Answer>YUPP is 100% free for all users! We aim to find you the best deals and save you money.</Answer>
            <Question>How do I search for a restaurant?</Question>
            <Answer>Use the Navigation Bar on the Restaurants Page.</Answer>

         </div>
    </Container>
  )
}

export default About