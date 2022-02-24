import React from 'react';
// import {BrowserRouter, Link, Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Route, Navigate, Routes} from "react-router-dom";
import Developers from "../pages/Developers";
import Contacts from "../pages/Contacts";
import Login from "../pages/Login";
const AppRouter = () => {
    return (
        <Routes>

            <Route path="/developers" element=<Developers/> key="/about"/>
            <Route path="/contacts" element=<Contacts/> key="/about"/>
            <Route path="/login" element=<Login/> key="/login"/>
            <Route path= "*" element=<Navigate replace to="/login"/>/>

        </Routes>
    );
};

export default AppRouter;