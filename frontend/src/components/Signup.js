import React, { useState } from "react";
import img from "../assets/XPENCE.svg";
import { Link } from "react-router-dom";

function Signup() {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [users ,setUser] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newUser = { ...userRegistration, id:new Date().getTime().toString() }
    console.log(users)
    setUser([ ...users, newUser ]);
    console.log(users)

    setUserRegistration({ username: "", email: "", phoneNumber: "" ,password:""})
    
  }

  return (
    <div className="signup-page">
      <img src={img} alt="logo"></img>
      <form action="" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div>
          <label for="username">name</label>
          <br />
          <input
            type="text"
            name="username"
            autoComplete="off"
            value={userRegistration.username}
            onChange={handleInput}
            placeholder="Enter Name"
          />
        </div>
        <div>
          <label for="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            autoComplete="off"
            value={userRegistration.email}
            onChange={handleInput}
            placeholder="Enter Email"
          />
        </div>
        <div>
          <label for="Phone">Phone</label>
          <br />
          <input
            type="text"
            name="phoneNumber"
            autoComplete="off"
            value={userRegistration.phoneNumber}
            onChange={handleInput}
            placeholder="+250 ---------"
          />
        </div>
        <div>
          <label for="Password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            autoComplete="off"
            value={userRegistration.password}
            onChange={handleInput}
            placeholder="Password"
          />
        </div>
        <di>
          <button type="submit">Register</button>
        </di>
        <div>
          <h3>
            Already have an acount? <Link to="/Login">LOGIN</Link>
          </h3>
        </div>
      </form>
      <h3>TaskForce 5.0</h3>
    </div>
  );
}

export default Signup;
