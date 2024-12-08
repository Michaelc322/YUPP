
import React from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

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
    height: 600px;
    position: relative;
    margin-bottom: 100px;
    top: 100px;
    width: 100%;
`;

const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    max-width: 600px;
    padding: 40px;
    background-color: #fff;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    height: 100%;
`;

const Header = styled.h1`
    font-size: 3em;
    font-weight: 800;
    color: var(--secondary-text); /* Green color */
    font-family: 'Poppins', sans-serif;
    margin-bottom: 5px;
    text-align: center;
`;

const SubText = styled.p`
    font-size: 1.25em;
    font-weight: 500;
    color: #f4d548; /* Yellow color */
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    text-align: center;
    margin-bottom: 10px;
`;

const ContactInfo = styled.p`
    font-size: 1.1em;
    color: #0073e6;
    font-weight: bold;
    text-align: center;
`;

const FormContainer = styled.form`
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
    height: 10px;
    margin: 0;
`;

const TextArea = styled.textarea`
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1em;
    width: 100%;
    resize: none;
    height: 50px;
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
    margin-bottom: 50px;
    
    &:hover {
        background-color: #005bb5;
    }
`;

const ContactUs = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <Section>
    <Container>
      <VerticalContainer>
        <Header>Contact Us</Header>
        <SubText>
          At YUPP, we value your input. If you have any questions, comments, feature requests, or concerns, please let us know!
        </SubText>
        <ContactInfo>Email: YUPPassist@gmail.com</ContactInfo>
        
        <FormContainer onSubmit={sendEmail}>
          <label>Name</label>
          <Input type="text" id="from_name" name="from_name" />
          <label>E-mail</label>
          <Input type="email" id="from_email" name="from_email" placeholder="Your email.." required />
          <label>Message</label>
          <TextArea id="message" name="message" />
          <Button type="submit" value="Send" disabled={isSubmitting}>Submit</Button>
          {stateMessage && <p>{stateMessage}</p>}
        </FormContainer>
      </VerticalContainer>
    </Container>
    </Section>
  );
};

export default ContactUs;