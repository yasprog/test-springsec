import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Developers from "./pages/Developers";
import Contacts from "./pages/Contacts";

function App() {
    return (    <BrowserRouter>
            <div className="navbar">
                <div className="navbar__links">
                    <Link to="/about">О сайте</Link>
                    <Link to="/developers">Девелоперы</Link>
                    <Link to="/contacts">Контакты</Link>

                </div>
            </div>
            <Routes>
                <Route path="/about" element=<About/> key="/about"/>
                <Route path="/developers" element=<Developers/> key="/about"/>
                <Route path="/contacts" element=<Contacts/> key="/about"/>

            </Routes>

        </BrowserRouter>

    );
}

export default App;

