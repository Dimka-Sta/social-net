import React from "react";
import classes from './Header.module.css';


function Header() {
    return (
    <header className={classes.header} >
        <img alt='logo' src='https://upload.wikimedia.org/wikipedia/ru/thumb/e/e6/GAZ-Logo.svg/1200px-GAZ-Logo.svg.png' />
    </header>
    )
    
    
}

export default Header;