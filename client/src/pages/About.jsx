import React from 'react'
import styled from 'styled-components'
import { device } from '../Styles/breakpoints'

const Section = styled.section`
  position: relative;
  display: flex;
  padding: 50px;
  align-items: center;
  background-color: var(--background-color);
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;

  @media ${device.md} {
    top: 80px;
  }
`

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`

const Header = styled.h1`
  font-size: 45px;
  font-weight: 800;
  color: var(--secondary-text);
  font-family: Reddit Sans Condensed;
  margin-bottom: 
`

const Question = styled.h2`
  font-size: 25px;
  font-weight: bold;
  color: var(--logo-background);
  font-family: Reddit Sans Condensed;
  margin: 20px 0 5px 0;
`

const Answer = styled.p`
  font-size: 20px;
  font-weight: normal;
  color: var(--answer-text);
  font-family: Reddit Sans Condensed;
  margin-bottom: 20px;
  line-height: 1.6;

  a {
    color: var(--link-color);
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  max-height: 80vh; /* Set a maximum height */
  width: 900px;
  padding: 40px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`

const About = () => {
  return (
    <Section>
      <Container>
        <MainContainer>
          <Header>Frequently Asked Questions</Header>

          <Question>What is YUPP?</Question>
          <Answer>
            YUPP is a platform that connects users with the best food deals in their area.&nbsp;
            <a href="/">Read more here.</a>
          </Answer>
          <Question>How much does Yupp cost to use?</Question>
          <Answer>YUPP is 100% free for all users! We aim to find you the best deals and save you money.</Answer>
          <Question>How do I search for a restaurant?</Question>
          <Answer>Use the Navigation Bar on the Restaurants Page.</Answer>
          <Question>Can I suggest restaurants to add to YUPP?</Question>
          <Answer>
            Absolutely! Please send your suggestions through the <a href="/contact">Contact Us</a> page.
          </Answer>
          <Question>How does YUPP find deals?</Question>
          <Answer>
            YUPP partners with local restaurants and uses advanced algorithms to find the best deals for you.
          </Answer>
          <Question>Does YUPP work outside the U.S.?</Question>
          <Answer>Currently, YUPP is only available in the United States, but we are working to expand globally!</Answer>
          <Question>How can I reset my password?</Question>
          <Answer>
            Go to the <a href="/login">Login</a> page and click "Forgot Password." Follow the instructions to reset it.
          </Answer>
        </MainContainer>
      </Container>
    </Section>
  )
}

export default About
