import React from "react";
import img from "../assets/XPENCE.svg";

function Login() {
  return (
    <div className="logi-page">
      <img src={img} alt="logo"></img>
      <form action="">
        <h2>Welcome to XPENCE</h2>
        <h4>Login to continue</h4>
        <div>
            <label for="name">Name</label>
            <br />
            <input type='Name' name='name' placeholder="Enter Name"></input>
        </div>
        <div>
            <label for="password">Password</label>
            <br />
            <input type='Password' name='password' placeholder="Password"></input>
        </div>
        <di>
          <button type='submit'>Login</button>
        </di>

        <div>
            <h4>Forgot password?</h4>
        </div>
      </form>

        <h4>TaskForce 5.0</h4>
    </div>
  );
}

export default Login;
