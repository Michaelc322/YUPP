/* import React from 'react'
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
*/
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 100px);
    position: relative;
    top: 100px;
    width: 100%;
    background-color: #f9f9f9;
`;

const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    max-width: 800px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
    font-size: 2.5em;
    font-weight: bold;
    color: #333;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 20px;
    text-align: center;
`;

const SubText = styled.p`
    font-size: 1.1em;
    color: #555;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 30px;
`;

const ContactInfo = styled.p`
    font-size: 1.1em;
    color: #0073e6;
    font-weight: bold;
    text-align: center;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    max-width: 500px;
`;

const Input = styled.input`
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
    width: 100%;
`;

const TextArea = styled.textarea`
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
    width: 100%;
    resize: none;
    height: 100px;
`;

const Button = styled.button`
    padding: 12px;
    background-color: #0073e6;
    color: #fff;
    font-size: 1.1em;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:hover {
        background-color: #005bb5;
    }
`;

const ContactUs = () => {
  return (
    <Container>
      <VerticalContainer>
        <Header>Contact Us</Header>
        <SubText>
          At YUPP, we value your input. If you have any questions, comments, feature requests, or concerns, please let us know!
        </SubText>
        <ContactInfo>Email: YUPPassist@gmail.com</ContactInfo>
        
        {/* Optional Contact Form */}
        <FormContainer>
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <TextArea placeholder="Your Message" />
          <Button type="submit">Send Message</Button>
        </FormContainer>
      </VerticalContainer>
    </Container>
  );
};

export default ContactUs;