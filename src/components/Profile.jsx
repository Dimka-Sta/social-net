import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
    return (
      <div className={classes.content}>
      <div>
      <img  alt='logo' src='https://assets.kpmg.com/is/image/kpmg/future-car-1600-1:cq5dam.web.1082.378'/>
      </div>
      
      <div>
        ava
      </div>

      <div>
        posts

        <div>
          new posts
        </div>

        <div>
          
          <div className={classes.item}> 
            post 1
          </div>

          <div className={classes.item}>
            post 2
          </div>

        </div>

      </div>



    </div>
    )
        
}

export default Profile;