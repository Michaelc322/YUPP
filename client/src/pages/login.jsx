
<form action = "action page.php" method ="post">

</form>
import React from 'react'
import './login.css'

const Body = styled.div`
  font-family: Arial, sans-serif;
      background-color: #f4f4f9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    `

const Container = styled.div`
    background-color: white;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    width: 300px;
    text-align: center;
`
const H1 = styled.h1`
  margin-bottom: 20px;
  `
const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  `
  const Input = styled.input`
   width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid #ddd;
`
const Button = styled.button`
   width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: #0056b3;
    }

    `

Function
const login = () => {
  return (

  <Body>
    <Container>
        <br></br>
        <Form action = "POST" >
          <H1 class="form_title">Login:</H1>
          <Div class="form_message form__message--error">Incorrect username/password.</Div>
          <Label for="uname">Username:</Label><br></br>
          <Input type="text" id="uname" name="uname"></Input><br></br>
          <Label for="pass">Password:</Label><br></br>
          <Input type="text" id="lname" name="lname"></Input><br></br>
          <Button type="submit">Login</Button>
        </Form>
    </Container>
  </Body>
  )
}

export default login