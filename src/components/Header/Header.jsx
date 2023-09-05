import React from "react";
import classes from './Header.module.css';


function Header() {
    return (
        <header className={classes.header} >

            <div>
                <img alt='logo' src='https://upload.wikimedia.org/wikipedia/ru/thumb/e/e6/GAZ-Logo.svg/1200px-GAZ-Logo.svg.png' />

                <div className={classes.headerBlock}>
                    <div className={classes.headerButton}> LogIn </div> 
                    <div className={classes.headerButton}> About </div> 
                    <div className={classes.headerButton}> Eng </div> 
                </div>

            </div>

        </header>
    )


}

export default Header;