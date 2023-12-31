import React from "react";
import classes from './Navbar.module.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" ClassName={classes.activeLink}>Profile</NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/news"activeClassName={classes.activeLink}>News</NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/musik">Musik</NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to="/users">Users</NavLink>
      </div>

      <div className={classes.item}>
        <NavLink to='/settings'>Settings</NavLink>
      </div>
    </nav>
  )

}

export default Navbar;