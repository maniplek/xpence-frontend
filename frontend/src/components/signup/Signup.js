import React, { useState, useEffect } from "react";
import logo from "../../assets/XPENCE.svg";
import { Link } from "react-router-dom";
import '../signup/signup.css';
import {useDispatch} from 'react-redux';
import signupAction from  '../../redux/actions/signupActions'
import { Redirect } from "react-router-dom";

function Signup(props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  // const [users ,setUser] = useState([]);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await dispatch(signupAction({email, name, password}));
    if(response === true) {
      window.location = '/login';
    } else {
      alert('error signing up') //setError('')
    }
  }

  return (
    <div className="signup-page">
      <img id="logo-image" src={logo} alt=""></img>
      <form action="" onSubmit={handleSubmit}>
        <h1 id="register">Register</h1>
        <div>
          <label for="username" id="input-name">Name</label>
          <br />
          <input
            id="input"
            type="text"
            name="username"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
        </div>
        <div>
          <label id="input-name"for="email">Email</label>
          <br />
          <input
           id="input"
            type="email"
            name="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
        </div>
        <div>
          <label for="Password" id="input-name">Password</label>
          <br />
          <input
            id="input"
            type="password"
            name="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <di>
          <button type="submit" id="btnbtn" onClick={handleSubmit}>Register</button>
        </di>
        <div>
          <h5 id="got-account">
            Already have an acount? <Link id="link" to="/login">LOGIN</Link>
          </h5>
        </div>
      </form>
      <footer>TaskForce 5.0</footer>
    </div>
  );
}

export default Signup;
