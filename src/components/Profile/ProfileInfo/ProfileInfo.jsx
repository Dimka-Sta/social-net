import React from "react";
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.backgroundBlock}>
        <img alt='logo' src='https://assets.kpmg.com/is/image/kpmg/future-car-1600-1:cq5dam.web.1082.378' />
      </div>

      <div className={classes.discriptionBlock}>
        <img alt='ava' src='https://auto.yuga.ru/media/a3/ae/01_gaz_7__2979n7u.jpg' />
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