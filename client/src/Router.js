import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import AuthContext from './contexts/AuthContext';

export default function Router() {
    const { loggedIn } = useContext(AuthContext)

    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <div>Home</div>
                </Route>
                {loggedIn === false && (
                    <>
                        <Route path="/register">
                            <Register/>
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                    </>
                )}
                {loggedIn === true && (
                    <>
                        <Route path="/customer">
                            <div>Customer</div>
                        </Route>
                    </>
                )}
            </Switch>
        </BrowserRouter>
    )
}
