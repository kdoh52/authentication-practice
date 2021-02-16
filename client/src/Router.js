import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';

export default function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <div>Home</div>
                </Route>
                <Route path="/register">
                    <div>Register</div>
                </Route>
                <Route path="/login">
                    <div>Login</div>
                </Route>
                <Route path="/customer">
                    <div>Customer</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
