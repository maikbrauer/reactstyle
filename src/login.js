import React, { useState } from 'react';
import {redirect, useNavigate} from 'react-router-dom';

const Login = () => {
    import('./login.css');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    function gotohub() {
        navigate('/')
    }

    return (
        <div className="login-container">
            <h2>Anmeldung</h2>
            <input type="text" id="username" name="username" placeholder="Benutzername" required/>
            <input type="password" id="password" name="password" placeholder="Passwort" required/>
            <button onClick={gotohub}>Anmelden</button>
            <div
                className="background-text">LOGIN TESTFORM
            </div>
        </div>
    );
};

export default Login;