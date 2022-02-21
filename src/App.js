import React from "react";
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";

import Developers from "./pages/Developers";
import Contacts from "./pages/Contacts";

function App() {
    return (    <BrowserRouter>
            <div className="navbar">
                <div className="navbar__links">

                    <NavLink style={{margin: 10}} to="/developers">Девелоперы</NavLink>
                    <NavLink to="/contacts">Контакты</NavLink>

                </div>
            </div>
            <Routes>

                <Route path="/developers" element=<Developers/> key="/about"/>
                <Route path="/contacts" element=<Contacts/> key="/about"/>

            </Routes>

        </BrowserRouter>

    );
}

export default App;

