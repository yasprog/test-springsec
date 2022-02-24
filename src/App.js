import React, {useState} from "react";
import {BrowserRouter, Link, Navigate, NavLink, Route, Routes} from "react-router-dom";
import './styles/App.css';

import {AuthContext} from "./context";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
function App() {
    const [token, setToken] = useState(false)
    return (


        <AuthContext.Provider value={{
            token,
            setToken
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>

            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;

