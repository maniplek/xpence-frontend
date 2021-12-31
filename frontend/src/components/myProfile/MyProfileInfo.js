import React from "react";
import myProfile from "../myProfile/myProfile.css";
import pic from '../../assets/Capture.jpeg'

function MyProfileInfo() {
  return (
    <div className="MyProfileInfo">
      <form action="">
        <div>
          <img className="profile-pic" src={pic} alt=''/>
          <h4 id="edit">Edit Profile picture</h4>
        </div>
        <div className="content">
          <h1 id="title-my-profile">My Profile info</h1>
          <div>
            <label for="name">Name</label>
            <br />
            <input type="text" id="input-field" name="name" placeholder="Yves Honore" />
          </div>
          <div>
            <label for="email">Email</label>
            <br />
            <input
            id="input-field" 
              type="email"
              name="email"
              placeholder="yveshonore@awesomity.rw"
            />
          </div>
          <div>
            <label for="Phone">Phone</label>
            <br />
            <input type="number" id="input-field" name="phone" placeholder="+250 789 000 000" />
          </div>
          <div>
            <h3>Edit Password</h3>
          </div>
          <div className="reset-password">
            <div>
            <label for="Password">Current Password</label><br/>
            <input type="password" id="reset-field" name="password" placeholder="*********"/>
            </div>
            <div>
            <label for="New Password">New Password</label><br/>
            <input type="password"  id="reset-field" name="password" placeholder="*********"/>
            </div>
          </div>

          <div>
            <button id="btn">SAVE CHANGES</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MyProfileInfo;
