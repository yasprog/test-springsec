import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">

                <NavLink  to="/developers">Девелоперы</NavLink>
                <NavLink style={{margin: 10}}to="/contacts">Контакты</NavLink>
                <NavLink to="/login">Войти</NavLink>

            </div>
        </div>
    );
};

export default Navbar;