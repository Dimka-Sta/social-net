import React from "react";
import classes from './Header.module.css';
import { NavLink } from "react-router-dom";


function Header() {
    return (
        <header className={classes.header} >

            <div>

                <img alt='logo' src='https://upload.wikimedia.org/wikipedia/ru/thumb/e/e6/GAZ-Logo.svg/1200px-GAZ-Logo.svg.png' />

                <div className={classes.headerBlock}>

                    <div className={classes.headerButton}>
                    <NavLink to="/profile" ClassName={classes.headerButton}>
                        <img alt='ava' src='https://auto.yuga.ru/media/a3/ae/01_gaz_7__2979n7u.jpg' />
                    </NavLink>
                    </div>
                    
                    <div className={classes.headerButton}> LogOut </div>
                    <div className={classes.headerButton}> About </div>
                    <div className={classes.headerButton}> Eng </div>
                </div>

            </div>

        </header>
    )

//

}

export default Header;