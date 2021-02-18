import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext';
import axios from "axios";

export default function LogoutBtn() {
    const {getLoggedIn} = useContext(AuthContext)

    const history = useHistory();

    async function logout() {
        await axios.get("http://localhost:3001/auth/logout");
        await getLoggedIn();
        history.push("/");
    }

    return (
        <button onClick={logout}>
            Log out
        </button>
    )
}
