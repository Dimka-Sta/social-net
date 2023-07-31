import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <div>
        <img alt='logo' src='https://assets.kpmg.com/is/image/kpmg/future-car-1600-1:cq5dam.web.1082.378' />
      </div>

      <div>
        ava
      </div>

    <MyPosts />

    </div>
  )

}

export default Profile;