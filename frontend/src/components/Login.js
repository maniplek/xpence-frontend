import React, { useState } from "react";
import img from "../assets/XPENCE.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userInfo, setUserInfo] =useState([]);

  const submitLogin = (e) => {
    e.preventDefault();
    const newEntry = { email , password}

    setUserInfo([ ...userInfo, newEntry])
    console.log(userInfo);
  }

  return (
    <div className="logi-page">
      <img src={img} alt="logo"></img>
      <form action="" onSubmit={submitLogin}>
        <h2>Welcome to XPENCE</h2>
        <h4>Login to continue</h4>
        <div>
          <label for="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            placeholder="Enter Email"
            required="required"
          ></input>
        </div>
        <div>
          <label for="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
            placeholder="Password"
            required
          ></input>
        </div>
        <di>
          <button type="submit">Login</button>
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
