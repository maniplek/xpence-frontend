import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import img from "../../assets/XPENCE.svg";
import loginAction from "../../redux/actions/loginAction";

function Login() {

  const dispatch = useDispatch();
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [userInfo, setUserInfo] = useState([]);

  const submitLogin = async (e) =>{
    e.preventDefault();
    const response = await dispatch(loginAction({username, password}));

   
    console.log(response);
  };

  return (
    <div className="login-page">
      <img src={img} id="logo-image" alt="logo"></img>
      <form action="" onSubmit={submitLogin}>
        <h2 id='welcome'>Welcome to XPENCE</h2>
        <h4 id='to-continue'>Login to continue</h4>
        <div>
          <label for="email" id="input-name">Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={username}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            placeholder="Enter Email"
            required="required"
          ></input>
        </div>
        <div>
          <label for="password" id="input-name">Password</label>
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
          <button type="submit" onClick={submitLogin}><link to='/Main'>Login</link></button>
        </di>

        <div>
          <h4 id="forgot">Forgot password?</h4>
        </div>
        <hr></hr>
        <div>
          <h5 id="new"> New? 
          <Link  to='/' id="link"> CREATE ACOUNT</Link> </h5>
        </div>
        <br></br>
      </form>
      <footer>
        <h4>TaskForce 5.0</h4>
      </footer>
    </div>
  );
}

export default Login;
