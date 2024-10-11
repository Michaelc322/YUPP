<form action = "action page.php" method ="post">

</form>
import React from 'react'


const login = () => {
  return (
    <div class = "container">
        <br></br>
        <form action = "POST" class="form" id="login">
          <h1 class="form_title">Login:</h1>
          <div class="form_message form__message--error">Incorrect username/password.</div>
          <label for="uname">Username:</label><br></br>
          <input type="text" id="uname" name="uname"></input><br></br>
          <label for="pass">Password:</label><br></br>
          <input type="text" id="lname" name="lname"></input><br></br>
          <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default login