import React from "react";

function MyProfileInfo() {
  return (
    <div>
      <h3>edit Profile picture</h3>
      <form action="">
        <h1>My Profile info</h1>
        <div>
          <label for="name">name</label>
          <br />
          <input type="text" name="name" placeholder="Yves Honore" />
        </div>
        <div>
          <label for="email">Email</label>
          <br />
          <input type="email" name="email" placeholder="yveshonore@awesomity.rw" />
        </div>
        <div>
          <label for="Phone">Phone</label>
          <br />
          <input type="number" name="phone" placeholder="+250 789 000 000" />
        </div>
        <div>
            <h3>Edit Password</h3>
        </div>
        <div>
          <label for="Password">Current Password</label><br />
          <input type="password" name="password" placeholder="Password" /><br />
          <label for="New Password">New Password</label><br />
          <input type="password" name="password" placeholder="Password" />
        </div>

        <div>
            <button on>SAVE CHANGES</button>
        </div>
      </form>
    </div>
  );
}

export default MyProfileInfo;
