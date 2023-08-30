import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img alt='logo' src='https://assets.kpmg.com/is/image/kpmg/future-car-1600-1:cq5dam.web.1082.378' />
      </div>

      <div className={classes.discriptionBlock}>
        <img alt='ava' src='https://sobakovod.club/uploads/posts/2022-01/1641089504_1-sobakovod-club-p-sobaki-nemets-ovcharka-1.jpg' />
      </div>

      <div>
        <div>My name </div>
        <div> My age</div>
        <div>My job</div>
        <div>Status</div>
      </div>

    </div>
  )

}

export default ProfileInfo;