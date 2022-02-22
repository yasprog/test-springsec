import React, {useState} from "react";
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import './styles/App.css';
import Developers from "./pages/Developers";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import {AuthContext} from "./context";
function App() {
    const [token, setToken] = useState(false)
    return (


        <AuthContext.Provider value={{
            token,
            setToken
        }}>
            <BrowserRouter>
                <div className="navbar">
                    <div className="navbar__links">

                        <NavLink  to="/developers">Девелоперы</NavLink>
                        <NavLink style={{margin: 10}}to="/contacts">Контакты</NavLink>
                        <NavLink to="/login">Войти</NavLink>

                    </div>
                </div>
                <Routes>

                    <Route path="/developers" element=<Developers/> key="/about"/>
                    <Route path="/contacts" element=<Contacts/> key="/about"/>
                    <Route path="/login" element=<Login/> key="/login"/>

                </Routes>

            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;

