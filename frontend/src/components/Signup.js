import React from "react";
import img from "../assets/XPENCE.svg";

function Signup() {
  return (
    <div className="signup-page">
      <img src={img} alt="logo"></img>
      <form action="">
        <h1>Register</h1>
        <div>
          <label for="name">name</label>
          <br />
          <input type="text" name="name" placeholder="Enter Name" />
        </div>
        <div>
          <label for="email">Email</label>
          <br />
          <input type="email" name="name" placeholder="Enter Email" />
        </div>
        <div>
          <label for="Phone">Phone</label>
          <br />
          <input type="number" name="phone" placeholder="+250 ---------" />
        </div>
        <div>
          <label for="Password">Password</label>
          <br />
          <input type="password" name="password" placeholder="Password" />
        </div>
        <di>
          <button>Register</button>
        </di>
        <div>
          <h3>Already have an acount? LOGIN</h3>
        </div>
      </form>
      <h3>TaskForce 5.0</h3>
    </div>
  );
}

export default Signup;
